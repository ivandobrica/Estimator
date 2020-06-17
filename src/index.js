import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import style from './assets/scss/app.scss'
import App from './components/app'

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById("root")
)
