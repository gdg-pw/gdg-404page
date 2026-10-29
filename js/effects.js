// Efekty: symbole w tle + Konami (całość w funkcji, żeby nie mieszać zmiennych z innymi plikami)

function initEffects() {
  const canvas = document.getElementById("bg-canvas");
  const text   = document.getElementById("terminal-text");
  const colors = gdgColors();

  // ---------- Symbole w tle ----------
  const SYMBOLS = ["{ }", "< >", "[ ]", ";;", "if()", "=>", "null", "git", "404", "GDG"]; // dodaj swoje
  const SYMBOL_COUNT = 45;                                                                // ile naraz

  for (let i = 0; i < SYMBOL_COUNT; i++) {
    const s = document.createElement("span");
    s.className = "code-symbol";
    s.textContent = pickRandom(SYMBOLS);
    s.style.color = pickRandom(colors);
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDuration = (Math.random() * 8 + 12) + "s";
    s.style.animationDelay = -(Math.random() * 20) + "s";
    canvas.appendChild(s);
  }

  // ---------- Konami code -> impreza: kolorowy terminal, szybsze tło, corgi biega ----------
  const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  let idx = 0, partyActive = false;

  document.addEventListener("keydown", (e) => {
    if (e.key === KONAMI[idx]) {
      idx++;
      if (idx === KONAMI.length) { idx = 0; party(); }
    } else {
      idx = e.key === KONAMI[0] ? 1 : 0;
    }
  });

  function party() {
    if (partyActive) return;
    partyActive = true;
    document.body.classList.add("party");
    setCorgiBoost(3);

    const msg = document.createElement("div");
    msg.className = "t-green";
    msg.textContent = "[PARTY] 🎉 odkryłeś easter egga";
    text.appendChild(msg);

    setTimeout(() => {
      document.body.classList.remove("party");
      setCorgiBoost(1);
      msg.remove();
      partyActive = false;
    }, 5000);
  }
}
