// Corgi chodzi po górnej ramce terminala, kliknięty skacze i iskrzy

const CORGI_SPEED = 90;     // px na sekundę
const EDGE_PAUSE  = 1200;   // ms postoju przy krawędzi
let corgiBoost = 1;         // mnożnik prędkości (Konami w js/effects.js)

function setCorgiBoost(n) { corgiBoost = n; }

function initCorgi() {
  const box    = document.getElementById("terminal-box");
  const sprite = document.getElementById("corgi");
  const img    = sprite.querySelector("img");
  const colors = gdgColors();

  let x = 24, dir = 1, pausing = false, happy = false, last = null;

  const maxX = () => box.offsetWidth - sprite.offsetWidth;
  const place = () => {
    sprite.style.left = x + "px";
    sprite.style.transform = `scaleX(${dir})`;   // obrazek patrzy w prawo
  };
  place();

  // ---------- Chodzenie ----------
  function edgePause() {
    pausing = true;
    img.style.animationPlayState = "paused";
    setTimeout(() => {
      dir *= -1;
      img.style.animationPlayState = "running";
      pausing = false;
    }, EDGE_PAUSE);
  }

  function tick(now) {
    const dt = last === null ? 0 : Math.min(now - last, 100) / 1000;   // max 100 ms, np. po powrocie do karty
    last = now;
    if (!pausing && !happy) {
      x += CORGI_SPEED * corgiBoost * dir * dt;
      const edge = x >= maxX() ? maxX() : x <= 0 ? 0 : null;
      if (edge !== null) {
        x = edge;
        corgiBoost > 1 ? (dir *= -1) : edgePause();   // na imprezie bez postojów
      }
      place();
    }
    requestAnimationFrame(tick);
  }

  if (!REDUCED_MOTION) {
    requestAnimationFrame(tick);

    // Ślady łap
    setInterval(() => {
      if (pausing || happy || document.hidden) return;
      const paw = document.createElement("span");
      paw.className = "paw-print";
      paw.textContent = "🐾";
      paw.style.left = (x + sprite.offsetWidth / 2 - 8) + "px";
      box.appendChild(paw);
      paw.addEventListener("animationend", () => paw.remove());
    }, 280);
  }

  // ---------- Kliknięcie: radość ----------
  function sparkle() {
    const s = document.createElement("span");
    s.className = "sparkle";
    s.textContent = pickRandom(["✦", "★", "·", "◆"]);
    s.style.color = pickRandom(colors);
    const angle = Math.random() * Math.PI * 2, r = 15 + Math.random() * 25;
    s.style.left = (sprite.offsetWidth / 2 + Math.cos(angle) * r - 6) + "px";
    s.style.top  = (sprite.offsetHeight / 2 + Math.sin(angle) * r - 6) + "px";
    sprite.appendChild(s);
    s.addEventListener("animationend", () => s.remove());
  }

  sprite.addEventListener("click", () => {
    if (happy) return;
    happy = true;
    img.classList.add("happy");
    const sparks = setInterval(() => { sparkle(); sparkle(); }, 150);
    setTimeout(() => {
      clearInterval(sparks);
      img.classList.remove("happy");
      happy = false;
    }, 1800);
  });
}
