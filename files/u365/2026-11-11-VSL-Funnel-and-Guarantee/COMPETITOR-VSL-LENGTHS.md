# Competitor VSL lengths and structure (U365 research, 2026-11-11)

Internal research for the U365 MFP VSL. Nothing here is approved copy. Competitor claims are quoted as their claims, not facts.

**How lengths were measured.** Every duration below was read from the host, not guessed: Wistia media JSON (`media.duration`), Vimeo player metadata through yt-dlp (with the page as referer), YouTube metadata through yt-dlp, and `ffprobe` header reads for self-hosted MP4s. No full videos were downloaded. Captions (Wistia captions, Vimeo auto-captions) were pulled as text only, for the structure notes. No forms were filled in.

**Tags.** VERIFIED = I measured it or saw it on the live page on 2026-11-11. UNVERIFIED = from a third party or inferred.

---

## 1. Summary table

| Competitor | URL (page with the video) | Video length | Player | Under the video | Price shown? | Guarantee | Opening hook |
|---|---|---|---|---|---|---|---|
| **Supra Human** (John Madsen) | https://suprahuman.com/become-supra-human/ | **12:46** (765.6 s). Wistia name "Main VSL Vertical Final (April 2025)", 1080x1920 vertical | Wistia popover (`ymlgmvaydv`), "Watch Now" button | Typeform slide-in application ("Fill out your application now"), then a consultation call | No | "Get Ripped or You Don't Pay" and "ZERO RISK Get Ripped, Or You Don't Pay NO QUESTIONS ASKED" (page). Video at 11:16: "if it doesn't work, you won't pay a dime" | "I'm John Madsen, creator of Superhuman Inc..." then a $150K-a-year disqualifier at 0:25 |
| **Dan Go** (High Performance Founder) | https://highperformancefounder.com/private-coaching | **7:38** (458 s). Vimeo title "Dan's New VSL", 1920x1080. Page calls it a "10 Min Video" | Vimeo (`1109392829`) | "Step 2: Click The Button Below To Fill Out a 2-Minute Application" (Typeform `GXAFFDiV`), then consultation | No | Headline: "GUARANTEED - Or You Don't Pay". Video at 6:50: follow the system 12 months, miss the agreed goals, "you don't pay" | "Every week I get messages from business owners who are crushing it professionally..." then a $100K disqualifier at 0:33 |
| **Fit Father Project: Precision Vitality** (Dr. Anthony Balduzzi) | https://www.fitfatherproject.com/precision-vitality-apply/ | **10:37** (637 s). Vimeo title "FFP_Vitality_Customers_v2", 1920x1080 | Vimeo (`1148742700`) | Typeform application (`OhcjEj2j`), then a 20-minute "Physician-Led Vitality Assessment" call | No ("thousands of dollars worth of lab works" is the only money line) | None found on page or in video | "If you've been following my work for a while..." (aimed at existing Fit Father members, i.e. warm traffic) |
| **Fit Pro CEO** (Will Nelson). See the warning in section 2 | Call funnel: https://willnelsoncoach.com/ and https://thefitproceo.com/moreclients. Low-ticket page: https://willnelsoncoach.com/launch | Call funnel: **no VSL**. /launch page: self-hosted "VSL.mp4" **6:34** (394.2 s), 1280x720. Pre-call confirmation video **0:34** (34.5 s) at https://thefitproceo.com/confirmation-596423 | GHL self-hosted MP4; /moreclients uses 20 Vimeo testimonial clips (0:42 to 3:40 each) | Call funnel: 4-question application, then /schedule calendar. /launch: checkout ("JUST $297/Week") | /launch yes ($297/week, "Get Access To The Community For $997"). Call funnel no | /moreclients: "If You Don't Get Clients, You Don't Pay". /launch: "100% Money Back Guarantee" | Not captured (VSL.mp4 has no caption track; not downloaded) |
| **Peak Launch** (formerly Gapin Institute, Dr. Tracy Gapin) | https://peaklaunch.com/for-men/ (gapininstitute.com now redirects to peaklaunch.com) | **No VSL.** Page links a TEDx talk 9:47 and embeds 3 testimonials (1:47, 2:14, 4:20) | YouTube | "Schedule a Strategy Call": GHL calendar, "15 minutes. Phone or video. No cost." | No | None found | Text hero: "Get Your Edge Back." |
| **Cenegenics** | https://cenegenics.com/ | **No VSL found** on the homepage (read through WebFetch; direct fetch is blocked by Cloudflare, so this is UNVERIFIED for embeds hidden behind scripts) | n/a | "Complimentary Consultation" popup, "10-minute call", plus a free 3-minute risk assessment | No | None found | Text hero: "Precision Health, Personalized for You" |
| **Marek Health** | https://marekhealth.com/ | **No VSL** on homepage | n/a | Direct online start ("Start treatment online"), 45-min intake | Yes: "$299 to get started", Year 1 average about $135/mo | None found (refund policy link only) | Text-led |
| **Lifeforce** | https://www.mylifeforce.com/ | **No VSL.** Homepage hero is a silent background loop, 0:28 | Storyblok-hosted MP4 | Membership e-commerce, no call | Not on homepage | None found | Text-led |
| **Opt Health** | opthealth.com | **No live site.** opthealth.com now redirects to grounded.com (an earthing products site); opt.health is a parked page | n/a | n/a | n/a | n/a | n/a |
| **Ted Ryce** (Legendary Life) | https://www.legendarylifeprogram.com/home | **Gated.** Webinar ("Masterclass") behind a registration form (name and email); not entered | EverWebinar/genndi register button | Webinar, then a 15-minute call link | Not on page | None on page | "Discover The 5 Step Process Our Busy Clients Are Using..." |

Lead not followed up: **Nick Olsen X365** is running Meta ads right now titled "Your Career Is Successful. Now Let's Get Your Physique" (Ad Library, 2026-11-11). His site x365fitness.com is a Salt Lake City facility with no VSL; the ad's landing page was not found because the Ad Library tool does not return landing URLs. Worth a manual click-through in the Ad Library if needed.

---

## 2. Per-competitor notes

### Supra Human (the closest match to U365's buyer)
- VERIFIED: 12:46, Wistia, vertical 9:16, created April 2025, English captions on the media.
- VERIFIED funnel: video is a popover behind a "Watch Now" button on a long transformation page. Every CTA says "Fill out your application now" and opens a Typeform slide-in titled "Supra Human Optin Application". Video says the application takes three minutes, then a "free consultation".
- VERIFIED structure (caption timestamps):
  - 0:00 to 0:25: who I am, the promise ("in the next ten minutes"), and a result claim.
  - 0:25 to 1:30: disqualify (under $150K a year, "you can click off this page now"), then a "this is for you if" list built on status, wife, kids and the mirror.
  - 1:30 to 3:00: credibility (NFL, 15 years in business, "over fifty" coaches, medical concierge).
  - **3:19: first CTA**, "fill out your application right below this video" while it keeps playing. That is 26% of the way in.
  - 3:47 to 9:20: three steps framed as mindset, not tactics: tell yourself the truth (3:47), decide (6:04), commit (about 8:15). One client story (Grant, about 5:15).
  - 9:24 to 9:45: the mechanism in one breath, three phases: rapid fat loss, maximum performance, identity integration.
  - 9:45 to 10:30: a personal story (karate class) and a second client quote.
  - 10:30 to 11:16: the decision, then the guarantee at 11:16 (88%).
  - 11:45 to 12:46: CTA twice more, income filter repeated, "Welcome to Superhuman."
- Their own numbers do not agree with each other: the video says over six thousand men, the apply page says 4,000+ CEOs, and the homepage says 3,500+ members. VERIFIED that the three pages say this, not which number is true.
- Tone: heavy profanity and status shaming (spouse, Rolex, Porsche, "soft"). U365's rules would not allow most of this, but the skeleton is useful.

### Dan Go / High Performance Founder
- VERIFIED: 7:38 Vimeo, 16:9. Page copy promises a "10 Min Video", and so does the script ("in the next 10 minutes"), but the cut runs 7:38.
- VERIFIED structure:
  - 0:00 to 0:33: the pain, a result claim, who I am. **$100K disqualifier at 0:33.**
  - 0:33 to 1:45: who it is for, plus a list of client types (SaaS founders, doctors, lawyers, agency owners).
  - **1:56: first CTA**, "submit your application below this video while it continues to play" (25%).
  - 2:07 to 5:05: the same three steps as Supra Human (get real, decide, commit to a system), with two short client lines.
  - 5:07 to 5:55: three phases (metabolic blueprint, lifestyle integration, identity integration), then weekly calls and community.
  - 6:00: one named case story.
  - **6:50: guarantee** (90%): 12 months, miss the goals you set together, you don't pay.
  - 7:07 to 7:38: CTA, filter again, "Welcome to the High Performance Academy."
- **The script follows Supra Human's almost beat for beat**: same opening promise, same income disqualifier, same "apply below while it plays" at about 25%, same three steps, a three-phase mechanism ending in "identity integration", a don't-pay guarantee at about 90%, and the same "Welcome to..." close. Whoever wrote one (or a shared template) wrote the other. VERIFIED from the two caption files. The Vimeo uploader account is "School of Bots", so the video was likely made by an agency (UNVERIFIED).

### Fit Father Project: Precision Vitality
- VERIFIED: 10:37 Vimeo, 16:9. The file name says "Customers", and the opening line speaks to people who already follow Anthony, so this is a **warm-list** VSL, not a cold-traffic one.
- VERIFIED structure: you've already done the work (0:00), the "ceiling" problem (1:00), his father's death as the reason for the program (2:00), offer named (3:00), four-step process test/personalize/coach/retest (3:48 to 5:15), what changes (5:15), direct access to him (6:15), **who it is for and not for (7:06 to 8:30)**, scarcity of 20 men a month (8:33), **only CTA at 8:50 (83%)**, "This isn't a sales call" (9:06), close at 9:31, then a lead-in to testimonials.
- Mismatch on their side: the video says a 90-day program, the page says 6 months. VERIFIED both.
- No guarantee and no price anywhere.

### Fit Pro CEO (Will Nelson). Warning: not U365's competitor for buyers
- VERIFIED: thefitproceo.com and willnelsoncoach.com sell **client acquisition coaching to online fitness coaches** ("For Online Coaches Doing $5K+/Month"), and Will Nelson's live Meta ads target fitness coaches. They do not sell fitness to business owners. The homepage success stories list "Josh Braden Quintiples His Business $50k To $250k Months", so Fit Pro CEO appears to be Josh's own business coach (the Skool intel in `../2026-11-11 - Fit Pro CEO Skool Intel/` points the same way). Treat this as a model of a call funnel, not as a rival for the same buyer.
- VERIFIED: their **high-ticket call funnel has no VSL at all.** willnelsoncoach.com opens straight into a 4-question application (revenue band, willingness to invest $5k+), then /schedule ("Step 2 of 3 Schedule Your Strategy Call"). /moreclients is a headline, a guarantee and 20 testimonial clips. After booking, /confirmation-596423 shows a 34-second "watch first, then confirm by SMS" video.
- VERIFIED: the only file they call a VSL ("VSL.mp4", 6:34) sits on /launch, a **$297/week low-ticket** community checkout, not a call funnel. The other hero video on that page (YouTube `0MmGyRUuKFU`) is now "unavailable".

### Peak Launch (ex Gapin Institute), Cenegenics, Marek Health, Lifeforce, Opt Health
- None of the medical and longevity players use a VSL in front of the call. VERIFIED for Peak Launch, Marek and Lifeforce (page source checked). Cenegenics was read through WebFetch only because Cloudflare blocks direct fetches. Opt Health has no live site.
- They sell on text, credentials, labs and a short free call: Peak Launch 15 minutes, Cenegenics 10 minutes. The exception is Marek, which shows its price ($299 to start) and checks out online.

### Ted Ryce / Legendary Life
- VERIFIED: the coaching page is a webinar registration ("The Masterclass Starts In" countdown), so there was no length to measure without registering. Both of the old bit.ly links on the page (apply and webinar) now return ClickFunnels "Page Not Found".

---

## 3. What this means for a ~5 min VSL

**Lengths of the call-funnel coaching competitors with a measurable VSL in front of an application or call (VERIFIED):**

| Competitor | Length | Traffic |
|---|---|---|
| Dan Go | 7:38 | cold (Meta) |
| Precision Vitality | 10:37 | warm (own list) |
| Supra Human | 12:46 | cold (Meta) |

- **Median 10:37. Range 7:38 to 12:46.** Mean about 10:20.
- The two cold-traffic, men's fitness-for-earners VSLs (the closest match to U365) are 7:38 and 12:46.
- If you count Fit Pro CEO's 6:34 low-ticket VSL, the range runs 6:34 to 12:46 and the median is about 9:08. It is a checkout page, not a call funnel.
- Half of this set (Fit Pro CEO's call funnel, Peak Launch, Cenegenics, Marek, Lifeforce) uses **no VSL at all** before the application or call. They rely on testimonials and a short call instead.

**What that means for U365's script (draft runs about 5:15, first CTA at 4:25):**

1. **A 5-minute cut is shorter than every measured competitor**, about 2:20 under the shortest (Dan Go). That is fine for in-feed and for warm or retargeting traffic. It is not out of line, because half the field uses no VSL at all. A 5-minute VSL is a defensible middle ground, but there is no competitor evidence that 5 minutes beats 8 to 12 for cold traffic. If cold traffic lands on this page, a longer 8 to 10 minute landing cut is worth testing against the 5.
2. **Move the first CTA up.** Both cold-traffic competitors say "apply below while this keeps playing" at **25 to 26% of runtime** (1:56 of 7:38; 3:19 of 12:46). In a 5:15 video that is about **1:20**, right after the "who this is for" block. U365's first CTA is at 4:25 (84%), which is where Precision Vitality puts its only one, and that is a warm-list video. Keep the 4:25 CTA as the second one.
3. **The proven skeleton is short and repeatable**: who I am plus the promise, an income disqualifier in the first 35 seconds, a "for you if" list, an early CTA, three mindset steps with one client story each, a three-phase mechanism, the guarantee at about 90%, then the CTA repeated with the filter, and "Welcome to [brand]." The **income disqualifier** ($150K for Supra Human, $100K for Dan Go) fits U365's 7-figure owner filter. The **"identity" phase** is the shared closing beat of their mechanism, and it matches Sean's story without making a weight-loss promise.
4. **Both cold competitors make a "you don't pay" guarantee and name no price.** Supra Human promises a physique outcome, which U365 keeps out of its copy. Dan Go ties his to "the goals we define together" over 12 months, which is the safer pattern for whatever goes in GUARANTEE.md. Nobody names a price on camera. That matches U365 keeping MFP's price for the 60-minute call.
5. **Format note (VERIFIED):** Supra Human's main VSL is shot vertical (1080x1920) and plays as a popover. Dan Go and Fit Father are 16:9 inline. A vertical cut of Sean's VSL would also work as a Meta in-feed ad.
