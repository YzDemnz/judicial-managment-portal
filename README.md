# Judicial Managment · Portal

Portal web de acceso y distribución de Judicial Managment, desarrollado con React, TypeScript y Vite.

## Funciones

- Presentación del producto y acceso a la descarga de escritorio.
- Registro e inicio de sesión.
- Retorno de confirmación de correo mediante `?auth=confirm`.
- Enlaces para descargar o abrir la aplicación de escritorio.

## Desarrollo local

```powershell
npm ci
npm run dev
```

La aplicación se sirve por defecto en `http://127.0.0.1:5173/`.

Copiar `.env.example` a `.env.local` y configurar el backend del entorno:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-public-anon-key
```

La clave pública del cliente depende de las políticas del backend. No utilizar credenciales de administración ni publicar `.env.local`.

## Construcción

`npm run build` sincroniza la versión del portal, comprueba TypeScript y genera la aplicación estática con su fallback de rutas. `npm run preview` sirve la construcción local. El procedimiento de publicación se documenta en [BETA_DEPLOYMENT.md](BETA_DEPLOYMENT.md).

## Estructura y alcance

`src/App.tsx` contiene la interfaz; `src/lib/` la conexión a servicios; `scripts/` las tareas de construcción y distribución. Este repositorio corresponde al portal, separado de la aplicación jurídica y del cliente móvil. Autenticación, retornos y descargas requieren una configuración de despliegue válida.

[GitHub del desarrollador](https://github.com/YzDemnz) · [CV y portafolio](https://yzdemnz.github.io/cv-portafolio/)
