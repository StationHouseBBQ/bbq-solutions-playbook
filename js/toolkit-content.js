/* Toolkit content. Each tool: { sections: [{title, html}], calc?: "capacity" }
   Rendered by tool.js. All tools are printable web versions; PDF downloads can be
   connected later by adding a `pdf` URL per tool (the UI will then show a real
   download button — never a fake one). */
window.TOOLKIT_CONTENT = {

  /* ---------------- OPERATOR READINESS ASSESSMENT ---------------- */
  "readiness-assessment": {
    sections: [
      {
        title: "How to use this",
        html:
          "<p>Score each statement from 1 (not true at all) to 5 (completely true). Be honest — this is a diagnostic, not a report card. Total each engine, then read the interpretation at the bottom. Fifteen minutes, ideally with your numbers person or your kitchen lead in the room.</p>"
      },
      {
        title: "Engine 1 — Demand",
        html: scoreBlock([
          "We get catering inquiries every week without chasing them.",
          "Our marketing targets a specific niche, not “anyone who eats.”",
          "We have a named offer with a price signal a buyer can act on.",
          "Every inquiry lands in one place and gets logged the same day.",
          "We contact past catering customers on a schedule to rebook them.",
          "Slow seasons are planned for with campaigns, not endured."
        ])
      },
      {
        title: "Engine 2 — Sales",
        html: scoreBlock([
          "Every inquiry gets the same qualification questions, every time.",
          "We quote from set packages, and quotes go out within 24 hours.",
          "Every quote gets followed up at least twice, on a schedule.",
          "No date is booked without a deposit. Ever.",
          "We know our quote-to-booked close rate for the last 90 days.",
          "A booked event is formally handed to operations with a briefing."
        ])
      },
      {
        title: "Engine 3 — Production",
        html: scoreBlock([
          "Cooking is scheduled on production days, separate from event days.",
          "Every event is planned backward from service time, in writing.",
          "Guest counts convert to meat quantities with math, not gut feel.",
          "A written production sheet runs the kitchen — not one person's memory.",
          "Nothing is released to be cooked without a packing sheet existing.",
          "We know our weekly capacity ceiling in pounds and events."
        ])
      },
      {
        title: "Engine 4 — Command",
        html: scoreBlock([
          "I can see yesterday's sales (restaurant vs. catering) by 8 a.m.",
          "I know today's cash position without logging into three things.",
          "I can see the status of every open order without asking anyone.",
          "Problems reach me the morning they're knowable, not when they explode.",
          "Recurring tasks have written SOPs someone else could run tomorrow.",
          "I could take a full week off without revenue or quality dropping."
        ])
      },
      {
        title: "Reading your score",
        html:
          "<table class='tool-table'><thead><tr><th>Engine total</th><th>What it means</th></tr></thead><tbody>" +
          "<tr><td>24–30</td><td>This engine is strong. Protect it with SOPs so it survives growth.</td></tr>" +
          "<tr><td>16–23</td><td>Working, but leaking. The matching playbook will tighten it in weeks.</td></tr>" +
          "<tr><td>6–15</td><td>This engine is your constraint. Start here — nothing else compounds until it's fixed.</td></tr>" +
          "</tbody></table>" +
          "<p><strong>Your lowest-scoring engine is your next playbook:</strong> Demand → <a href='playbook.html?id=30-day-demand'>The 30-Day Catering Demand Play</a> · Sales → <a href='playbook.html?id=lead-to-kitchen'>From Catering Lead to Kitchen Release</a> · Production → <a href='playbook.html?id=high-volume-production'>The High-Volume Production Play</a> · Command → <a href='playbook.html?id=morning-command'>The Owner's Morning Command Play</a>.</p>"
      }
    ]
  },

  /* ---------------- 30-DAY MARKETING CALENDAR ---------------- */
  "marketing-calendar": {
    sections: [
      {
        title: "Before day 1 — the setup week",
        html:
          "<ul class='tool-check'>" +
          "<li><b>Pick your niche</b> using the scorecard below — one niche for the whole month.</li>" +
          "<li><b>Write your offer:</b> name, headcount range, service style, price signal, one action (see the <a href='playbook.html?id=30-day-demand'>Demand playbook</a>, lesson 3).</li>" +
          "<li><b>Set the capture point:</b> one inquiry form or booking conversation everything points to.</li>" +
          "<li><b>Build a 20-name outreach list:</b> real buyers in the niche (office managers, principals, coordinators).</li>" +
          "<li><b>Shoot a content bank:</b> one production day photographed — smoke, pans, packing, delivery. One hour of photos feeds the whole month.</li>" +
          "</ul>" +
          "<p class='write-label'>Niche scorecard (score each 1–5, highest total wins)</p>" +
          "<table class='tool-table'><thead><tr><th>Niche</th><th>Budget</th><th>Repeat potential</th><th>Fits our capacity</th><th>Easy to reach buyer</th><th>Total</th></tr></thead>" +
          "<tbody><tr><td>Corporate lunches</td><td></td><td></td><td></td><td></td><td></td></tr>" +
          "<tr><td>Schools & churches</td><td></td><td></td><td></td><td></td><td></td></tr>" +
          "<tr><td>First responders / public service</td><td></td><td></td><td></td><td></td><td></td></tr>" +
          "<tr><td>Weddings / private events</td><td></td><td></td><td></td><td></td><td></td></tr>" +
          "<tr><td>Holiday catering</td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>"
      },
      {
        title: "Week 1 — Plant the flag",
        html: weekTable([
          ["Mon", "Post: announce the offer — product shot exactly as this buyer receives it, offer copy, one link."],
          ["Tue", "Outreach: 5 personal messages from your list. Short, named, offer attached."],
          ["Wed", "Post: menu/package breakdown — what's in it, who it feeds, the price signal."],
          ["Thu", "Story/status: today's cook with a one-line tie to the niche (“this is what your team lunch looks like at 6 a.m.”)."],
          ["Fri", "Post: the offer again, different photo, direct CTA. Repetition is a feature."],
          ["Weekend", "Log every inquiry. Reply same-day. Book what's ready."]
        ])
      },
      {
        title: "Week 2 — Show the operation",
        html: weekTable([
          ["Mon", "Post: behind the scenes — production day, the sheet on the wall, the batch going in."],
          ["Tue", "Outreach: 5 more contacts. Mention something specific about their org."],
          ["Wed", "Post: packing/delivery process — “how 150 lunches leave our kitchen on time.”"],
          ["Thu", "Story: introduce the person who'd handle their event. Faces build trust."],
          ["Fri", "Post: FAQ — the three questions every buyer in this niche asks, answered plainly."],
          ["Weekend", "Follow up every open quote (day-3 touches). Log everything."]
        ])
      },
      {
        title: "Week 3 — Proof",
        html: weekTable([
          ["Mon", "Post: full event story — the order, the prep, the delivery, the room. Tag the client if willing."],
          ["Tue", "Outreach: 5 contacts, now with the event story attached as proof."],
          ["Wed", "Post: testimonial or thank-you message screenshot (with permission)."],
          ["Thu", "Story: repost the event story to anyone who missed it; add “dates filling for [month].”"],
          ["Fri", "Post: numbers-flavored proof — “14 team lunches delivered this month” (true numbers only)."],
          ["Weekend", "Day-7 closes on quiet quotes: the honest “are we cooking for you?” call."]
        ])
      },
      {
        title: "Week 4 — Urgency and close",
        html: weekTable([
          ["Mon", "Post: real availability — “two Friday slots left this month.” Only true scarcity."],
          ["Tue", "Outreach: final 5 contacts + re-touch the 15 who didn't answer, one line: “last call for [month] dates.”"],
          ["Wed", "Post: the offer, cleanest version, strongest photo, one CTA."],
          ["Thu", "Story: countdown to booking deadline for the target month."],
          ["Fri", "Post: thank-you to the month's customers + “now booking [next month].”"],
          ["Weekend", "Month-end review: inquiries, booked revenue, top 2 posts. Decide: repeat niche or expand."]
        ])
      },
      {
        title: "The daily non-negotiables",
        html:
          "<ul class='tool-check'>" +
          "<li>Every inquiry answered <b>same day</b> — speed wins catering.</li>" +
          "<li>Every inquiry <b>logged</b> with the seven qualification questions.</li>" +
          "<li>Every quote gets its <b>day 1 / day 3 / day 7</b> follow-up touches.</li>" +
          "<li>Every delivered event gets the <b>48-hour rebook ask</b>.</li>" +
          "</ul>"
      }
    ]
  },

  /* ---------------- LEAD QUALIFICATION SHEET ---------------- */
  "lead-qualification": {
    sections: [
      {
        title: "Use this on every inquiry — no exceptions",
        html:
          "<p>Fill one sheet per inquiry, on the first call or message exchange. The goal is to quote accurately the first time and to spot events you shouldn't take.</p>" +
          "<p class='write-label'>Inquiry basics</p>" +
          "<div class='write-lines'>" +
          lines(["Contact name / role:", "Organization:", "Phone / email:", "How they found us:", "Date logged / logged by:"]) +
          "</div>"
      },
      {
        title: "The seven questions",
        html:
          "<table class='tool-table'><thead><tr><th style='width:40%'>Question</th><th>Answer</th></tr></thead><tbody>" +
          "<tr><td>1. Guest count — confirmed or estimate?</td><td></td></tr>" +
          "<tr><td>2. Date and service time (when do they eat?)</td><td></td></tr>" +
          "<tr><td>3. Location — address, access, stairs, power, shade</td><td></td></tr>" +
          "<tr><td>4. Service type — pickup / drop-off / full service / on-site cook</td><td></td></tr>" +
          "<tr><td>5. Budget range (“most groups your size land between $–$ per head — where do you want to be?”)</td><td></td></tr>" +
          "<tr><td>6. Decision timeline — who else is quoting, when do they decide?</td><td></td></tr>" +
          "<tr><td>7. Decision maker — is this the person who signs?</td><td></td></tr>" +
          "</tbody></table>"
      },
      {
        title: "Disqualifiers — check before you quote",
        html:
          "<ul class='tool-check'>" +
          "<li>Below our guest-count minimum of <b>______</b></li>" +
          "<li>Outside our delivery radius of <b>______</b> miles (or priced accordingly)</li>" +
          "<li>Date conflicts with capacity already booked (check the calendar <em>now</em>)</li>" +
          "<li>Budget below our floor of $<b>______</b> per head for this service type</li>" +
          "<li>Requested items we don't produce well at volume</li>" +
          "</ul>" +
          "<p>If two or more boxes are checked: refer it kindly, keep the goodwill, log it anyway.</p>" +
          "<p class='write-label'>Decision</p>" +
          "<div class='write-lines'>" + lines(["Quote it / refer it / decline it — and why:", "Package quoted & price:", "Quote sent (date):", "Follow-ups: day 1 ☐  day 3 ☐  day 7 ☐"]) + "</div>"
      }
    ]
  },

  /* ---------------- QUOTE FOLLOW-UP SCRIPT ---------------- */
  "quote-followup": {
    sections: [
      {
        title: "Why this exists",
        html:
          "<p>Most unanswered quotes aren't rejections — they're busy people. Three scheduled touches rescue a large share of them. Copy these, adjust the voice to yours, and log every touch on the lead sheet.</p>"
      },
      {
        title: "Day 1 — same-day confirmation (text or email)",
        html:
          "<div class='script-box'><div class='script-box__label'>Send the day the quote goes out</div>" +
          "<p>“Hi [Name] — your quote for the [date] event is in your inbox. Two things worth knowing: the date is still open on our calendar, and we hold this pricing for 14 days. If the package needs adjusting either direction, that's a five-minute fix — just tell me.”</p></div>"
      },
      {
        title: "Day 3 — the useful nudge",
        html:
          "<div class='script-box'><div class='script-box__label'>Add value, don't just “check in”</div>" +
          "<p>“Quick one, [Name] — while you're deciding, want me to pencil-hold [date]? No commitment; it just protects the date if another inquiry comes in for that day. Also happy to hop on a five-minute call if the group has questions.”</p></div>"
      },
      {
        title: "Day 7 — the honest close (call if you can)",
        html:
          "<div class='script-box'><div class='script-box__label'>Phone beats text here</div>" +
          "<p>“[Name], I don't want to pester you — I just need to know how to plan our calendar. Are we cooking for you on [date], or should I release the hold? Either answer is completely fine, and if the timing's just off, I'll happily check back for your next event.”</p></div>" +
          "<p>Still quiet after day 7? Mark the lead dead — but move it to the monthly “quiet list” message: <em>“Booking [next month] now — want me to hold a date?”</em></p>"
      },
      {
        title: "Objection quick answers",
        html:
          "<table class='tool-table'><thead><tr><th>They say</th><th>You say</th></tr></thead><tbody>" +
          "<tr><td>“It's more than we budgeted.”</td><td>“Tell me the number you need to hit and I'll tell you what that buys — usually we adjust the menu, not the quality.”</td></tr>" +
          "<tr><td>“We're getting other quotes.”</td><td>“Smart. When you compare, check what's included — delivery, setup, chafers, service ware. Ours is the all-in number.”</td></tr>" +
          "<tr><td>“Can you hold the date without a deposit?”</td><td>“I can pencil-hold it for [X days]. Past that, the deposit is what locks it — I'd hate to give your date away.”</td></tr>" +
          "</tbody></table>"
      }
    ]
  },

  /* ---------------- WORKFLOW MAP ---------------- */
  "workflow-map": {
    sections: [
      {
        title: "The eight stages",
        html:
          "<p>Every catering order is always in exactly one stage. One person owns moving it to the next. The listed document must exist before the order can advance — that rule is the whole system.</p>" +
          "<table class='tool-table'><thead><tr><th>#</th><th>Stage</th><th>Owner (role)</th><th>Required before advancing</th></tr></thead><tbody>" +
          "<tr><td>1</td><td>Inquiry</td><td>Whoever answers — logs it same day</td><td>Lead logged on qualification sheet</td></tr>" +
          "<tr><td>2</td><td>Qualification</td><td>Sales</td><td>Seven questions answered; quote/refer/decline decision</td></tr>" +
          "<tr><td>3</td><td>Quote</td><td>Sales</td><td>Written, itemized quote with expiration, sent within 24h</td></tr>" +
          "<tr><td>4</td><td>Follow-up</td><td>Sales</td><td>Day 1/3/7 touches logged; outcome recorded</td></tr>" +
          "<tr><td>5</td><td>Booked</td><td>Sales</td><td>Deposit received + signed confirmation + final-count deadline set</td></tr>" +
          "<tr><td>6</td><td>Handoff</td><td>Sales → Operations</td><td>Event sheet complete; briefing held; ops accepts</td></tr>" +
          "<tr><td>7</td><td>Kitchen Release</td><td>Operations</td><td>Production sheet + packing sheet both exist</td></tr>" +
          "<tr><td>8</td><td>Execute & Close</td><td>Operations / Driver</td><td>Packed against sheet; delivered; final payment collected; debriefed</td></tr>" +
          "</tbody></table>"
      },
      {
        title: "Build it as a board today",
        html:
          "<p>Whiteboard, wall of clipboards, or a simple digital board — eight columns, one card per order. The morning question becomes: <strong>is any card stuck?</strong></p>" +
          "<ul class='tool-check'>" +
          "<li>Eight columns drawn, named exactly as above</li>" +
          "<li>Every current order written on a card and placed in its true stage</li>" +
          "<li>Each card shows: event date, guest count, owner's initials, balance status</li>" +
          "<li>Rule posted: <b>a card only moves when its required document exists</b></li>" +
          "<li>Board reviewed in the daily brief — stuck cards get a name and a deadline</li>" +
          "</ul>" +
          "<p>This is the exact structure Station House OS digitizes — stages, owners, required documents, and automatic “stuck card” flags. The paper version works today; the connected version scales it.</p>"
      }
    ]
  },

  /* ---------------- BACKWARD PLANNER ---------------- */
  "backward-planner": {
    sections: [
      {
        title: "How backward planning works",
        html:
          "<p>Fix the service time. Then work up the page, subtracting each block of work. The last line you fill in tells you when production must start — usually days earlier than forward planning would have guessed.</p>" +
          "<table class='tool-table'><thead><tr><th>Step (fill bottom-up)</th><th>Time needed</th><th>Clock time</th><th>Owner</th></tr></thead><tbody>" +
          "<tr><td><b>Service time</b> — guests eat</td><td>—</td><td></td><td></td></tr>" +
          "<tr><td>On-site setup (add site-difficulty buffer)</td><td></td><td></td><td></td></tr>" +
          "<tr><td>Transport (drive + loading)</td><td></td><td></td><td></td></tr>" +
          "<tr><td>Packing check against packing sheet</td><td></td><td></td><td></td></tr>" +
          "<tr><td>Finishing — slice, sauce, pan, label</td><td></td><td></td><td></td></tr>" +
          "<tr><td>Holding window (planned, controlled)</td><td></td><td></td><td></td></tr>" +
          "<tr><td>Cook complete — off smoker/oven</td><td></td><td></td><td></td></tr>" +
          "<tr><td>Cook start (per item — longest first)</td><td></td><td></td><td></td></tr>" +
          "<tr><td>Prep — trim, rub, stage raw product</td><td></td><td></td><td></td></tr>" +
          "<tr><td>Order/receive product deadline</td><td></td><td></td><td></td></tr>" +
          "</tbody></table>"
      },
      {
        title: "Worked example — 150 guests, noon service, 40 min away",
        html:
          "<table class='tool-table'><thead><tr><th>Step</th><th>Window</th><th>Note</th></tr></thead><tbody>" +
          "<tr><td>Service</td><td>12:00 PM</td><td>Fixed.</td></tr>" +
          "<tr><td>Setup</td><td>10:45–11:45</td><td>Buffet for 150 + buffer for elevator load-in.</td></tr>" +
          "<tr><td>Transport</td><td>9:50–10:45</td><td>40-min drive + 15 min loading, hot boxes.</td></tr>" +
          "<tr><td>Packing check</td><td>9:20–9:50</td><td>Two people, against the sheet, signed.</td></tr>" +
          "<tr><td>Finishing</td><td>7:30–9:20</td><td>Slice/sauce/pan for 150 — protect this window.</td></tr>" +
          "<tr><td>Holding</td><td>from day before</td><td>Product cooked on production day, held per your process.</td></tr>" +
          "<tr><td>Production day</td><td>1–2 days prior</td><td>Cooks scheduled with slack; nothing smoked morning-of.</td></tr>" +
          "</tbody></table>" +
          "<p>Notice what the plan buys you: event morning starts at 7:30, calmly, with cooked product — not at midnight with raw briskets and prayer.</p>" +
          "<div class='protect-box'>This planner covers the free framework — sequencing and time budgeting. Exact Station House holding methods, temperatures, humidity stages, and reheating specifications are part of the licensed Method. <a href='method.html'>How licensing works →</a></div>"
      }
    ]
  },

  /* ---------------- CAPACITY CALCULATOR ---------------- */
  "capacity-worksheet": {
    calc: "capacity",
    sections: [
      {
        title: "Part 2 — your weekly ceiling (fill in once, revisit quarterly)",
        html:
          "<p>Your true weekly capacity is the <strong>smallest</strong> of these five numbers. Find it before a big order finds it for you.</p>" +
          "<table class='tool-table'><thead><tr><th>Constraint</th><th>How to compute</th><th>Your number</th></tr></thead><tbody>" +
          "<tr><td>Smoker capacity</td><td>Usable raw lbs per cook × realistic cooks per week</td><td></td></tr>" +
          "<tr><td>Holding capacity</td><td>Finished lbs you can hold correctly at one time</td><td></td></tr>" +
          "<tr><td>Cold storage</td><td>Raw staged + finished product the boxes actually fit</td><td></td></tr>" +
          "<tr><td>Labor</td><td>Skilled hands × productive hours in the production window</td><td></td></tr>" +
          "<tr><td>Transport</td><td>Lbs/pans one trip of your real vehicles moves hot & safe</td><td></td></tr>" +
          "</tbody></table>" +
          "<p class='write-label'>Booking rule</p>" +
          "<p>Any single order above <b>______%</b> of the weekly ceiling triggers a capacity review (rent, borrow, stagger production, or decline) before it is confirmed.</p>"
      }
    ]
  },

  /* ---------------- SERVICE-DAY CHECKLIST ---------------- */
  "service-day-checklist": {
    sections: [
      {
        title: "Before the truck leaves",
        html:
          "<ul class='tool-check'>" +
          "<li><b>Packing sheet check</b> — every line checked by a second person, both initial the sheet</li>" +
          "<li>Food: every pan labeled (item, order, quantity), temps verified and logged</li>" +
          "<li>Equipment: chafers + fuel + lighters, serving utensils per item, gloves, towels, thermometer</li>" +
          "<li>Sauces, pickles, bread, paper goods counted against guest count</li>" +
          "<li>Setup kit: table coverings, signage, tape, extension cord, trash bags</li>" +
          "<li>Paperwork: event sheet copy, invoice/balance info, payment reader charged</li>" +
          "<li>Contact card: on-site contact name + phone in the driver's hand</li>" +
          "<li>Route checked for traffic; departure time matches the backward plan</li>" +
          "</ul>"
      },
      {
        title: "On site",
        html:
          "<ul class='tool-check'>" +
          "<li>Call on-site contact on arrival; confirm serving location and start time</li>" +
          "<li>Line built in serving order: plates → mains → sides → bread → sauces → cutlery</li>" +
          "<li>Temps checked again before doors open; hot food in lit chafers</li>" +
          "<li>Quantity pacing: portion guidance visible or served by staff for tight counts</li>" +
          "<li>Photo of the finished setup (proof, marketing, and dispute insurance)</li>" +
          "<li>Balance collected per the order terms — before you leave, not “we'll invoice”</li>" +
          "</ul>"
      },
      {
        title: "Teardown & close",
        html:
          "<ul class='tool-check'>" +
          "<li>Leftovers handled per agreement (leave packaged / remove) — noted on event sheet</li>" +
          "<li>All equipment counted back against the packing sheet — losses noted</li>" +
          "<li>Site left cleaner than found; contact thanked by name</li>" +
          "<li>Within 48 hours: thank-you + rebook ask sent; ten-minute after-action review held</li>" +
          "</ul>"
      }
    ]
  },

  /* ---------------- MORNING COMMAND SHEET ---------------- */
  "morning-command": {
    sections: [
      {
        title: "The 15-minute scan — one page, every morning",
        html:
          "<p class='write-label'>1 · Sales (3 min)</p>" +
          "<div class='write-lines'>" + lines(["Yesterday — restaurant $:          catering $:          vs. normal day: ↑ ↓ =", "New inquiries in:          quotes waiting on us:", "Quotes overdue for follow-up (names):"]) + "</div>" +
          "<p class='write-label'>2 · Cash (2 min)</p>" +
          "<div class='write-lines'>" + lines(["Bank balance $:", "Landing today (deposits due, invoices out):", "Leaving today/this week (payroll, purveyors):"]) + "</div>" +
          "<p class='write-label'>3 · Production (3 min)</p>" +
          "<div class='write-lines'>" + lines(["On today's production sheet:", "Staffed? Y / N — gaps:", "Next 72h events covered by booked production? Y / N"]) + "</div>" +
          "<p class='write-label'>4 · Staffing (2 min)</p>" +
          "<div class='write-lines'>" + lines(["Today — who/where:", "Call-outs / risks:", "Tomorrow's gap check:"]) + "</div>" +
          "<p class='write-label'>5 · Delivery & events (2 min)</p>" +
          "<div class='write-lines'>" + lines(["Orders leaving today:", "Each has: packed by ☐  checked by ☐  driver ☐  balance plan ☐"]) + "</div>" +
          "<p class='write-label'>6 · Problems & decisions (3 min)</p>" +
          "<div class='write-lines'>" + lines(["Needs me today (decide now):", "Delegated — task / name / deadline:", "Deferred to (date):", "Recurring 3+ mornings → system to build:"]) + "</div>"
      },
      {
        title: "Rules that make it stick",
        html:
          "<ul class='tool-check'>" +
          "<li>Same time every morning, before service, phone on silent</li>" +
          "<li>Fill it from sources, not from memory — POS report, bank app, production sheet, schedule</li>" +
          "<li>Anything recurring three mornings straight becomes a system-building task, not a chore</li>" +
          "<li>Keep the sheets — a month of them is your systems roadmap</li>" +
          "</ul>"
      }
    ]
  },

  /* ---------------- SOP BUILDER ---------------- */
  "sop-builder": {
    sections: [
      {
        title: "The one-page SOP template",
        html:
          "<p class='write-label'>Header</p>" +
          "<div class='write-lines'>" + lines(["Task name:", "Trigger — when does this happen?", "Owner (role, not person):", "Written by / date / version:"]) + "</div>" +
          "<p class='write-label'>Steps — numbered, each starts with a verb, 15 max</p>" +
          "<div class='write-lines'>" + lines(["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10."]) + "</div>" +
          "<p class='write-label'>Quality check — how the person knows it's done right</p>" +
          "<div class='write-lines'>" + lines(["", ""]) + "</div>" +
          "<p class='write-label'>The failure note — the one mistake people actually make, and what it costs</p>" +
          "<div class='write-lines'>" + lines(["", ""]) + "</div>"
      },
      {
        title: "How to write it in 15 minutes",
        html:
          "<ul class='tool-check'>" +
          "<li>Watch the person who does this task <b>best</b> do it once</li>" +
          "<li>Type the steps as they narrate — their words, not corporate words</li>" +
          "<li>Read it back; let them correct it (this is where ownership happens)</li>" +
          "<li>Post it at the station where the task happens, not in a binder</li>" +
          "<li>Announce it at the next brief; it's the standard from today</li>" +
          "<li>Two-week test: did it run 14 days without you enforcing it? Then write the next one</li>" +
          "</ul>" +
          "<p>First six SOPs for most BBQ operations: opening/closing · taking a catering inquiry · production-day flow · packing an order · delivery & setup · daily money close-out.</p>"
      }
    ]
  },

  /* ---------------- AFTER-ACTION REVIEW ---------------- */
  "after-action": {
    sections: [
      {
        title: "The 10-minute debrief — within 48 hours of the event",
        html:
          "<p>Firehouse rule: <strong>no blame, one fix.</strong> You're not asking who screwed up — you're asking what would have caught this automatically.</p>" +
          "<p class='write-label'>Event</p>" +
          "<div class='write-lines'>" + lines(["Event / date:", "Present at review:"]) + "</div>" +
          "<p class='write-label'>1 · What was planned?</p>" +
          "<div class='write-lines'>" + lines(["Counts, times, menu, staffing as planned:", ""]) + "</div>" +
          "<p class='write-label'>2 · What actually happened?</p>" +
          "<div class='write-lines'>" + lines(["Facts, not opinions — what went out, when, condition:", ""]) + "</div>" +
          "<p class='write-label'>3 · Why the gap? (process, not people)</p>" +
          "<div class='write-lines'>" + lines(["Missing checklist? unclear owner? bad handoff? no buffer?", ""]) + "</div>" +
          "<p class='write-label'>4 · Keep / fix</p>" +
          "<div class='write-lines'>" + lines(["One thing that worked — keep doing it:", "One system fix — assigned to (name) by (date):"]) + "</div>"
      },
      {
        title: "Rules",
        html:
          "<ul class='tool-check'>" +
          "<li>Held standing up, ten minutes, everyone who touched the event invited</li>" +
          "<li>Wins reviewed with the same seriousness as failures — you need to know why things work</li>" +
          "<li>One fix only — the discipline is choosing the highest-leverage one</li>" +
          "<li>The fix lands on a name with a date, and gets checked at the next brief</li>" +
          "</ul>"
      }
    ]
  },

  /* ---------------- PROFIT-LEAK ASSESSMENT ---------------- */
  "profit-leak-assessment": {
    sections: [
      {
        title: "Score each leak: 0 = doesn't happen · 1 = sometimes · 2 = regularly",
        html:
          "<p class='write-label'>Sales & quoting leaks</p>" +
          scoreBlock2([
            "Quotes go out later than 24 hours after the inquiry",
            "Quotes get no scheduled follow-up",
            "Events booked without deposits",
            "Custom menus quoted below engineered package margins",
            "No guest-count minimum, or it isn't enforced"
          ]) +
          "<p class='write-label'>Production & food leaks</p>" +
          scoreBlock2([
            "Quantities guessed instead of calculated (over-cooking = donated margin)",
            "Same-day cooking creates rush labor and overtime",
            "No buffer rule, so re-cooks and emergency buys happen",
            "Waste isn't tracked, so nobody knows what it costs",
            "Mistakes get comped without being counted anywhere"
          ]) +
          "<p class='write-label'>Delivery & service leaks</p>" +
          scoreBlock2([
            "Delivery is unpriced or underpriced (time + vehicle + labor)",
            "Equipment (chafers, pans, utensils) leaves and never returns",
            "Final balances collected late — or invoiced and chased for weeks",
            "Setup time isn't in the quote, so full-service events eat margin",
            "Leftover handling isn't agreed in advance"
          ]) +
          "<p class='write-label'>Numbers & command leaks</p>" +
          scoreBlock2([
            "Restaurant and catering revenue are blended into one number",
            "Order-level profit is never calculated",
            "Sales tax / fees on catering platforms aren't reconciled",
            "Monthly numbers arrive too late to act on",
            "Nobody owns collections — “we should chase that” isn't a name"
          ])
      },
      {
        title: "Reading your score",
        html:
          "<table class='tool-table'><thead><tr><th>Total</th><th>What it means</th></tr></thead><tbody>" +
          "<tr><td>0–8</td><td>Tight ship. Systemize what you do so it survives growth.</td></tr>" +
          "<tr><td>9–20</td><td>You're funding several small leaks. Fix the three highest scores first — usually deposits, follow-up, and delivery pricing.</td></tr>" +
          "<tr><td>21–40</td><td>The leaks are the business model. Good news: this is found money, and every fix is a playbook in this library.</td></tr>" +
          "</tbody></table>" +
          "<p>Highest-scoring section tells you where to start: Sales → <a href='playbook.html?id=lead-to-kitchen'>Lead to Kitchen</a> · Production → <a href='playbook.html?id=high-volume-production'>High-Volume Production</a> · Delivery → <a href='toolkit.html?id=service-day-checklist'>Service-Day Checklist</a> · Numbers → <a href='playbook.html?id=morning-command'>Morning Command</a>.</p>"
      }
    ]
  }
};

/* helpers used above */
function scoreBlock(items) {
  return (
    "<table class='tool-table'><thead><tr><th style='width:70%'>Statement</th><th>Score 1–5</th></tr></thead><tbody>" +
    items.map(function (s) { return "<tr><td style='font-weight:400;white-space:normal;color:var(--text-soft)'>" + s + "</td><td></td></tr>"; }).join("") +
    "</tbody></table><p class='write-label'>Engine total: ______ / 30</p>"
  );
}
function scoreBlock2(items) {
  return (
    "<table class='tool-table'><thead><tr><th style='width:80%'>Leak</th><th>0–2</th></tr></thead><tbody>" +
    items.map(function (s) { return "<tr><td style='font-weight:400;white-space:normal;color:var(--text-soft)'>" + s + "</td><td></td></tr>"; }).join("") +
    "</tbody></table>"
  );
}
function weekTable(rows) {
  return (
    "<table class='tool-table'><thead><tr><th style='width:18%'>Day</th><th>Action</th></tr></thead><tbody>" +
    rows.map(function (r) { return "<tr><td>" + r[0] + "</td><td style='font-weight:400;white-space:normal;color:var(--text-soft)'>" + r[1] + "</td></tr>"; }).join("") +
    "</tbody></table>"
  );
}
function lines(labels) {
  return labels.map(function (l) {
    return "<div class='write-label' style='margin-top:0.6rem'>" + l + "</div><div class='wl'></div>";
  }).join("");
}
