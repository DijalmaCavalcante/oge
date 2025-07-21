import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const [,, componentName, baseFolder] = process.argv

if (!componentName || !baseFolder) {
  console.error('Uso: node createcomponent.js [nomeDoComponente] [pastaBase]')
  process.exit(1)
}

const componentDir = path.join(__dirname, baseFolder, componentName)
const indexFile = path.join(componentDir, 'index.jsx')
const styleFile = path.join(componentDir, 'style.css')

fs.mkdirSync(componentDir, { recursive: true })

const jsxContent = `import './style.css'

export default function ${componentName} () {
  return (
    <div>

    </div>
  )
}
`

fs.writeFileSync(indexFile, jsxContent)
fs.writeFileSync(styleFile, '')

console.log(`Componente "${componentName}" criado em ${componentDir}`)
