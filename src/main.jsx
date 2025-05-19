import { StrictMode } from 'react'
import ReactDOM  from 'react-dom/client'
import './style.css'
import { HeroesApp } from './HeroesApp'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HeroesApp />
  </BrowserRouter>

);