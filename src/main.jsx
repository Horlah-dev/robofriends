import React from 'react'
import ReactDOM from 'react-dom/client'
//import Card from './card.jsx'
//import CardList from './cardList.jsx'
//import './card.css'
import App from "./container/App.jsx"
import "tachyons"
//import { robots } from "./robots.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
      < App />
  </React.StrictMode>,
)
