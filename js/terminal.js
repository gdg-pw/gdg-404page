// Terminal: szukany adres + kropki jako easter eggi

function initTerminal() {
  const terminal = document.getElementById("terminal");
  const text     = document.getElementById("terminal-text");

  // Adres, którego ktoś szukał (textContent, więc nic z URL-a nie trafia do HTML-a)
  document.getElementById("requested").textContent = location.host + location.pathname;

  const originalHTML = text.innerHTML;
  const extraLogs =
    `<br><span class="t-blue">[DEBUG]</span> Machanie ogonem: true` +
    `<br><span class="t-red">[WARN]</span>&nbsp; Ostatni znany przysmak: 0` +
    `<br><span class="t-green">[LOG]</span>&nbsp;&nbsp; Szukam... szukam...`;
  let expanded = false;

  // Czerwona: terminal „crashuje” na 3 s
  document.querySelector(".dot.red").addEventListener("click", () => {
    if (terminal.classList.contains("closed")) return;
    terminal.classList.add("closed");
    const err = document.createElement("div");
    err.className = "terminal-error";
    err.textContent = "[ERROR] Corgi odgryzł kabel 🐕";
    terminal.appendChild(err);
    setTimeout(() => { terminal.classList.remove("closed"); err.remove(); }, 3000);
  });

  // Żółta: minimalizuj / przywróć
  document.querySelector(".dot.yellow").addEventListener("click", () => terminal.classList.toggle("minimized"));

  // Zielona: dodatkowe logi / schowaj
  document.querySelector(".dot.green").addEventListener("click", () => {
    text.innerHTML = expanded ? originalHTML : originalHTML + extraLogs;
    expanded = !expanded;
  });
}
