import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { CssBaseline } from '@mui/material'
import ParentComponent from './ParentComponent'
import { Provider } from 'react-redux'
import { store } from './store';  


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <CssBaseline />
    <App />
    <ParentComponent />
  </Provider>,
)
