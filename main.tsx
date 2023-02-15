import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App'
import  {GlobalStyles}  from './src/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>,
)
