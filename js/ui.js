/* Shared UI: header, footer, card renderers. Data comes from js/catalog.js */
(function () {
  "use strict";

  var BADGE_SVG =
    '<svg class="brand__mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false">' +
    '<path d="M24 2 L44 10 V24 C44 36 35 43.5 24 46 C13 43.5 4 36 4 24 V10 Z" fill="#171c23" stroke="#f2691d" stroke-width="2.5"/>' +
    '<path d="M24 12 C27 17 31 19 31 25 C31 30 28 33.5 24 33.5 C20 33.5 17 30 17 25 C17 22 18.4 20 19.8 18.2 C20 21 21.5 22.5 22.6 22.8 C21.8 19 22.8 15 24 12 Z" fill="#f2691d"/>' +
    "</svg>";

  var NAV = [
    { href: "index.html#start-here", label: "Start Here" },
    { href: "playbooks.html", label: "Playbooks" },
    { href: "toolkits.html", label: "Toolkits" },
    { href: "method.html", label: "Station House Method" },
    { href: "about.html", label: "About" },
    { href: "help.html", label: "Get Help", cta: true }
  ];

  function currentPage() {
    var p = location.pathname.split("/").pop() || "index.html";
    return p;
  }

  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;
    var page = currentPage();
    var items = NAV.map(function (n) {
      var isCurrent = n.href.split("#")[0] === page && !n.cta;
      return (
        '<li class="' + (n.cta ? "nav-cta" : "") + '">' +
        '<a href="' + n.href + '"' + (isCurrent ? ' aria-current="page"' : "") + ">" +
        n.label + "</a></li>"
      );
    }).join("");
    el.innerHTML =
      '<div class="container site-header__inner">' +
      '<a class="brand" href="index.html" aria-label="BBQ Solutions Playbook — home">' +
      BADGE_SVG +
      '<span class="brand__name">BBQ Solutions Playbook<small>by Station House</small></span></a>' +
      '<button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
      '<nav class="site-nav" id="site-nav" aria-label="Main">' +
      "<ul>" + items + "</ul></nav></div>";

    var toggle = el.querySelector(".nav-toggle");
    var nav = el.querySelector(".site-nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML =
      '<div class="container">' +
      '<div class="site-footer__grid">' +
      "<div>" +
      '<a class="brand" href="index.html">' + BADGE_SVG +
      '<span class="brand__name">BBQ Solutions Playbook<small>by Station House</small></span></a>' +
      "<p>Free playbooks, tools, and operating systems for BBQ restaurants and caterers — built inside a working BBQ and catering company, not a classroom.</p>" +
      "</div>" +
      "<div><h4>Learn</h4><ul>" +
      '<li><a href="playbooks.html">Playbook Library</a></li>' +
      '<li><a href="toolkits.html">Free Toolkits</a></li>' +
      '<li><a href="index.html#start-here">Start Here</a></li>' +
      "</ul></div>" +
      "<div><h4>Implement</h4><ul>" +
      '<li><a href="method.html">The Station House Method</a></li>' +
      '<li><a href="help.html">Ways We Can Help</a></li>' +
      '<li><a href="help.html#systems-review">Request a Systems Review</a></li>' +
      "</ul></div>" +
      "<div><h4>Company</h4><ul>" +
      '<li><a href="about.html">About Station House</a></li>' +
      '<li><a href="mailto:info@stationhousebbq.com">info@stationhousebbq.com</a></li>' +
      "</ul></div>" +
      "</div>" +
      '<div class="site-footer__legal">' +
      "<span>© " + new Date().getFullYear() + " Station House Systems · Tampa, FL</span>" +
      "<span>The Station House Method™ production specifications are provided only through licensed training.</span>" +
      "</div></div>";
  }

  /* ---------- card renderers ---------- */

  function playbookCard(pb) {
    return (
      '<article class="card">' +
      '<div class="card__meta"><span class="chip">' + pb.categoryLabel + "</span>" +
      '<span class="card__time">' + pb.time + " min</span></div>" +
      '<h3 class="card__title"><a href="playbook.html?id=' + pb.id + '">' + pb.title + "</a></h3>" +
      '<p class="card__desc">' + pb.description + "</p>" +
      '<div class="card__foot"><a class="btn btn--quiet btn--sm" href="playbook.html?id=' + pb.id + '">Start the Playbook</a></div>' +
      "</article>"
    );
  }

  function toolkitCard(t) {
    return (
      '<article class="card">' +
      '<div class="card__meta"><span class="chip">' + t.categoryLabel + "</span>" +
      '<span class="chip chip--neutral">' + t.typeLabel + "</span></div>" +
      '<h3 class="card__title"><a href="toolkit.html?id=' + t.id + '">' + t.title + "</a></h3>" +
      '<p class="card__desc">' + t.description + "</p>" +
      '<div class="card__foot"><a class="btn btn--quiet btn--sm" href="toolkit.html?id=' + t.id + '">' + t.cta + "</a></div>" +
      "</article>"
    );
  }

  function renderCards(containerId, items, renderer) {
    var el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = items.map(renderer).join("");
  }

  /* Filterable library grid. */
  function initLibrary(opts) {
    var grid = document.getElementById(opts.gridId);
    var bar = document.getElementById(opts.filterId);
    if (!grid || !bar) return;
    var items = opts.items;
    var renderer = opts.renderer;
    var current = "all";

    var params = new URLSearchParams(location.search);
    if (params.get("cat") && CATALOG.categories.some(function (c) { return c.id === params.get("cat"); })) {
      current = params.get("cat");
    }

    function draw() {
      var list = current === "all" ? items : items.filter(function (i) { return i.category === current; });
      grid.innerHTML = list.map(renderer).join("");
      bar.querySelectorAll(".filter-btn").forEach(function (b) {
        b.setAttribute("aria-pressed", b.dataset.cat === current ? "true" : "false");
      });
    }

    var cats = [{ id: "all", short: "All" }].concat(CATALOG.categories);
    bar.innerHTML = cats.map(function (c) {
      return '<button class="filter-btn" data-cat="' + c.id + '" aria-pressed="false">' + c.short + "</button>";
    }).join("");
    bar.addEventListener("click", function (e) {
      var b = e.target.closest(".filter-btn");
      if (!b) return;
      current = b.dataset.cat;
      draw();
    });
    draw();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
  });

  window.UI = {
    playbookCard: playbookCard,
    toolkitCard: toolkitCard,
    renderCards: renderCards,
    initLibrary: initLibrary,
    badge: BADGE_SVG
  };
})();
