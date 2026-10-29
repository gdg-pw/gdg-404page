# Strona 404 GDG on Campus PW

Strona błędu dla domeny **gdgpw.pl**. Pokazuje się, gdy ktoś wejdzie na subdomenę `gdgpw.pl`, której nie ma w Nginx Proxy Manager, albo na nieistniejącą ścieżkę (np. `cos.gdgpw.pl/jakas/strona`). Corgi z siatką na bugi chodzi po terminalu, a terminal pokazuje, jakiego adresu ktoś szukał.

Czysty HTML, CSS i JS, bez buildów i zależności. Wygląd i układ plików jak w [gdg-jam-jar](https://github.com/gdg-pw/gdg-jam-jar).

## Jak to działa

Nginx Proxy Manager kieruje ruch z nieznanych hostów do tego kontenera. Tutejszy `nginx.conf` odpowiada stroną z `index.html` na każdą ścieżkę:

- `/` zwraca stronę ze statusem 200 (na tym przechodzi sprawdzanie kontenera),
- każda inna nieistniejąca ścieżka zwraca tę samą stronę ze statusem 404.

Dlatego w `index.html` wszystkie ścieżki do plików zaczynają się od `/` (`/css/...`, `/assets/...`). Bez tego strona pod `/a/b/c` szukałaby stylów w `/a/b/css/` i rozsypałaby się.

## Uruchomienie

Ze względu na ścieżki od `/` strona potrzebuje serwera (dwuklik na `index.html` nie załaduje stylów):

```bash
python3 -m http.server 8000
```

i wejdź na http://localhost:8000. Prosty serwer Pythona nie zrobi przekierowania z nieznanych ścieżek. Żeby sprawdzić je jak na serwerze, użyj Dockera: `docker compose up --build` i np. http://localhost:8091/cokolwiek.

## Gdzie co zmieniać

| Co                                        | Plik                 |
|-------------------------------------------|----------------------|
| Teksty, terminal, przycisk, socials       | `index.html`         |
| Kolory, czcionki, zaokrąglenia            | `css/variables.css`  |
| Terminal, corgi, tło, impreza (Konami)    | `css/effects.css`    |
| Chodzenie i kliknięcie corgiego           | `js/corgi.js`        |
| Kropki terminala, wyświetlany adres       | `js/terminal.js`     |
| Symbole w tle, Konami                     | `js/effects.js`      |
| Corgi, logo, favicon                      | `assets/`            |

Czcionki to Google Sans Flex (tekst) i Google Sans Code (terminal) z Google Fonts.

## Easter eggi

| Akcja                             | Efekt                                  |
|-----------------------------------|----------------------------------------|
| Kliknij corgiego                  | Skacze i iskrzy szczęściem             |
| Czerwona kropka terminala         | Terminal „crashuje”                    |
| Żółta kropka                      | Terminal się minimalizuje              |
| Zielona kropka                    | Dodatkowe logi                         |
| `↑ ↑ ↓ ↓ ← → ← → B A`             | Impreza: kolory, szybkie tło, corgi biega |

## Deploy

Kontener z `Dockerfile` (nginx z naszym `nginx.conf`), port `8091`. Po zmianie plików trzeba przebudować obraz: `docker compose up -d --build`.

Każdy nowy plik w repo trafia na stronę, chyba że jest wpisany w `.dockerignore`. Portu i nazwy kontenera w `docker-compose.yml` nie zmieniaj, opiera się na nich konfiguracja serwera GDG.
