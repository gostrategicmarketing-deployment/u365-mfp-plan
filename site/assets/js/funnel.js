/* U365 VSL funnel prototype logic (2 pages). The application sits under the VSL on the same page.
   Booking uses the LIVE unstoppable365.com consult calendar EPviYyuThyCTe6tGVPLP (HighLevel booking
   widget, the one /octconsult uses), loaded only when the man reaches the calendar step and prefilled
   with his name, email and phone. A "no" on either qualifier sends him to the existing /protocol page. */
var U365 = {
  CALENDAR_ID: 'EPviYyuThyCTe6tGVPLP',
  CALENDAR_URL: 'https://api.leadconnectorhq.com/widget/booking/EPviYyuThyCTe6tGVPLP',
  PROTOCOL_URL: 'https://unstoppable365.com/protocol'
};

/* ---------- storage helpers (never required) ---------- */
function sget(k){ try { return JSON.parse(sessionStorage.getItem(k)); } catch(e){ return null; } }
function sset(k,v){ try { sessionStorage.setItem(k, JSON.stringify(v)); } catch(e){} }

/* ---------- UTM / fbclid carry ---------- */
(function(){
  var keys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid'];
  var p = new URLSearchParams(location.search), got = sget('u365_attr') || {};
  keys.forEach(function(k){ if (p.get(k)) got[k] = p.get(k); });
  sset('u365_attr', got);
  document.addEventListener('DOMContentLoaded', function(){
    var qs = new URLSearchParams(got).toString();
    if (!qs) return;
    document.querySelectorAll('a[data-carry]').forEach(function(a){
      a.href += (a.href.indexOf('?') > -1 ? '&' : '?') + qs;
    });
  });
})();

/* ---------- sticky mobile CTA ---------- */
document.addEventListener('DOMContentLoaded', function(){
  var s = document.querySelector('.sticky'), anchor = document.getElementById('apply');
  if (!s || !anchor) return;
  function check(){ var r = anchor.getBoundingClientRect(); s.classList.toggle('show', r.bottom < 0 || r.top > innerHeight); }
  addEventListener('scroll', check, {passive:true}); check();
});

/* ---------- time helpers ---------- */
function etDate(y, m, d, h){
  // Date for h:00 New York time on y-m-d, DST-safe.
  var guess = Date.UTC(y, m, d, h + 5);
  for (var i = 0; i < 2; i++){
    var parts = new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',hour:'numeric',hour12:false,day:'numeric'}).formatToParts(new Date(guess));
    var hh = +parts.find(function(x){return x.type==='hour';}).value % 24;
    var dd = +parts.find(function(x){return x.type==='day';}).value;
    var diff = (h - hh) + (dd !== d ? (dd > d ? -24 : 24) : 0);
    if (!diff) break;
    guess += diff * 3600e3;
  }
  return new Date(guess);
}
function localHour(dt){ return dt.getHours() + dt.getMinutes()/60; }
function tzName(){ try { return Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/_/g,' '); } catch(e){ return 'your time zone'; } }
function fmtTime(dt){ return dt.toLocaleTimeString([], {hour:'numeric', minute:'2-digit'}); }
function fmtDay(dt){ return dt.toLocaleDateString([], {weekday:'long', month:'long', day:'numeric'}); }

/* ---------- application ---------- */
function startApply(){
  var root = document.getElementById('apply'); if (!root) return;
  var steps = [].slice.call(root.querySelectorAll('.step:not([data-offflow])'));
  var notYetStep = root.querySelector('.step[data-step="notyet"]');
  var bar = root.querySelector('.progress i');
  var answers = sget('u365_app') || {};
  var idx = 0;
  var NOT_YET = {
    owner: 'Mindset, Fitness and Performance is built for men who own a trades or home-service business. If that’s you down the road, come back. Until then, here’s a better place to start.',
    revenue: 'Mindset, Fitness and Performance is built for owners running seven-figure companies. That’s not a judgment, it’s who the program was designed around. Here’s a better place to start today.'
  };

  function bringIntoView(){ var r = root.getBoundingClientRect(); if (r.top < 0 || r.top > innerHeight * 0.4) root.scrollIntoView({block:'start'}); }
  function show(i, scroll){
    idx = i;
    if (notYetStep) notYetStep.classList.remove('on');
    bar.parentNode.style.visibility = '';
    steps.forEach(function(s,j){ s.classList.toggle('on', j === i); });
    bar.style.width = Math.round((i + 1) / steps.length * 100) + '%';
    var labels = {owner:'Step 1 of 4', revenue:'Step 2 of 4', change:'Optional question', contact:'Step 3 of 4', calendar:'Step 4 of 4'};
    var sc = root.querySelector('.stepcount'); if (sc) sc.textContent = labels[steps[i].dataset.step] || '';
    if (scroll){
      bringIntoView();
      var q = steps[i].querySelector('.q'); if (q){ q.setAttribute('tabindex','-1'); q.focus({preventScroll:true}); }
    }
    if (steps[i].dataset.step === 'calendar') buildCalendar();
  }
  function notYet(reason){
    answers.not_yet = reason; sset('u365_app', answers);
    steps.forEach(function(s){ s.classList.remove('on'); });
    bar.parentNode.style.visibility = 'hidden';
    var why = document.getElementById('why'); if (why && NOT_YET[reason]) why.textContent = NOT_YET[reason];
    notYetStep.classList.add('on'); bringIntoView();
  }

  root.addEventListener('click', function(e){
    var o = e.target.closest('.opt');
    if (o){
      var step = o.closest('.step'), key = step.dataset.step, val = o.dataset.v;
      step.querySelectorAll('.opt').forEach(function(x){ x.classList.remove('sel'); x.setAttribute('aria-pressed','false'); });
      o.classList.add('sel'); o.setAttribute('aria-pressed','true');
      answers[key] = val; sset('u365_app', answers);
      setTimeout(function(){
        if (key === 'owner' && val === 'no') return notYet('owner');
        if (key === 'revenue' && val === 'no') return notYet('revenue');
        show(idx + 1, true);
      }, 160);
      return;
    }
    if (e.target.closest('.skip')){ answers.change = 'skipped'; sset('u365_app', answers); return show(idx + 1, true); }
    if (e.target.closest('.restart')){ delete answers.not_yet; return show(0, true); }
    if (e.target.closest('.back') && idx > 0) show(idx - 1, true);
  });

  var form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var f = form.elements, err = form.querySelector('.err');
    var phone = f.phone.value.replace(/\D/g,'');
    if (!f.first.value.trim()) return err.textContent = 'Add your first name.';
    if (!/^\S+@\S+\.\S+$/.test(f.email.value)) return err.textContent = 'Check your email address.';
    if (phone.length < 10) return err.textContent = 'Add a mobile number so we can confirm your call.';
    err.textContent = '';
    answers.first = f.first.value.trim(); answers.email = f.email.value.trim(); answers.phone = f.phone.value.trim(); answers.sms = f.sms.checked;
    sset('u365_app', answers);
    show(idx + 1, true);
  });

  function buildCalendar(){
    var f = document.getElementById('ghl-cal');
    if (!f || f.getAttribute('src')) return;
    var q = new URLSearchParams();
    if (answers.first) q.set('first_name', answers.first);
    if (answers.email) q.set('email', answers.email);
    if (answers.phone) q.set('phone', answers.phone);
    var attr = sget('u365_attr') || {};
    Object.keys(attr).forEach(function(k){ if (attr[k]) q.set(k, attr[k]); });
    f.id = U365.CALENDAR_ID + '_' + Date.now();   // form_embed.js sizes the frame by this id
    f.src = U365.CALENDAR_URL + (q.toString() ? '?' + q.toString() : '');
    // HighLevel's embed script grows the frame to fit every time slot. Load it after the frame exists,
    // so it finds the frame; until it does, the frame scrolls on its own.
    if (!document.querySelector('script[src*="form_embed"]')){
      var s = document.createElement('script'); s.src = 'https://link.msgsndr.com/js/form_embed.js'; document.body.appendChild(s);
    }
  }
  show(0, false);
}

/* ---------- confirmed page ---------- */
function startConfirmed(){
  var el = document.getElementById('when'); if (!el) return;
  var p = new URLSearchParams(location.search), t = p.get('t'), n = p.get('n');
  if (n) document.getElementById('hi').textContent = 'You’re booked, ' + n + '.';
  if (t){
    var dt = new Date(t);
    if (!isNaN(dt)) el.textContent = fmtDay(dt) + ' at ' + fmtTime(dt) + ' (' + tzName() + ')';
  }
}

document.addEventListener('DOMContentLoaded', function(){ startApply(); startConfirmed(); });
