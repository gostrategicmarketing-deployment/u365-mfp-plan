/* U365 VSL funnel prototype logic, v2 (2 pages). The application sits under the VSL on the same page.
   In HighLevel AI Studio it becomes a GHL survey with conditional logic, followed by the embed of
   calendar EPviYyuThyCTe6tGVPLP (Performance Accelerator Consultation). A "no" on either qualifier
   shows a short note on the same page and sends the owner to the existing /protocol page. */
var U365 = {
  CALENDAR_ID: 'EPviYyuThyCTe6tGVPLP',
  PROTOCOL_URL: 'https://unstoppable365.com/protocol',
  SLOT_HOURS_ET: [10,11,12,13,14,15,16,17,18], // sample PA slots in ET; real availability comes from GHL
  LOCAL_WINDOW: [9, 19],           // call must start 9 AM to 7 PM in the lead's own zone (ends by 8 PM, U365 rule 11)
  DAYS_OPEN: 5                     // next 5 weekdays, tomorrow onward
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
  function check(){ s.classList.toggle('show', anchor.getBoundingClientRect().bottom < 0); }
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
    owner: 'The Performance Accelerator is built for men who own a blue-collar business. If that’s you down the road, come back. Until then, here’s a better place to start.',
    revenue: 'The Performance Accelerator is built for owners running seven-figure companies. That’s not a judgment, it’s who the program was designed around. Here’s a better place to start today.'
  };

  function bringIntoView(){ var r = root.getBoundingClientRect(); if (r.top < 0 || r.top > innerHeight * 0.4) root.scrollIntoView({block:'start'}); }
  function show(i, scroll){
    idx = i;
    if (notYetStep) notYetStep.classList.remove('on');
    bar.parentNode.style.visibility = '';
    steps.forEach(function(s,j){ s.classList.toggle('on', j === i); });
    bar.style.width = Math.round((i) / (steps.length - 1) * 100) + '%';
    if (scroll) bringIntoView();
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
      step.querySelectorAll('.opt').forEach(function(x){ x.classList.remove('sel'); });
      o.classList.add('sel');
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

  var picked = null;
  function buildCalendar(){
    var days = root.querySelector('.days'), slots = root.querySelector('.slots'), go = root.querySelector('#book-btn');
    root.querySelector('.tz').textContent = tzName();
    if (days.children.length) return;
    var d = new Date(); d.setHours(12,0,0,0);
    var list = [];
    while (list.length < U365.DAYS_OPEN){
      d.setDate(d.getDate() + 1);
      if (d.getDay() === 0 || d.getDay() === 6) continue;
      list.push(new Date(d));
    }
    list.forEach(function(day, n){
      var b = document.createElement('button'); b.type = 'button'; b.className = 'day' + (n ? '' : ' sel');
      b.innerHTML = day.toLocaleDateString([], {weekday:'short'}) + '<b>' + day.getDate() + '</b>' + day.toLocaleDateString([], {month:'short'});
      b.onclick = function(){ days.querySelectorAll('.day').forEach(function(x){x.classList.remove('sel');}); b.classList.add('sel'); fill(day); };
      days.appendChild(b);
    });
    fill(list[0]);
    function fill(day){
      slots.innerHTML = ''; picked = null; go.disabled = true;
      var y = day.getFullYear(), m = day.getMonth(), dd = day.getDate();
      U365.SLOT_HOURS_ET.forEach(function(h, k){
        if ((dd * 7 + k * 3) % 5 === 0) return; // stable "booked" gaps so the mock looks real
        var dt = etDate(y, m, dd, h), lh = localHour(dt);
        if (lh < U365.LOCAL_WINDOW[0] || lh > U365.LOCAL_WINDOW[1]) return;
        var s = document.createElement('button'); s.type = 'button'; s.className = 'slot'; s.textContent = fmtTime(dt);
        s.onclick = function(){ slots.querySelectorAll('.slot').forEach(function(x){x.classList.remove('sel');}); s.classList.add('sel'); picked = dt; go.disabled = false; };
        slots.appendChild(s);
      });
      if (!slots.children.length) slots.innerHTML = '<p class="micro">No open times that day. Try another day.</p>';
    }
    go.onclick = function(){
      if (!picked) return;
      answers.when = picked.toISOString(); sset('u365_app', answers);
      location.href = '../confirmed/?t=' + encodeURIComponent(answers.when) + '&n=' + encodeURIComponent(answers.first || '');
    };
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
