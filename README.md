# Judicial Managment Web

Pagina web de beta para Judicial Managment.

Incluye:

- pagina de descarga del instalador Windows;
- registro e inicio de sesion con Supabase Auth;
- confirmacion de correo con `?auth=confirm`;
- botones para descargar o abrir la app de escritorio.

## Desarrollo local

```powershell
npm install
npm run dev
```

Abrir `http://127.0.0.1:5173/`.

## Entorno

Copiar `.env.example` a `.env.local` y poner las credenciales publicas de Supabase:

```env
VITE_SUPABASE_URL=https://TU-PROYECTO.supabase.co
VITE_SUPABASE_ANON_KEY=TU_ANON_KEY_PUBLICA
```

## Produccion beta

Ver [BETA_DEPLOYMENT.md](./BETA_DEPLOYMENT.md).
