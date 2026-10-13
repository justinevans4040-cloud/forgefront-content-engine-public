/* Derived from the actual live ODIN LINEFORGE rune SVG paths. */
(() => {
  "use strict";
  if (document.getElementById("ff-ambient-runes")) return;
  const designs=[
    "M32 5V91M12 24L52 48L12 72M21 48H52",
    "M12 88L32 8L52 88M18 62H46M25 35L46 62",
    "M10 14H54L32 48L54 82H10M18 30L46 66",
    "M13 10L51 86M51 10L13 86M9 48H55M32 23V73",
    "M32 6L54 34L42 88M32 6L10 34L22 88M10 34H54M22 88H42",
    "M12 8V88M12 28L50 8M12 48L50 28M12 68L50 48M12 88L50 68",
    "M32 6V90M11 26L32 46L53 26M11 70L32 50L53 70M18 48H46",
    "M14 8L50 88M50 8L14 88M14 8H50M14 88H50M22 48H42",
    "M32 7L53 28L32 49L11 28L32 7ZM32 49V89M17 73L32 89L47 73",
    "M11 14H53L22 48L53 82H11L42 48L11 14Z"
  ];
  const box=document.createElement("div");box.className="ff-ambient-runes";
  box.id="ff-ambient-runes";box.setAttribute("aria-hidden","true");
  const ns="http://www.w3.org/2000/svg";
  for (let i=0;i<designs.length;i++){
    const svg=document.createElementNS(ns,"svg");
    svg.classList.add("ff-ambient-rune");svg.setAttribute("viewBox","0 0 64 96");
    svg.setAttribute("focusable","false");svg.setAttribute("aria-hidden","true");
    for(const cls of ["ff-rune-shape","ff-rune-spark"]){
      const path=document.createElementNS(ns,"path");path.classList.add(cls);
      path.setAttribute("pathLength","100");path.setAttribute("d",designs[i]);svg.append(path);
    }
    box.append(svg);
  }
  document.body.prepend(box);
})();
