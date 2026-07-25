/* Catalog: categories (tracks), playbooks, toolkits. Adding a new playbook or
   toolkit = add an entry here + its content in playbook-content.js / toolkit-content.js. */
var CATALOG = {
  categories: [
    {
      id: "marketing",
      short: "Marketing",
      label: "Marketing & Demand",
      blurb: "How catering demand actually gets created — niches, offers, campaigns, and follow-up."
    },
    {
      id: "sales",
      short: "Sales",
      label: "Catering Sales",
      blurb: "From first inquiry to booked, deposited event — without living in your inbox."
    },
    {
      id: "production",
      short: "Production",
      label: "Production & Capacity",
      blurb: "Cook more volume with less chaos: backward planning, batches, holding, and capacity limits."
    },
    {
      id: "operations",
      short: "Operations",
      label: "Operations & Execution",
      blurb: "Order workflows, packing sheets, handoffs, and service-day execution that don't leak."
    },
    {
      id: "numbers",
      short: "Numbers",
      label: "Numbers & Profitability",
      blurb: "See sales, cash, food cost, labor, and order profit every morning — in one place."
    },
    {
      id: "leadership",
      short: "Leadership",
      label: "Leadership & Team",
      blurb: "SOPs, training, ownership, and a business that runs when you're not standing in it."
    }
  ],

  playbooks: [
    {
      id: "three-engine",
      title: "The Three-Engine BBQ Business",
      category: "operations",
      categoryLabel: "Operations & Execution",
      time: 25,
      featured: true,
      description:
        "Why BBQ businesses stall at the owner's ceiling — and the four connected engines (demand, sales, production, command) that let volume grow without you cooking every order.",
      resources: ["readiness-assessment", "profit-leak-assessment", "workflow-map"]
    },
    {
      id: "lead-to-kitchen",
      title: "From Catering Lead to Kitchen Release",
      category: "sales",
      categoryLabel: "Catering Sales",
      time: 20,
      featured: true,
      description:
        "The complete workflow from first inquiry to a kitchen-ready order — qualification questions, deposit rules, the handoff meeting, and why nothing gets cooked without a packing sheet.",
      resources: ["lead-qualification", "quote-followup", "workflow-map", "service-day-checklist"]
    },
    {
      id: "high-volume-production",
      title: "The High-Volume Production Play",
      category: "production",
      categoryLabel: "Production & Capacity",
      time: 25,
      featured: true,
      description:
        "Separate cooking from event day. Plan backward from service time, cook in controlled batches, set a real capacity ceiling, and stop letting one pitmaster's memory run the kitchen.",
      resources: ["backward-planner", "capacity-worksheet", "service-day-checklist"]
    },
    {
      id: "30-day-demand",
      title: "The 30-Day Catering Demand Play",
      category: "marketing",
      categoryLabel: "Marketing & Demand",
      time: 20,
      featured: true,
      description:
        "Pick one profitable niche, build one offer, and run a four-week campaign that turns social attention into catering inquiries — with the calendar and follow-up plan included.",
      resources: ["marketing-calendar", "lead-qualification", "quote-followup"]
    },
    {
      id: "morning-command",
      title: "The Owner's Morning Command Play",
      category: "numbers",
      categoryLabel: "Numbers & Profitability",
      time: 15,
      featured: true,
      description:
        "The 15-minute morning scan that replaces running blind: sales, cash, today's production, staffing, deliveries, and the two or three decisions that actually need you.",
      resources: ["morning-command", "profit-leak-assessment"]
    },
    {
      id: "stop-memory",
      title: "Stop Running the Business From Memory",
      category: "leadership",
      categoryLabel: "Leadership & Team",
      time: 15,
      featured: true,
      description:
        "Turn tribal knowledge into 15-minute SOPs, give every order one owner, and build handoffs and after-action reviews so mistakes stop repeating.",
      resources: ["sop-builder", "after-action", "morning-command"]
    }
  ],

  toolkits: [
    {
      id: "readiness-assessment",
      title: "BBQ Operator Readiness Assessment",
      category: "operations",
      categoryLabel: "Operations & Execution",
      typeLabel: "Assessment",
      cta: "Take the Assessment",
      description:
        "24 questions across the four engines. Score yourself honestly and find the engine that's actually holding your volume back.",
      playbook: "three-engine"
    },
    {
      id: "marketing-calendar",
      title: "30-Day Catering Marketing Calendar",
      category: "marketing",
      categoryLabel: "Marketing & Demand",
      typeLabel: "Calendar",
      cta: "Open the Calendar",
      description:
        "A four-week posting and outreach rhythm built around one niche — what to post, who to contact, and what to send, day by day.",
      playbook: "30-day-demand"
    },
    {
      id: "lead-qualification",
      title: "Catering Lead Qualification Sheet",
      category: "sales",
      categoryLabel: "Catering Sales",
      typeLabel: "Worksheet",
      cta: "Open the Worksheet",
      description:
        "The seven questions to ask on every inquiry — guest count, date, location, service type, budget, decision timeline — plus disqualifiers that protect your margin.",
      playbook: "lead-to-kitchen"
    },
    {
      id: "quote-followup",
      title: "Quote Follow-Up Script",
      category: "sales",
      categoryLabel: "Catering Sales",
      typeLabel: "Script",
      cta: "Open the Script",
      description:
        "Word-for-word follow-up messages for day 1, day 3, and day 7 after you send a quote — plus the phone script that closes quiet proposals.",
      playbook: "lead-to-kitchen"
    },
    {
      id: "workflow-map",
      title: "Quote-to-Kitchen Workflow Map",
      category: "operations",
      categoryLabel: "Operations & Execution",
      typeLabel: "Workflow",
      cta: "See the Workflow",
      description:
        "The eight stages every catering order should pass through, who owns each one, and the documents that must exist before the next stage starts.",
      playbook: "lead-to-kitchen"
    },
    {
      id: "backward-planner",
      title: "Production Backward Planner",
      category: "production",
      categoryLabel: "Production & Capacity",
      typeLabel: "Worksheet",
      cta: "Open the Planner",
      description:
        "Start at service time and plan backward: staging, transport, finishing, holding, cooking, and prep — with a worked example for a 150-guest event.",
      playbook: "high-volume-production"
    },
    {
      id: "capacity-worksheet",
      title: "Capacity Planning Calculator",
      category: "production",
      categoryLabel: "Production & Capacity",
      typeLabel: "Calculator",
      cta: "Use the Calculator",
      description:
        "Turn guest counts into cooked-meat requirements and check them against your smoker, holding, and labor limits before you say yes to an order.",
      playbook: "high-volume-production"
    },
    {
      id: "service-day-checklist",
      title: "Service-Day Readiness Checklist",
      category: "operations",
      categoryLabel: "Operations & Execution",
      typeLabel: "Checklist",
      cta: "Use the Checklist",
      description:
        "The pre-departure, on-site, and teardown checks that keep an event clean — run it before every truck leaves the lot.",
      playbook: "high-volume-production"
    },
    {
      id: "morning-command",
      title: "Morning Command Sheet",
      category: "numbers",
      categoryLabel: "Numbers & Profitability",
      typeLabel: "Worksheet",
      cta: "Open the Sheet",
      description:
        "One page, fifteen minutes, every morning: yesterday's sales, cash position, today's production, staffing, deliveries, and open decisions.",
      playbook: "morning-command"
    },
    {
      id: "sop-builder",
      title: "15-Minute SOP Builder",
      category: "leadership",
      categoryLabel: "Leadership & Team",
      typeLabel: "Template",
      cta: "Build an SOP",
      description:
        "A fill-in template that turns one recurring task into a checklist-based procedure your team can run without you — in one sitting.",
      playbook: "stop-memory"
    },
    {
      id: "after-action",
      title: "After-Action Review Template",
      category: "leadership",
      categoryLabel: "Leadership & Team",
      typeLabel: "Template",
      cta: "Open the Template",
      description:
        "The firehouse debrief, adapted for BBQ: what was planned, what happened, why the gap, and the one system fix — without blaming people.",
      playbook: "stop-memory"
    },
    {
      id: "profit-leak-assessment",
      title: "Profit-Leak Assessment",
      category: "numbers",
      categoryLabel: "Numbers & Profitability",
      typeLabel: "Assessment",
      cta: "Find Your Leaks",
      description:
        "Twenty places BBQ operations quietly lose money — from unpriced delivery to comped mistakes — scored so you know which leak to plug first.",
      playbook: "morning-command"
    }
  ]
};

CATALOG.getPlaybook = function (id) {
  return CATALOG.playbooks.find(function (p) { return p.id === id; });
};
CATALOG.getToolkit = function (id) {
  return CATALOG.toolkits.find(function (t) { return t.id === id; });
};
