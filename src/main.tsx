import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Appのレンダリング
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// ServiceWorkerの登録
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/serviceWorker.js')
      console.log('ServiceWorker登録成功:', registration.scope)
    } catch (error) {
      console.error('ServiceWorker登録失敗:', error)
    }
  })
}