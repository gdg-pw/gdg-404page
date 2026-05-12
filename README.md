# GDG On Campus PW — Strona 404

Strona błędu 404 dla domeny **gdgpw.pl**. Wyświetla się automatycznie, gdy użytkownik wpisze domenę lub subdomenę `gdgpw.pl`, która nie jest skonfigurowana w Nginx Proxy Manager.

## Jak to działa

Nginx Proxy Manager pozwala ustawić domyślną stronę błędu dla niezdefiniowanych hostów. Gdy ktoś odwiedzi np. `cos.gdgpw.pl` bez istniejącego wpisu w NPM — ruch trafia do tego kontenera, który serwuje stronę 404.

## Deployment

```bash
docker compose up -d --build
```

Kontener uruchamia się na porcie `8091`. W Nginx Proxy Manager: **New Proxy Host** → Forward Hostname `localhost`, Port `8091`.

> Po każdej zmianie plików w `site/` wymagany rebuild: `docker compose up -d --build`

## Easter eggi

| Akcja | Efekt |
|---|---|
| Kliknij corgiego | Skacze i iskrzy szczęściem |
| Kliknij czerwoną kropkę terminala | Terminal "crashuje" |
| Kliknij żółtą kropkę | Terminal minimalizuje |
| Kliknij zieloną kropkę | Pokazuje dodatkowe logi |
| `↑ ↑ ↓ ↓ ← → ← → B A` | 🎉 |

## Stack

- HTML/CSS/JS
- nginx:alpine
