import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const distDir = join(process.cwd(), 'dist')
const indexPath = join(distDir, 'index.html')
const fallbackPath = join(distDir, '404.html')
const publicRoutes = [
  'trabajo',
  'trabajo/expedientes',
  'trabajo/despachos',
  'trabajo/calendario',
  'seguridad',
  'como-instalar',
  'movil',
  'descargas',
  'acceso',
  'ia-local',
  'privacidad',
  'terminos',
  'auth/confirm',
  'recuperar',
  'respaldo',
]

if (existsSync(indexPath)) {
  copyFileSync(indexPath, fallbackPath)

  for (const route of publicRoutes) {
    const routeDir = join(distDir, ...route.split('/'))
    mkdirSync(routeDir, { recursive: true })
    copyFileSync(indexPath, join(routeDir, 'index.html'))
  }
}
