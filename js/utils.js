// Małe funkcje pomocnicze

// Losowy element z tablicy
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Kolory GDG z CSS (css/variables.css), więc zmieniasz je tylko tam
function gdgColors() {
  const css = getComputedStyle(document.documentElement);
  return ["--blue", "--red", "--yellow", "--green"].map(v => css.getPropertyValue(v).trim());
}

// Czy system prosi o mniej animacji
const REDUCED_MOTION = matchMedia("(prefers-reduced-motion: reduce)").matches;
