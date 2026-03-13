import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const waitForWindowLoad = () =>
  new Promise((resolve) => {
    if (document.readyState === 'complete') {
      resolve()
      return
    }

    window.addEventListener('load', () => resolve(), { once: true })
  })

const waitForFonts = () => {
  if (!document.fonts || !document.fonts.ready) {
    return Promise.resolve()
  }
  return document.fonts.ready.catch(() => undefined)
}

const revealApp = () => {
  document.body.classList.add('app-ready')
  const loader = document.getElementById('app-loader')
  if (!loader) return

  loader.classList.add('fade-out')
  loader.addEventListener('animationend', () => loader.remove(), { once: true })
}

Promise.all([waitForWindowLoad(), waitForFonts()]).then(() => {
  requestAnimationFrame(() => {
    requestAnimationFrame(revealApp)
  })
})
