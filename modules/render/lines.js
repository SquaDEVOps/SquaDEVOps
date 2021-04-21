let lines = `

<svg class="code-animation animating" viewBox="0 0 1172 1489" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g class="lines" style="display: block;">
    <path d="M85 216.383L713.02 213.614" stroke="#EA9A00" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 0ms;"></path>
    <path d="M85 265.947L402.02 263.178" stroke="#BDF971" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 35ms;"></path>
    <path d="M85 314.626L279.37 313.624" stroke="#EA9A00" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 70ms;"></path>
    <path d="M85 364.188L271.4 363.187" stroke="#CC4452" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 105ms;"></path>
    <path d="M85 413.751L279.37 412.749" stroke="#66BECB" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 140ms;"></path>
    <path d="M85 512.876L386.58 511.874" stroke="#BDF971" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 175ms;"></path>
    <path d="M85 562.438L576.09 561.437" stroke="#BDF971" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 210ms;"></path>
    <path d="M85 612L725.37 611" stroke="#66BECB" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 245ms;"></path>
    <path d="M85 661.56L560.82 660.56" stroke="#FF3B77" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 280ms;"></path>
    <path d="M85 711.13L487.77 710.12" stroke="#EA9A00" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 315ms;"></path>
    <path d="M85 760.69L612.87 759.69" stroke="#CC4452" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 350ms;"></path>
    <path d="M85 810.25L461.37 809.25" stroke="#66BECB" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 385ms;"></path>
    <path d="M85 859.81L728.66 858.81" stroke="#FF3B77" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 420ms;"></path>
    <path d="M78 909.38L726.38 908.37" stroke="#BDF971" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 455ms;"></path>
    <path d="M85 1008.5L474.72 1007.5" stroke="#66BECB" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 490ms;"></path>
    <path d="M85 1058.06L478.41 1057.06" stroke="#66BECB" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 525ms;"></path>
    <path d="M85 1107.63L487.99 1106.62" stroke="#66BECB" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 560ms;"></path>
    <path d="M85 1157.19L824 1156.19" stroke="#EA9A00" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 595ms;"></path>
    <path d="M85 1206.75L731.7 1205.75" stroke="#FF3B77" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 630ms;"></path>
    <path d="M85 1256.31L494.2 1255.31" stroke="#EA9A00" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 665ms;"></path>
    <path d="M85 1305.88L622.21 1304.87" stroke="#BDF971" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 700ms;"></path>
    <path d="M85 1355.44L371.55 1354.44" stroke="#CC4452" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 735ms;"></path>
    <path d="M85 1405L509.65 1404" stroke="#FF3B77" stroke-width="24.8" stroke-linecap="round" stroke-linejoin="round" style="animation-delay: 770ms;"></path>
<text x="75" y="1475" class="Rrrrr" style="
    z-index: 9;
    position: relative;
">Squadevops</text>
  </g>
  <path class="select-all" opacity="0" fill-rule="evenodd" clip-rule="evenodd" d="M36.8906 165.151H874.59V1447.87H36.8906V165.151Z" fill="#54E3EB" style="display: block;"></path>
</svg>

`;

const animateCode = () => {
  const codeBubble = document.querySelector(".code-animation");
  const highlight = document.querySelector(".select-all");
  const linesGroup = document.querySelector(".lines");
  const lines = [...document.querySelectorAll(".lines path")];

  lines.forEach((line, i) => {
    line.style.animationDelay = `${i * 35}ms`;
  });

  const deleteCode = () => {
    //codeBubble.classList.remove("animating");
    setTimeout(startTyping, 700);
  };

  const selectAll = () => {
    setTimeout(deleteCode, 1500);
  };

  const startTyping = () => {
    lines[lines.length - 1].addEventListener("animationend", selectAll);
    codeBubble.classList.add("animating");
  };

  startTyping();
};


export {
    lines,
    animateCode
}