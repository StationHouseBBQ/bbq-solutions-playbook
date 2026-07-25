/* Presentation-style playbook player.
   Builds slides: cover → contents → lessons → resources → CTA.
   Keyboard (←/→), swipe, hash deep-links (#s3), and resume via localStorage. */
(function () {
  "use strict";

  var params = new URLSearchParams(location.search);
  var id = params.get("id");
  var meta = id && window.CATALOG ? CATALOG.getPlaybook(id) : null;
  var content = meta && window.PLAYBOOK_CONTENT ? PLAYBOOK_CONTENT[id] : null;

  var root = document.getElementById("slide-root");
  var titleEl = document.getElementById("player-title");
  var countEl = document.getElementById("player-count");
  var barEl = document.getElementById("progress-bar");
  var progEl = document.getElementById("progress");
  var prevBtn = document.getElementById("btn-prev");
  var nextBtn = document.getElementById("btn-next");

  if (!meta || !content) {
    titleEl.textContent = "Playbook not found";
    root.innerHTML =
      '<div class="slide"><h2 class="slide__title">We couldn\'t find that playbook.</h2>' +
      '<p class="lede">It may have moved. Everything free lives in the library.</p>' +
      '<p><a class="btn btn--primary" href="playbooks.html">Back to the Library</a></p></div>';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  document.title = meta.title + " — BBQ Solutions Playbook";
  titleEl.textContent = meta.title;

  /* ---------- build slide list ---------- */

  var slides = [];

  // 1. cover
  slides.push({
    label: "Cover",
    render: function () {
      return (
        '<div class="slide slide--cover">' +
        '<div class="cover-cat"><span class="chip">' + meta.categoryLabel + "</span></div>" +
        "<h1>" + meta.title + "</h1>" +
        '<p class="lede">' + content.intro + "</p>" +
        '<div class="cover-meta">' +
        "<span>About " + meta.time + " minutes</span>" +
        "<span>&middot;</span><span>" + content.lessons.length + " lessons</span>" +
        "<span>&middot;</span><span>" + meta.resources.length + " free tools included</span>" +
        "</div>" +
        '<button class="btn btn--primary" data-goto="next" type="button">Start the Playbook &rarr;</button>' +
        "</div>"
      );
    }
  });

  // 2. contents
  slides.push({
    label: "Contents",
    render: function () {
      var items = content.lessons.map(function (l, i) {
        return (
          "<li><button type='button' data-goto='" + (i + 2) + "'>" +
          "<span class='n'>" + pad(i + 1) + "</span><span>" + l.title + "</span></button></li>"
        );
      }).join("");
      return (
        '<div class="slide">' +
        '<span class="eyebrow slide__eyebrow">In this playbook</span>' +
        '<h2 class="slide__title">Contents</h2>' +
        '<ul class="toc-list">' + items + "</ul>" +
        "</div>"
      );
    }
  });

  // 3..n lessons
  content.lessons.forEach(function (l) {
    slides.push({
      label: l.title,
      render: function () {
        return (
          '<div class="slide">' +
          '<span class="eyebrow slide__eyebrow">' + l.eyebrow + "</span>" +
          '<h2 class="slide__title">' + l.title + "</h2>" +
          '<div class="prose">' + l.html + "</div>" +
          "</div>"
        );
      }
    });
  });

  // resources
  slides.push({
    label: "Resources",
    render: function () {
      var items = meta.resources.map(function (rid) {
        var t = CATALOG.getToolkit(rid);
        if (!t) return "";
        return (
          '<a class="res-item" href="toolkit.html?id=' + t.id + '">' +
          '<span class="tile-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/></svg></span>' +
          "<span><b>" + t.title + "</b><span>" + t.typeLabel + " · " + t.categoryLabel + "</span></span></a>"
        );
      }).join("");
      return (
        '<div class="slide">' +
        '<span class="eyebrow slide__eyebrow">Resources in this playbook</span>' +
        '<h2 class="slide__title">Take the tools with you</h2>' +
        '<p class="lede">Every tool below is free, printable, and built to be used this week — no email gate, no catch.</p>' +
        '<div class="res-list">' + items + "</div>" +
        "</div>"
      );
    }
  });

  // CTA
  slides.push({
    label: "Next steps",
    render: function () {
      var c = content.cta;
      var second = c.label2
        ? ' <a class="btn btn--ghost" href="' + c.href2 + '">' + c.label2 + "</a>"
        : "";
      return (
        '<div class="slide">' +
        '<span class="eyebrow slide__eyebrow">Where this goes next</span>' +
        '<h2 class="slide__title">' + c.title + "</h2>" +
        '<div class="prose"><p>' + c.body + "</p></div>" +
        '<p style="margin-top:1.6rem; display:flex; gap:12px; flex-wrap:wrap;">' +
        '<a class="btn btn--primary" href="' + c.href + '">' + c.label + "</a>" + second + "</p>" +
        '<p class="muted small" style="margin-top:1.6rem;"><a href="playbooks.html">&larr; Back to the library</a> &nbsp;·&nbsp; ' +
        '<button type="button" class="linklike" data-goto="0" style="background:none;border:none;color:var(--ember-bright);cursor:pointer;font-size:inherit;padding:0;">Restart this playbook</button></p>' +
        "</div>"
      );
    }
  });

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  /* ---------- state & navigation ---------- */

  var current = 0;
  var storeKey = "shpb-progress-" + id;

  function clamp(n) { return Math.max(0, Math.min(slides.length - 1, n)); }

  function show(n, focus) {
    current = clamp(n);
    root.innerHTML = slides[current].render();
    var pct = Math.round((current / (slides.length - 1)) * 100);
    barEl.style.width = pct + "%";
    progEl.setAttribute("aria-valuenow", String(pct));
    countEl.textContent = (current + 1) + " / " + slides.length;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;
    nextBtn.textContent = current === 0 ? "Start →" : "Next →";
    try { localStorage.setItem(storeKey, String(current)); } catch (e) {}
    if (history.replaceState) history.replaceState(null, "", "#s" + (current + 1));
    if (focus !== false) {
      root.scrollTop = 0;
      window.scrollTo(0, 0);
      root.focus({ preventScroll: true });
    }
  }

  prevBtn.addEventListener("click", function () { show(current - 1); });
  nextBtn.addEventListener("click", function () { show(current + 1); });

  root.addEventListener("click", function (e) {
    var b = e.target.closest("[data-goto]");
    if (!b) return;
    var v = b.getAttribute("data-goto");
    show(v === "next" ? current + 1 : parseInt(v, 10));
  });

  document.addEventListener("keydown", function (e) {
    if (e.target.matches("input, textarea, select")) return;
    if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); show(current + 1); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); show(current - 1); }
    if (e.key === "Home") { e.preventDefault(); show(0); }
    if (e.key === "End") { e.preventDefault(); show(slides.length - 1); }
  });

  /* swipe */
  var touchX = null, touchY = null;
  document.addEventListener("touchstart", function (e) {
    touchX = e.touches[0].clientX; touchY = e.touches[0].clientY;
  }, { passive: true });
  document.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    var dy = e.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      show(dx < 0 ? current + 1 : current - 1);
    }
    touchX = touchY = null;
  }, { passive: true });

  /* ---------- initial slide: hash > saved > 0 ---------- */

  var start = 0;
  var hash = location.hash.match(/^#s(\d+)$/);
  if (hash) {
    start = clamp(parseInt(hash[1], 10) - 1);
  } else {
    try {
      var saved = parseInt(localStorage.getItem(storeKey), 10);
      if (!isNaN(saved) && saved > 0 && saved < slides.length - 1) start = saved;
    } catch (e) {}
  }
  show(start, false);

  /* small toast if resuming */
  if (start > 0 && !hash) {
    countEl.textContent = (start + 1) + " / " + slides.length + " · resumed";
  }
})();
