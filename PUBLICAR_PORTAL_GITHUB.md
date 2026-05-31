# Publicar Judicial Managment en GitHub Pages

Este portal ya esta preparado para GitHub Pages con:

- `vite.config.ts` usando la ruta del repositorio cuando corre en GitHub Actions.
- `.github/workflows/deploy-pages.yml` para construir y publicar `dist`.
- `scripts/create-spa-fallback.mjs` para crear `404.html` y permitir rutas como `/admin` y `/auth/confirm`.
- Enlaces de confirmacion de correo usando la URL real publicada, no `localhost`.

## Pasos para publicar

1. Crea un repositorio en GitHub para el portal, por ejemplo `judicial-managment-portal`.
2. Sube esta carpeta completa al repositorio.
3. En GitHub, abre `Settings > Pages` y elige `GitHub Actions` como fuente.
4. Ejecuta el workflow `Deploy portal to GitHub Pages`.
5. Copia la URL final de Pages, por ejemplo:
   `https://TU_USUARIO.github.io/judicial-managment-portal/`
6. En Supabase, agrega estas URLs en `Authentication > URL Configuration`:
   - Site URL: `https://TU_USUARIO.github.io/judicial-managment-portal/`
   - Redirect URL: `https://TU_USUARIO.github.io/judicial-managment-portal/?auth=confirm`
   - Redirect URL: `https://TU_USUARIO.github.io/judicial-managment-portal/**`

## Mac

La app de Mac no se puede compilar desde Windows con Electron Builder. La carpeta de la app ya incluye:

- `npm run desktop:build:mac`
- `.github/workflows/build-mac.yml`

Ese workflow debe ejecutarse en GitHub porque usa `macos-latest`. Cuando genere el `.dmg`, copia el archivo a:

`public/downloads/Judicial-Managment-mac-universal.dmg`

Despues vuelve a publicar el portal para activar la descarga de Mac.
