import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App'
import AuthProvider from './contexts/AuthProvider/AuthProvider'
import ThemeProvider from './contexts/ThemeProvider/ThemeProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
        <Toaster></Toaster>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
