/* Playbook lesson content, part A (three-engine, lead-to-kitchen, high-volume-production).
   Each playbook: { intro, lessons: [{eyebrow, title, html}], cta: {title, body, label, href} }
   The player auto-builds cover, contents, resources, and CTA screens around these. */
window.PLAYBOOK_CONTENT = window.PLAYBOOK_CONTENT || {};

Object.assign(window.PLAYBOOK_CONTENT, {

  /* ================================================================
     1. THE THREE-ENGINE BBQ BUSINESS
     ================================================================ */
  "three-engine": {
    intro:
      "Most BBQ businesses don't stall because the food stopped being good. They stall because every part of the operation runs through one person — usually you. This playbook shows you the four connected engines a BBQ business needs to handle volume, how to spot the one that's failing, and what to fix first.",
    lessons: [
      {
        eyebrow: "The Problem",
        title: "Your ceiling isn't demand. It's you.",
        html:
          "<p>Here's the pattern we see in almost every BBQ operation that's stuck: the food is good, the phone rings, and the owner is drowning. Quotes go out late. A catering order gets half-forgotten until two days before. The pitmaster keeps the cook schedule in his head. Nobody knows if last month actually made money.</p>" +
          "<p>That's not a talent problem. It's a structure problem. Everything — selling, planning, cooking, packing, collecting — routes through one or two people's memory. Memory doesn't scale. Volume punishes it.</p>" +
          "<div class='pit-note'><span class='pit-note__flame' aria-hidden='true'><svg width='18' height='18' viewBox='0 0 24 24' fill='#f2691d'><path d='M12 2c1.5 3.5 5 5.2 5 9.5 0 3.6-2.2 6.5-5 6.5s-5-2.9-5-6.5c0-2.2 1-3.8 2.1-5.2.2 1.9 1.2 3 2.1 3.3-.6-2.7.1-5.4.8-7.6z'/></svg></span><p><b>The tell:</b> if you can't take a full week off without revenue dropping or an order breaking, the business runs on you — not on a system. Every playbook in this library exists to fix that.</p></div>"
      },
      {
        eyebrow: "The Model",
        title: "Four engines, one business",
        html:
          "<p>A BBQ business that handles volume is really four engines connected in a line. Each one feeds the next. When one is weak, the whole line backs up — and it usually backs up onto the owner.</p>" +
          "<div class='flow'>" +
          "<div class='flow__step'><span class='flow__num'>1</span><div><b>The Demand Engine</b><p>Creates catering inquiries and restaurant traffic on purpose — niches, offers, campaigns, follow-up. Not hoping the phone rings.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>2</span><div><b>The Sales Engine</b><p>Turns inquiries into booked, deposited events with a repeatable process — qualification, packages, quotes, follow-up.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>3</span><div><b>The Production Engine</b><p>Turns booked events into finished food without chaos — backward planning, batches, holding, capacity limits.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>4</span><div><b>The Command Engine</b><p>Lets the owner see and steer all of it — order status, numbers, staffing, problems — from one place, in minutes a day.</p></div></div>" +
          "</div>"
      },
      {
        eyebrow: "Engine 1",
        title: "Demand: inquiries on purpose",
        html:
          "<p>Most BBQ marketing is a photo of a brisket and the words “we cater!” That post gets likes. It does not get bookings, because it asks nobody in particular to do anything in particular.</p>" +
          "<p>A working demand engine looks different:</p>" +
          "<ul>" +
          "<li><strong>It picks a niche</strong> — corporate lunches, schools, churches, first-responder events, weddings — and speaks to that buyer specifically.</li>" +
          "<li><strong>It makes an offer</strong>, not an announcement: “Teacher in-service lunch for 60, dropped off hot, from $X per head” beats “we do catering.”</li>" +
          "<li><strong>It captures the lead</strong> — a form, a number, a booking link — instead of letting interest die in the comments.</li>" +
          "<li><strong>It follows up</strong>, because most catering is booked by whoever the buyer already knows when the need shows up.</li>" +
          "</ul>" +
          "<p>The <a href='playbook.html?id=30-day-demand'>30-Day Catering Demand Play</a> builds this engine step by step.</p>"
      },
      {
        eyebrow: "Engine 2",
        title: "Sales: from inquiry to deposit",
        html:
          "<p>An inquiry is not a sale. Between “how much for 100 people?” and a deposited event, there's a process — and if that process lives in your head, leads leak every single week.</p>" +
          "<p>The sales engine has five moving parts:</p>" +
          "<ul>" +
          "<li><strong>Qualification.</strong> Seven questions on every inquiry: guest count, date, location, service type, budget range, decision timeline, decision maker.</li>" +
          "<li><strong>Packages.</strong> Two or three set menus at set per-head prices. Packages quote in minutes; custom menus quote in days.</li>" +
          "<li><strong>Minimums and deposits.</strong> A guest-count minimum protects your margin. A deposit makes it real — no deposit, no date.</li>" +
          "<li><strong>Follow-up.</strong> A quote without follow-up is a coin flip. Day 1, day 3, day 7 — every time.</li>" +
          "<li><strong>The handoff.</strong> When it books, sales formally hands the event to operations. That handoff is where most dropped balls happen.</li>" +
          "</ul>" +
          "<p><a href='playbook.html?id=lead-to-kitchen'>From Catering Lead to Kitchen Release</a> walks the whole pipeline.</p>"
      },
      {
        eyebrow: "Engine 3",
        title: "Production: volume without chaos",
        html:
          "<p>The production engine is where BBQ businesses feel pain first, because smoked meat has brutal lead times. You can't “rush” a brisket. So the operations that scale all make the same structural move:</p>" +
          "<p><strong>They separate production day from service day.</strong></p>" +
          "<p>Cooking happens on a planned schedule, in controlled batches, ahead of the event. Service day is finishing, staging, packing, and executing — not smoking against the clock while the truck idles. That one separation is why some shops can feed 1,000 people with a smaller crew than shops feeding 200.</p>" +
          "<ul>" +
          "<li>Plan backward from service time, not forward from “when should we start?”</li>" +
          "<li>Convert guest counts into meat requirements with math, not gut feel.</li>" +
          "<li>Write the production sheet before anything hits a smoker.</li>" +
          "<li>Set a capacity ceiling before you accept the order that breaks you.</li>" +
          "</ul>" +
          "<p><a href='playbook.html?id=high-volume-production'>The High-Volume Production Play</a> covers the framework in depth.</p>"
      },
      {
        eyebrow: "Engine 4",
        title: "Command: see it all, every morning",
        html:
          "<p>The fourth engine is the one almost nobody builds — and it's the one that gives you your life back. Command means the owner can answer these questions in fifteen minutes, every morning, without walking the building or calling three people:</p>" +
          "<ul>" +
          "<li>What did we sell yesterday — restaurant and catering?</li>" +
          "<li>What's our cash position and what's due?</li>" +
          "<li>What's in production today, and is it on schedule?</li>" +
          "<li>Which orders need attention — unpaid, unconfirmed, unassigned?</li>" +
          "<li>Who's working, and where are we short?</li>" +
          "<li>What decisions actually need me today?</li>" +
          "</ul>" +
          "<p>That can start as a one-page morning sheet and grow into a real dashboard. The point isn't the software — it's one source of truth instead of five memories.</p>" +
          "<p>Start with <a href='playbook.html?id=morning-command'>The Owner's Morning Command Play</a>.</p>"
      },
      {
        eyebrow: "Diagnosis",
        title: "Find your weakest engine",
        html:
          "<p>You don't fix all four at once. You find the constraint — the engine that's currently capping everything else — and you fix that one first. Score yourself:</p>" +
          "<table><thead><tr><th>Engine</th><th>You're weak here if…</th></tr></thead><tbody>" +
          "<tr><td>Demand</td><td>Catering inquiries are random. Slow months scare you. Marketing is “post when we remember.”</td></tr>" +
          "<tr><td>Sales</td><td>Quotes go out late, follow-up is spotty, and you don't know your close rate. Custom menus eat your evenings.</td></tr>" +
          "<tr><td>Production</td><td>Event weeks are chaos. The cook plan lives in someone's head. You've had a close call on quality or timing in the last 90 days.</td></tr>" +
          "<tr><td>Command</td><td>You learn about problems late. Numbers arrive weeks after the month ends. Everything needs your sign-off because nothing is visible.</td></tr>" +
          "</tbody></table>" +
          "<div class='pit-note'><span class='pit-note__flame' aria-hidden='true'><svg width='18' height='18' viewBox='0 0 24 24' fill='#f2691d'><path d='M12 2c1.5 3.5 5 5.2 5 9.5 0 3.6-2.2 6.5-5 6.5s-5-2.9-5-6.5c0-2.2 1-3.8 2.1-5.2.2 1.9 1.2 3 2.1 3.3-.6-2.7.1-5.4.8-7.6z'/></svg></span><p><b>Rule of thumb:</b> if two engines feel equally broken, fix the one closest to the money you've already earned — sales before demand, command before everything.</p></div>"
      },
      {
        eyebrow: "Putting It Together",
        title: "What a systemized week feels like",
        html:
          "<p>Here's the same business, same food, same crew — with the four engines running:</p>" +
          "<ul>" +
          "<li><strong>Monday:</strong> the morning sheet shows weekend sales, this week's events, and two orders missing deposits. Two calls, done by 9:15.</li>" +
          "<li><strong>Tuesday:</strong> a school emails about an in-service lunch. The qualification sheet is filled in on the call; a package quote goes out the same afternoon.</li>" +
          "<li><strong>Wednesday:</strong> production day. The production sheet — written from booked orders, not memory — drives the cook. Nobody asks the owner what to smoke.</li>" +
          "<li><strong>Friday:</strong> service day for a 150-guest event. Finishing and staging only. The packing sheet was checked before the truck was loaded, not at the venue.</li>" +
          "<li><strong>Saturday:</strong> the owner works the line because they want to, not because it collapses otherwise.</li>" +
          "</ul>" +
          "<p>None of that requires more talent. It requires the systems in this library — installed and actually used.</p>"
      }
    ],
    cta: {
      title: "Want to know which engine is costing you the most?",
      body:
        "Take the free Operator Readiness Assessment to score all four engines — or, if you already know where it hurts, request a Systems Review and we'll walk through your operation together and tell you what we'd build first. No pricing pitch, no pressure; the diagnosis is useful whether or not we ever work together.",
      label: "Take the Operator Assessment",
      href: "toolkit.html?id=readiness-assessment",
      label2: "Request a Systems Review",
      href2: "help.html#systems-review"
    }
  },

  /* ================================================================
     2. FROM CATERING LEAD TO KITCHEN RELEASE
     ================================================================ */
  "lead-to-kitchen": {
    intro:
      "Between “how much for 100 people?” and a truck leaving the lot, a catering order should pass through eight stages — each with an owner and a document. This playbook walks the whole workflow, so orders stop falling through the cracks between your inbox and your kitchen.",
    lessons: [
      {
        eyebrow: "The Problem",
        title: "Orders don't fail at the event. They fail in between.",
        html:
          "<p>When a catering order goes wrong — wrong count, missing sides, no serving utensils, unpaid balance — the mistake almost never happened on event day. It happened weeks earlier, in a gap between stages nobody owned:</p>" +
          "<ul>" +
          "<li>The inquiry sat three days because “someone” was going to reply.</li>" +
          "<li>The quote was verbal, so the guest count changed and nobody wrote it down.</li>" +
          "<li>Sales knew about the allergy; the kitchen didn't.</li>" +
          "<li>The date was “booked” with no deposit — then the customer went quiet.</li>" +
          "</ul>" +
          "<p>The fix isn't trying harder. It's a defined pipeline where every order is always in exactly one stage, one person owns it, and specific paperwork must exist before it can move forward.</p>"
      },
      {
        eyebrow: "The Map",
        title: "The eight stages of every catering order",
        html:
          "<div class='flow'>" +
          "<div class='flow__step'><span class='flow__num'>1</span><div><b>Inquiry</b><p>A lead arrives — form, call, DM, walk-in. It gets logged the same day, no matter the channel.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>2</span><div><b>Qualification</b><p>Seven questions answered. You decide: quote it, refer it, or decline it.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>3</span><div><b>Quote</b><p>A written quote from set packages, sent within 24 hours, with an expiration date.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>4</span><div><b>Follow-up</b><p>Day 1, day 3, day 7 touches until you get a yes, a no, or a dead file.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>5</span><div><b>Booked</b><p>Deposit received, contract signed, date locked. No deposit = not booked.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>6</span><div><b>Handoff</b><p>Sales briefs operations. The event sheet is complete and questions get asked now, not Friday.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>7</span><div><b>Kitchen Release</b><p>Production sheet and packing sheet exist. Only then is the order released to be cooked.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>8</span><div><b>Execute & Close</b><p>Pack against the sheet, deliver, serve, collect final payment, and debrief.</p></div></div>" +
          "</div>"
      },
      {
        eyebrow: "Stage 2",
        title: "Qualify in one conversation",
        html:
          "<p>Every inquiry gets the same seven questions. Not to interrogate the customer — to quote accurately the first time and to spot the events you shouldn't take.</p>" +
          "<ol>" +
          "<li><strong>Guest count</strong> — and whether it's confirmed or a guess.</li>" +
          "<li><strong>Date and service time</strong> — when food must be ready to eat.</li>" +
          "<li><strong>Location</strong> — distance, access, stairs, power, shade.</li>" +
          "<li><strong>Service type</strong> — pickup, drop-off, full service, or on-site cooking. These are four different products with four different costs.</li>" +
          "<li><strong>Budget range</strong> — ask directly: “Most groups your size spend between $X and $Y a head — where do you want to land?”</li>" +
          "<li><strong>Decision timeline</strong> — who else is quoting, and when they'll decide.</li>" +
          "<li><strong>Decision maker</strong> — are you talking to the person who signs?</li>" +
          "</ol>" +
          "<div class='pit-note'><span class='pit-note__flame' aria-hidden='true'><svg width='18' height='18' viewBox='0 0 24 24' fill='#f2691d'><path d='M12 2c1.5 3.5 5 5.2 5 9.5 0 3.6-2.2 6.5-5 6.5s-5-2.9-5-6.5c0-2.2 1-3.8 2.1-5.2.2 1.9 1.2 3 2.1 3.3-.6-2.7.1-5.4.8-7.6z'/></svg></span><p><b>Disqualify without guilt.</b> An event under your minimum, outside your radius, or below your floor price isn't a sale — it's a scheduled loss. Refer it to a food truck you trust and keep the goodwill.</p></div>"
      },
      {
        eyebrow: "Stage 3",
        title: "Packages quote in minutes. Custom quotes in days.",
        html:
          "<p>The single biggest sales accelerator in catering is refusing to reinvent the menu for every buyer. Build two or three packages — say, a two-meat/two-side standard, a three-meat premium, and a budget drop-off — each at a set per-head price with defined portions.</p>" +
          "<div class='two-col'>" +
          "<div class='mini-card'><h4>With packages</h4><ul><li>Quote goes out same day</li><li>Food cost is pre-engineered</li><li>Kitchen cooks the same builds every week</li><li>Customers choose instead of negotiate</li></ul></div>" +
          "<div class='mini-card'><h4>Without packages</h4><ul><li>Every quote is a research project</li><li>Margin depends on your mood</li><li>Kitchen faces a new puzzle every event</li><li>Buyers stall in endless menu edits</li></ul></div>" +
          "</div>" +
          "<p>Customization still exists — as paid add-ons to a package, not as a blank sheet of paper. And every quote is written, itemized, and carries an expiration date, because open-ended quotes invite six weeks of silence followed by “we'll take it” on a date you already filled.</p>"
      },
      {
        eyebrow: "Stage 4",
        title: "Follow-up is where the money is",
        html:
          "<p>Most operators send a quote and wait. Buyers are busy; silence usually means distracted, not disinterested. A simple three-touch sequence rescues a shocking share of quiet quotes:</p>" +
          "<div class='script-box'><div class='script-box__label'>Day 1 — same-day text or email</div>" +
          "<p>“Hi [Name] — quote's in your inbox for the [date] event. Two things worth knowing: the date is still open, and we hold pricing for 14 days. Happy to adjust the package either direction.”</p></div>" +
          "<div class='script-box'><div class='script-box__label'>Day 3 — the useful nudge</div>" +
          "<p>“Quick one — while you're deciding, want me to pencil-hold [date]? No commitment; it just protects you if another inquiry comes in for that day. Also happy to answer any questions from the group.”</p></div>" +
          "<div class='script-box'><div class='script-box__label'>Day 7 — the honest close (phone if possible)</div>" +
          "<p>“I don't want to pester you — I just need to know how to plan the calendar. Are we cooking for you on [date], or should I release the hold? Either answer is completely fine.”</p></div>" +
          "<p>Every touch gets logged on the order. If it's still quiet after day 7, mark it dead and move on — but keep it on the rebooking list.</p>"
      },
      {
        eyebrow: "Stage 5",
        title: "No deposit, no date",
        html:
          "<p>A booked event means three things exist, with no exceptions:</p>" +
          "<ul>" +
          "<li><strong>A signed confirmation</strong> — even a one-page agreement — with menu, counts, times, location, and price.</li>" +
          "<li><strong>A deposit</strong> — commonly 25–50% — that makes the date real. People who won't pay a deposit are telling you something. Believe them.</li>" +
          "<li><strong>A final-count deadline</strong> — the date the guest count locks (7 days out is typical) and the rule for what happens if it rises after that.</li>" +
          "</ul>" +
          "<p>Set the final-payment rule now too: due before the event or on delivery — not “we'll invoice you after.” Chasing money from a customer who already ate is the worst collections position in food service.</p>" +
          "<div class='pit-note'><span class='pit-note__flame' aria-hidden='true'><svg width='18' height='18' viewBox='0 0 24 24' fill='#f2691d'><path d='M12 2c1.5 3.5 5 5.2 5 9.5 0 3.6-2.2 6.5-5 6.5s-5-2.9-5-6.5c0-2.2 1-3.8 2.1-5.2.2 1.9 1.2 3 2.1 3.3-.6-2.7.1-5.4.8-7.6z'/></svg></span><p><b>Hold the line kindly.</b> “We can't lock the date without the deposit — I'd hate for someone else to grab it while you're waiting on accounting” protects you and gives the buyer urgency they can take to their boss.</p></div>"
      },
      {
        eyebrow: "Stage 6",
        title: "The handoff: sales briefs operations",
        html:
          "<p>The most dangerous moment in the life of a catering order is the handoff from the person who sold it to the people who must execute it. Do it as a short, structured briefing — fifteen minutes, standing up, within a few days of booking:</p>" +
          "<ul class='check-list'>" +
          "<li>Event sheet reviewed line by line — menu, counts, times, address, contact on site</li>" +
          "<li>Service type confirmed — drop-off vs. full service changes staffing, equipment, and packing</li>" +
          "<li>Allergies, dietary needs, and VIP notes called out loud</li>" +
          "<li>Site logistics — load-in path, stairs, power, holding space, weather plan</li>" +
          "<li>Open questions assigned to a name with a deadline</li>" +
          "<li>Operations formally accepts the order — from this moment, ops owns it</li>" +
          "</ul>" +
          "<p>After the handoff, changes go through one channel and get written on the event sheet. Verbal changes are how the 150-person event shows up with 120 portions.</p>"
      },
      {
        eyebrow: "Stage 7",
        title: "Nothing gets cooked without a packing sheet",
        html:
          "<p>This rule sounds bureaucratic and it will save you more than any other in this playbook: <strong>an order is not released to the kitchen until its production sheet and packing sheet exist.</strong></p>" +
          "<div class='two-col'>" +
          "<div class='mini-card'><h4>The production sheet</h4><p>What to cook, how much of each item, for which orders, ready by when. Written from booked orders — it's the kitchen's contract for the day.</p></div>" +
          "<div class='mini-card'><h4>The packing sheet</h4><p>Every item that leaves the building: food by pan and quantity, utensils, chafers, fuel, sauces, paper goods, signage. Checked off at load-out by a named person.</p></div>" +
          "</div>" +
          "<p>Why before cooking? Because writing the packing sheet is when you discover the gaps — the missing chafing dishes, the third pan of mac that was never quoted, the serving spoons that live at the other location. Discovering gaps on paper costs minutes. Discovering them at the venue costs the account.</p>"
      },
      {
        eyebrow: "Stage 8",
        title: "Close the loop: collect, debrief, rebook",
        html:
          "<p>The event isn't over when the food lands. Three closing moves separate operators who grow from operators who churn:</p>" +
          "<ul>" +
          "<li><strong>Collect final payment on schedule.</strong> If it wasn't prepaid, it's collected on delivery — the driver knows the balance and carries the reader.</li>" +
          "<li><strong>Debrief in ten minutes.</strong> What went right, what leaked, one fix. (The After-Action template in this playbook's resources gives you the format.)</li>" +
          "<li><strong>Ask for the rebook while you're still the hero.</strong> Within 48 hours: “It was a pleasure feeding your team. Want me to pencil you in for [next natural date — next quarter, next in-service, next season]?” Corporate and school events recur on a calendar. Whoever is in the calendar owns the account.</li>" +
          "</ul>" +
          "<p>Then the order gets marked closed — money in, sheets filed, lessons captured. That's a released order's whole life, with no stage left to memory.</p>"
      }
    ],
    cta: {
      title: "This workflow is exactly what Station House OS runs",
      body:
        "You can run all eight stages on paper and a whiteboard — operators do it every day, and the free Workflow Map gives you the board layout. When you're ready for the stages, documents, reminders, and ownership to live in one connected system instead of five apps and a clipboard, that's what Station House OS was built for.",
      label: "Open the Workflow Map",
      href: "toolkit.html?id=workflow-map",
      label2: "See How Station House OS Connects It",
      href2: "help.html#station-house-os"
    }
  },

  /* ================================================================
     3. THE HIGH-VOLUME PRODUCTION PLAY
     ================================================================ */
  "high-volume-production": {
    intro:
      "The operations that feed thousands without melting down all make the same structural moves: they separate production from service, plan backward from the moment food must be eaten, cook in controlled batches, and set capacity limits before the order that breaks them. This playbook teaches that framework.",
    lessons: [
      {
        eyebrow: "The Trap",
        title: "Same-day production is a countdown to a bad Saturday",
        html:
          "<p>Here's how most BBQ catering disasters start: a 200-person event on Saturday, so the crew fires the smokers at midnight Friday and races the clock. If anything slips — a stall runs long, a smoker misbehaves, a second order lands on the same day — there is no slack. The food shows up late, or worse, underdone bark and rushed slicing show up on time.</p>" +
          "<p>The deeper cost is invisible: when every event is cooked against its own deadline, your capacity is capped by your worst night, your labor cost is bloated by hero shifts, and your quality depends on adrenaline.</p>" +
          "<p>High-volume operations flip the model. Cooking happens on <strong>production days</strong>, on a schedule with slack in it. Event day is <strong>service day</strong> — finish, stage, pack, execute. Two different jobs, two different days, two different tempos.</p>"
      },
      {
        eyebrow: "The Principle",
        title: "Separate production day from service day",
        html:
          "<div class='two-col'>" +
          "<div class='mini-card'><h4>Production day</h4><ul><li>Driven by the production sheet, not by events</li><li>Controlled batches across all booked orders</li><li>Long cooks run when time is cheap</li><li>Food moves into planned holding — protected and tracked</li></ul></div>" +
          "<div class='mini-card'><h4>Service day</h4><ul><li>Finishing, quality restoration, slicing, saucing</li><li>Staging and packing against the packing sheet</li><li>Transport, setup, service, teardown</li><li>Nobody is smoking anything against a deadline</li></ul></div>" +
          "</div>" +
          "<p>This is the operating model behind Station House's own production: smoke on a planned schedule, then finish, hold, and bring product back to service quality in a controlled process on service day. Done right, planned finishing and holding doesn't just protect quality under volume — it can beat rushed same-day product, because nothing is ever sliced in a panic.</p>" +
          "<div class='protect-box'><strong>Where the free framework ends:</strong> this playbook teaches the operating logic — separation, planning, batching, holding as a system. The exact Station House cook stages, equipment settings, timing sequences, humidity controls, and reheating specifications are the licensed part of the Method, taught only through licensed training and implementation. The framework is free; the crown jewels are quality-controlled.</div>"
      },
      {
        eyebrow: "Planning",
        title: "Plan backward from the moment they eat",
        html:
          "<p>Amateur planning starts at the front: “When should we start cooking?” Professional planning starts at the end and walks backward. For any event, fix the service time, then subtract:</p>" +
          "<div class='flow'>" +
          "<div class='flow__step'><span class='flow__num'>6</span><div><b>Service time</b><p>The moment guests eat. Immovable. Everything else derives from it.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>5</span><div><b>On-site setup</b><p>Arrival, load-in, chafers lit, lines built. Add a site-difficulty buffer — stairs and long carries are real.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>4</span><div><b>Transport</b><p>Drive time plus loading. Hot food travels in equipment that holds temperature — plan it, don't hope it.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>3</span><div><b>Finishing & staging</b><p>Slicing, saucing, panning, labeling, packing checks. This window gets crushed first when you plan forward — protect it.</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>2</span><div><b>Holding</b><p>Cooked product resting/held in a controlled state, with time in the plan — not “wherever it fits.”</p></div></div>" +
          "<div class='flow__step'><span class='flow__num'>1</span><div><b>Production</b><p>The actual cooks, scheduled on production day with slack for the unpredictable — because briskets don't read your calendar.</p></div></div>" +
          "</div>" +
          "<p>Write the times down on the Backward Planner. The plan is the point: when everyone can see the chain, nobody has to be reminded why the 2 p.m. slicing window matters.</p>"
      },
      {
        eyebrow: "The Math",
        title: "Turn guest counts into meat, on paper",
        html:
          "<p>Guessing quantities is how you end up short in front of a crowd or eating three pans of margin. Use planning math every time. Common industry starting points (tune them to your menu and your history):</p>" +
          "<table><thead><tr><th>Factor</th><th>Planning rule of thumb</th></tr></thead><tbody>" +
          "<tr><td>Cooked meat per guest</td><td>About ⅓ lb total cooked weight per person with two or more meats and full sides; more for meat-heavy menus or hungry crowds (crews, athletes).</td></tr>" +
          "<tr><td>Raw-to-cooked yield</td><td>Smoked meats commonly lose around 40–50% of raw weight. Roughly 2 lb raw per 1 lb cooked is a safe planning ratio for brisket and pork shoulder.</td></tr>" +
          "<tr><td>Mixed-meat split</td><td>Split total cooked weight across meats by expected popularity — don't cook equal amounts of everything.</td></tr>" +
          "<tr><td>Buffer</td><td>Add 5–10% to the final count. Being barely short once costs more than the buffer costs all year.</td></tr>" +
          "</tbody></table>" +
          "<p>Worked example: 150 guests × ⅓ lb = 50 lb cooked ÷ 50% yield = <strong>~100 lb raw</strong>, plus buffer → plan ~110 lb raw across your meat split. The Capacity Calculator in this playbook's resources does this math for you.</p>"
      },
      {
        eyebrow: "Batching",
        title: "Cook in controlled batches, not one-off scrambles",
        html:
          "<p>Once production is separated from events, a better question appears: instead of cooking per event, what should this <em>production day</em> produce for everything we've booked?</p>" +
          "<ul>" +
          "<li><strong>Consolidate.</strong> Three events needing pulled pork this week is one batch decision, not three cooks.</li>" +
          "<li><strong>Standardize builds.</strong> Same trim, same rub process, same pan sizes every time — batches only work when units are interchangeable.</li>" +
          "<li><strong>Match equipment to the job.</strong> Smokers create the product; ovens, holding cabinets, and refrigeration protect and finish it. Use each for what it's best at instead of making the smoker do everything.</li>" +
          "<li><strong>Schedule long cooks when time is cheap.</strong> Overnight and slow weekday windows exist — a plan lets you use them instead of paying weekend-panic labor rates.</li>" +
          "</ul>" +
          "<div class='pit-note'><span class='pit-note__flame' aria-hidden='true'><svg width='18' height='18' viewBox='0 0 24 24' fill='#f2691d'><path d='M12 2c1.5 3.5 5 5.2 5 9.5 0 3.6-2.2 6.5-5 6.5s-5-2.9-5-6.5c0-2.2 1-3.8 2.1-5.2.2 1.9 1.2 3 2.1 3.3-.6-2.7.1-5.4.8-7.6z'/></svg></span><p><b>Quality checkpoint:</b> every batch gets checked at defined points — out of the smoker, into holding, out of holding, at packing. Bark, moisture, temperature, taste. Four ten-second checks catch what one heroic final inspection misses.</p></div>"
      },
      {
        eyebrow: "Capacity",
        title: "Know your ceiling before the order that breaks you",
        html:
          "<p>Every operation has a real weekly ceiling set by its tightest constraint. Most owners discover theirs the bad way — mid-event. Calculate it instead. Your ceiling is the <em>smallest</em> of:</p>" +
          "<ul>" +
          "<li><strong>Smoker capacity:</strong> usable rack space × cooks per week, in raw pounds.</li>" +
          "<li><strong>Holding capacity:</strong> how much finished product you can hold correctly at once. This is the ceiling people forget — cooking it is useless if you can't hold it.</li>" +
          "<li><strong>Cold storage:</strong> raw product staged plus finished product, in cubic feet that actually exist.</li>" +
          "<li><strong>Labor:</strong> skilled hands × productive hours in the production window.</li>" +
          "<li><strong>Transport:</strong> what one trip of your actual vehicles can move hot and safe.</li>" +
          "</ul>" +
          "<p>Write the number down. Then set a booking rule: any single order above, say, 60% of weekly ceiling triggers a capacity review before it's confirmed — can we rent, borrow, stagger production, or must we (politely) decline? Saying no to the order you can't execute is a profit decision, not a failure.</p>"
      },
      {
        eyebrow: "Paperwork",
        title: "The production sheet runs the day — not the loudest voice",
        html:
          "<p>On production day, one document is in charge. The production sheet lists, for the whole day: every item, quantity, which orders it serves, target ready time, assigned station or person, and where it goes when done (holding, cold storage, staging).</p>" +
          "<ul class='check-list'>" +
          "<li>Written the day before, from booked orders — never composed live in the kitchen</li>" +
          "<li>Quantities come from the planning math, with the buffer already included</li>" +
          "<li>Every line has one name on it — “the kitchen” is not a name</li>" +
          "<li>Progress is marked on the sheet as items finish, so status is visible without asking</li>" +
          "<li>Changes get written, initialed, and re-announced — no silent edits</li>" +
          "</ul>" +
          "<p>Do this for four weeks and something quietly enormous happens: the cook schedule stops living in your pitmaster's head. Anyone competent can now run production day from the sheet — which means vacations, sick days, and growth stop being emergencies.</p>"
      },
      {
        eyebrow: "Fewer People, More Volume",
        title: "The payoff: design production so fewer hands move more food",
        html:
          "<p>Put the pieces together and the economics change shape:</p>" +
          "<ul>" +
          "<li><strong>Batched production days</strong> mean fewer fired-up smoker shifts per pound of output.</li>" +
          "<li><strong>Planned holding and finishing</strong> means service day needs a small, calm crew — not an army fighting fires.</li>" +
          "<li><strong>Sheets instead of memory</strong> mean newer, cheaper labor can execute reliably, with your skilled people supervising quality instead of carrying everything.</li>" +
          "<li><strong>A known ceiling</strong> means you book aggressively up to it — with confidence instead of dread.</li>" +
          "</ul>" +
          "<p>This is how a shop that used to white-knuckle a 200-person Saturday starts calmly stacking a 400-person Friday on top of it. Not more heroics — less need for them.</p>"
      }
    ],
    cta: {
      title: "The framework is free. The Method is licensed.",
      body:
        "Everything in this playbook you can implement yourself, starting with the Backward Planner and the Capacity Calculator below. The complete Station House Method — the exact cook stages, equipment settings, timing, holding and reheating specifications, and quality controls, installed in your kitchen and trained to your team — is available through licensing and implementation, because it only works when it's taught right.",
      label: "Open the Backward Planner",
      href: "toolkit.html?id=backward-planner",
      label2: "Learn About the Station House Method",
      href2: "method.html"
    }
  }
});
