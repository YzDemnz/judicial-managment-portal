# Judicial Managment Web Beta

Esta pagina funciona como puente de beta:

- presenta la app y descarga el instalador de Windows;
- permite crear cuenta e iniciar sesion con Supabase Auth;
- confirma correos con `?auth=confirm`;
- queda lista para publicarse despues en un dominio real.

## Variables de entorno

Crear un `.env.local` a partir de `.env.example`:

```env
VITE_SUPABASE_URL=https://TU-PROYECTO.supabase.co
VITE_SUPABASE_ANON_KEY=TU_ANON_KEY_PUBLICA
```

## URLs de Supabase Auth

En Supabase, entrar a `Authentication > URL Configuration`.

Para desarrollo local:

- Site URL: `http://127.0.0.1:5173`
- Additional Redirect URLs:
  - `http://127.0.0.1:5173/?auth=confirm`
  - `http://127.0.0.1:5173/**`
  - `judicial-managment://auth/callback`

Cuando la web este publicada, agregar tambien:

- Site URL: `https://TU-DOMINIO.com`
- Additional Redirect URLs:
  - `https://TU-DOMINIO.com/?auth=confirm`
  - `https://TU-DOMINIO.com/**`

## Plantilla de correo recomendada

En `Authentication > Email Templates > Confirm signup`, usar un enlace que mande el `token_hash` a la web:

```html
<a href="{{ .SiteURL }}/?auth=confirm&token_hash={{ .TokenHash }}&type=email">
  Confirmar correo
</a>
```

La pagina valida ese token con Supabase y despues muestra botones para descargar o abrir la app.

## Publicacion

Para publicar la beta:

1. Ejecutar `npm run build`.
2. Subir la carpeta `dist` a Vercel, Netlify, Cloudflare Pages u otro hosting estatico.
3. Configurar en el hosting las mismas variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
4. Actualizar `VITE_AUTH_WEB_URL` en la app de escritorio con el dominio real antes de compilar el instalador.
5. Volver a generar el setup de Windows y reemplazar `public/downloads/Judicial-Managment-Setup-1.0.1.exe`.
