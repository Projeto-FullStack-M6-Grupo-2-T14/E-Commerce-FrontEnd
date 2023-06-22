import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@styles/_globalstyles.sass'
import '@styles/_typography.sass'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)