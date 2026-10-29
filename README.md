<div align="center">
  <img src=".github/readme/logo.webp" alt="GDG on Campus PW" width="140" />

  <h1>404 · GDG on Campus PW</h1>
  <p>Zabłądziłeś na gdgpw.pl? Corgi z siatką na bugi już szuka.</p>

  <a href="https://zgubiony.gdgpw.pl">
    <img src="https://img.shields.io/badge/%E2%96%B6%20Zgub%20si%C4%99-zgubiony.gdgpw.pl-E74639?style=for-the-badge&labelColor=181818" alt="Zgub się" />
  </a>

  <br/><br/>

  <img src="https://img.shields.io/badge/status-404-E74639?style=flat-square&labelColor=181818" alt="status 404" />
  <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white&labelColor=181818" alt="HTML" />
  <img src="https://img.shields.io/badge/CSS-663399?style=flat-square&logo=css&logoColor=white&labelColor=181818" alt="CSS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black&labelColor=181818" alt="JavaScript" />
  <img src="https://img.shields.io/badge/nginx-009639?style=flat-square&logo=nginx&logoColor=white&labelColor=181818" alt="nginx" />
</div>

---

<div align="center">
  <img src=".github/readme/hero.webp" alt="Strona 404 z corgim na terminalu" width="820" />
  <br/><sub>Corgi patroluje terminal, a terminal pokazuje adres, którego szukałeś.</sub>
</div>
<br/>

Każda nieistniejąca subdomena `gdgpw.pl` i każda zła ścieżka trafia tutaj zamiast na gołe „404 Not Found”. Jeden przycisk i wracasz do bazy.

---

## 🐕 Easter eggi

<div align="center">
  <img src=".github/readme/party.webp" alt="Corgi skacze, terminal imprezuje" width="700" />
</div>

| Co robisz | Co się dzieje |
|-----------|---------------|
| Klikasz corgiego | Skacze i iskrzy szczęściem |
| 🔴 Czerwona kropka | Terminal „crashuje”, bo corgi odgryzł kabel |
| 🟡 Żółta kropka | Terminal się zwija |
| 🟢 Zielona kropka | Więcej logów z poszukiwań |
| `↑ ↑ ↓ ↓ ← → ← → B A` | Impreza: kolory, szybsze tło, corgi biega |

---

## 📱 Na telefonie

<div align="center">
  <img src=".github/readme/mobile.webp" alt="Strona 404 na telefonie" width="260" />
</div>

---

## Pod maską

- Czysty HTML, CSS i JS. Bez buildów i zależności.
- `nginx.conf` odpowiada tą stroną na każdą nieznaną ścieżkę, ze statusem 404. Sam adres `/` zwraca 200.
- Ścieżki do plików zaczynają się od `/`, więc strona wygląda tak samo pod `/a/b/c`.
- Przy `prefers-reduced-motion` corgi stoi, a tło się nie rusza.
- Lokalnie: `docker compose up --build` i http://localhost:8091/cokolwiek. Prosty serwer Pythona nie przekieruje nieznanych ścieżek.

---

<div align="center">
  <sub><a href="https://gdg.community.dev/gdg-on-campus-politechnika-warszawska-warsaw-poland/">GDG on Campus PW</a> &nbsp;·&nbsp; <a href="https://gdgpw.pl">gdgpw.pl</a></sub>
</div>
