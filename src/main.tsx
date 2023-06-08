import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style/globalStyle.sass'
import './style/typography.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
