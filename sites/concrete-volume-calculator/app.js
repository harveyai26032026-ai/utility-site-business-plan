// Concrete Volume Calculator — 100% client-side.
// Computes volume in cubic feet/metres -> cubic yards & metres, plus bag count.
const $ = (id) => document.getElementById(id);

function num(id){ const v = parseFloat($(id).value); return isFinite(v) && v > 0 ? v : 0; }

function compute(){
  const shape = $("shape").value;
  const metric = $("units").value === "metric";
  const qty = Math.max(1, Math.floor(num("qty")) || 1);
  const waste = 1 + (parseFloat($("waste").value) / 100);
  const bagFt3 = parseFloat($("bag").value); // ft^3 yield per bag

  let volFt3 = 0; // total volume in cubic feet (single unit)

  if (shape === "slab"){
    let L = num("length"), W = num("width"), T = num("thickness");
    if (metric){
      // L,W in metres; T in cm
      const m3 = L * W * (T / 100);
      volFt3 = m3 * 35.3146667;
    } else {
      // L,W in feet; T in inches
      volFt3 = L * W * (T / 12);
    }
  } else {
    let D = num("diameter"), H = num("height");
    if (metric){
      // D in cm, H in metres
      const r = (D / 100) / 2;
      const m3 = Math.PI * r * r * H;
      volFt3 = m3 * 35.3146667;
    } else {
      // D in inches, H in feet
      const r = (D / 12) / 2;
      volFt3 = Math.PI * r * r * H;
    }
  }

  volFt3 = volFt3 * qty * waste;

  const yd3 = volFt3 / 27;
  const m3 = volFt3 / 35.3146667;
  const bags = bagFt3 > 0 ? Math.ceil(volFt3 / bagFt3) : 0;

  const fmt = (x, d) => x.toLocaleString(undefined, {minimumFractionDigits:d, maximumFractionDigits:d});

  $("results").innerHTML = volFt3 > 0 ? `
    <div class="stat"><span class="big">${fmt(yd3,2)}</span><span class="lbl">cubic yards</span></div>
    <div class="stat"><span class="big">${fmt(m3,2)}</span><span class="lbl">cubic metres</span></div>
    <div class="stat"><span class="big">${fmt(volFt3,1)}</span><span class="lbl">cubic feet</span></div>
    <div class="stat"><span class="big">${bags}</span><span class="lbl">bags needed</span></div>
  ` : `<div class="stat" style="grid-column:1/-1"><span class="lbl">Enter dimensions above to see your estimate.</span></div>`;
}

function syncUnits(){
  const metric = $("units").value === "metric";
  document.querySelectorAll(".u").forEach(el => {
    const u = el.getAttribute("data-u");
    if (metric) el.textContent = (u === "ft") ? "m" : "cm";
    else el.textContent = u;
  });
}

function syncShape(){
  const slab = $("shape").value === "slab";
  $("slabInputs").hidden = !slab;
  $("columnInputs").hidden = slab;
  compute();
}

["shape"].forEach(id => $(id).addEventListener("change", syncShape));
$("units").addEventListener("change", () => { syncUnits(); compute(); });
["length","width","thickness","diameter","height","qty","waste","bag"].forEach(id =>
  $(id).addEventListener("input", compute));

syncUnits();
syncShape();   // also runs compute()
