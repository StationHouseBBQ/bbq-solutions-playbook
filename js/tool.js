/* Toolkit page renderer + interactive calculators. */
(function () {
  "use strict";

  var params = new URLSearchParams(location.search);
  var id = params.get("id");
  var meta = id ? CATALOG.getToolkit(id) : null;
  var content = meta && window.TOOLKIT_CONTENT ? TOOLKIT_CONTENT[id] : null;
  var root = document.getElementById("tool-root");

  if (!meta || !content) {
    root.innerHTML =
      "<h1>Tool not found</h1><p class='lede'>It may have moved. Every free tool lives in the toolkit library.</p>" +
      "<p><a class='btn btn--primary' href='toolkits.html'>Back to Toolkits</a></p>";
    return;
  }

  document.title = meta.title + " — Free Toolkit — BBQ Solutions Playbook";

  var pb = meta.playbook ? CATALOG.getPlaybook(meta.playbook) : null;

  var head =
    "<div class='tool-head'>" +
    "<div class='card__meta'><span class='chip'>" + meta.categoryLabel + "</span>" +
    "<span class='chip chip--neutral'>" + meta.typeLabel + "</span><span class='chip chip--neutral'>Free</span></div>" +
    "<h1>" + meta.title + "</h1>" +
    "<p class='lede'>" + meta.description + "</p>" +
    "<div class='tool-actions no-print'>" +
    "<button class='btn btn--primary' type='button' onclick='window.print()'>Print this tool</button>" +
    (pb ? "<a class='btn btn--ghost' href='playbook.html?id=" + pb.id + "'>Open the companion playbook</a>" : "") +
    "<a class='btn btn--quiet' href='toolkits.html'>All toolkits</a>" +
    "</div>" +
    "<p class='small muted no-print' style='margin-top:0.9rem'>Use your browser's print dialog to save this as a PDF — every tool is formatted for paper.</p>" +
    "</div>";

  var calcHtml = "";
  if (content.calc === "capacity") calcHtml = capacityCalc();

  var sections = content.sections.map(function (s) {
    return "<section class='tool-section'><h2>" + s.title + "</h2>" + s.html + "</section>";
  }).join("");

  var footerCta =
    "<section class='tool-section no-print'>" +
    "<div class='note-box'><b>Using this tool and hitting a wall?</b> That's usually the sign the system around it is missing — not that you're doing it wrong. " +
    "A <a href='help.html#systems-review'>Systems Review</a> is a working session where we look at your operation and tell you what we'd build first. No pricing on the website, no pressure on the call.</div>" +
    "</section>";

  root.innerHTML = head + calcHtml + sections + footerCta;

  if (content.calc === "capacity") wireCapacity();

  /* ---------------- capacity calculator ---------------- */

  function capacityCalc() {
    return (
      "<section class='tool-section'><h2>Part 1 — event meat calculator</h2>" +
      "<p>Turn a guest count into raw-meat requirements. Planning math, not gospel — tune the assumptions to your menu and history.</p>" +
      "<div class='calc no-print'>" +
      "<div class='calc-grid'>" +
      "<div class='field'><label for='c-guests'>Guest count</label><input id='c-guests' type='number' min='1' value='150' inputmode='numeric'></div>" +
      "<div class='field'><label for='c-perhead'>Cooked meat per guest (lb)</label><input id='c-perhead' type='number' step='0.05' min='0.1' value='0.33'></div>" +
      "<div class='field'><label for='c-yield'>Cooked yield from raw (%)</label><input id='c-yield' type='number' min='20' max='95' value='50'></div>" +
      "<div class='field'><label for='c-buffer'>Safety buffer (%)</label><input id='c-buffer' type='number' min='0' max='30' value='8'></div>" +
      "</div>" +
      "<div class='calc-out' aria-live='polite'>" +
      "<table><tbody>" +
      "<tr><td>Cooked meat needed</td><td id='o-cooked'>—</td></tr>" +
      "<tr><td>Raw meat before buffer</td><td id='o-raw'>—</td></tr>" +
      "<tr><td class='big'>Raw meat to plan</td><td class='big' id='o-total'>—</td></tr>" +
      "</tbody></table>" +
      "<p class='small muted' style='margin:10px 0 0'>Split the total across meats by expected popularity — not evenly. Meat-heavy menus or hungry crews: raise per-guest weight toward 0.4–0.5 lb.</p>" +
      "</div></div>" +
      "<div class='calc calc--print' style='display:none'></div>" +
      "</section>"
    );
  }

  function wireCapacity() {
    var ids = ["c-guests", "c-perhead", "c-yield", "c-buffer"];
    function calc() {
      var g = parseFloat(document.getElementById("c-guests").value) || 0;
      var p = parseFloat(document.getElementById("c-perhead").value) || 0;
      var y = (parseFloat(document.getElementById("c-yield").value) || 0) / 100;
      var b = (parseFloat(document.getElementById("c-buffer").value) || 0) / 100;
      var cooked = g * p;
      var raw = y > 0 ? cooked / y : 0;
      var total = raw * (1 + b);
      document.getElementById("o-cooked").textContent = cooked ? cooked.toFixed(1) + " lb" : "—";
      document.getElementById("o-raw").textContent = raw ? raw.toFixed(1) + " lb" : "—";
      document.getElementById("o-total").textContent = total ? Math.ceil(total) + " lb raw" : "—";
    }
    ids.forEach(function (i) {
      document.getElementById(i).addEventListener("input", calc);
    });
    calc();
  }
})();
