# Gitflow App

Prosty projekt demonstracyjny do ćwiczenia **Gitflow** (feature → release → hotfix) na statycznej stronie z formularzem logowania.

## Zawartość
```
gitflow-app/
├─ index.html      # strona główna z linkiem do logowania
├─ login.html      # formularz logowania (demo, bez backendu)
├─ styles.css      # proste style
├─ app.js          # obsługa submit (alert demo)
└─ README.md
```
Numer wersji w pliku `VERSION`.

## Szybki start (lokalnie)
1. Otwórz `index.html` w przeglądarce (serwer nie jest potrzebny).
2. Formularz w `login.html` symuluje logowanie (alert).

## Gitflow (skrót)
- **main** – produkcja, wersje tagowane.
- **develop** – gałąź rozwojowa.
- **feature/*** – nowe funkcje od `develop`, merge `--no-ff`.
- **release/*** – przygotowanie wydania z `develop`, merge do `main` + tag, potem merge do `develop`.
- **hotfix/*** – szybkie poprawki od `main`, tag i sync z `develop`.

## Komendy (przykład)
```bash
# po inicjalizacji i ustawieniu origin:
git checkout -b develop && git push -u origin develop

# feature
git checkout -b feature/login-module
# (zmiany) git add . && git commit -m "feature: login demo"
git checkout develop
git merge --no-ff feature/login-module -m "Merge feature/login-module"
git branch -d feature/login-module && git push

# release
git checkout -b release/v1.0.0
# (README/wersja) git commit -m "docs: README dla v1.0.0" && git push -u origin release/v1.0.0
git checkout main && git pull --ff-only
git merge --no-ff release/v1.0.0 -m "Release v1.0.0"
git tag -a v1.0.0 -m "Pierwsze wydanie" && git push && git push --tags
git checkout develop
git merge --no-ff release/v1.0.0 -m "Sync po wydaniu v1.0.0" && git push
```

## Licencja
MIT
