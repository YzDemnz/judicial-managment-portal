import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const appSource = readFileSync(join(root, 'src', 'App.tsx'), 'utf8')
const versionMatch = appSource.match(/const PORTAL_VERSION = '([^']+)'/)

if (!versionMatch) {
  throw new Error('No se encontro PORTAL_VERSION en src/App.tsx.')
}

writeFileSync(
  join(root, 'public', 'portal-version.json'),
  `${JSON.stringify({ version: versionMatch[1] }, null, 2)}\n`,
)
