import { StrictMode, useEffect, useState } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const PASSWORD = 'JB2025'

const PasswordGate = () => {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    const ask = () => {
      const input = window.prompt('Bitte Passwort eingeben:')
      if (input === null) {
        ask()
        return
      }
      if (input === PASSWORD) {
        setAllowed(true)
      } else {
        window.alert('Falsches Passwort. Bitte erneut versuchen.')
        ask()
      }
    }

    ask()
  }, [])

  if (!allowed) return null
  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PasswordGate />
  </StrictMode>,
)
