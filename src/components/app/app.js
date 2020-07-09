import React from 'react'
import { Route } from 'react-router-dom'

import Form from '../Form'

function App() {
  return (
    <div className="app">
      <div className="svgIcon">
        <svg className="plus" xmlns="http://www.w3.org/2000/svg" version="1.0" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
            <path d="M34 197 c-3 -8 -4 -47 -2 -88 l3 -74 85 0 85 0 0 85 0 85 -83 3 c-63 2 -84 0 -88 -11z m156 -77 l0 -70 -70 0 -70 0 0 70 0 70 70 0 70 0 0 -70z"/>
            <path d="M110 150 c0 -13 -7 -20 -20 -20 -11 0 -20 -4 -20 -10 0 -5 9 -10 20 -10 13 0 20 -7 20 -20 0 -11 5 -20 10 -20 6 0 10 9 10 20 0 13 7 20 20 20 11 0 20 5 20 10 0 6 -9 10 -20 10 -13 0 -20 7 -20 20 0 11 -4 20 -10 20 -5 0 -10 -9 -10 -20z"/>
          </g>
        </svg>

        <svg className="puta" xmlns="http://www.w3.org/2000/svg" version="1.0" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
            <path d="M30 120 l0 -90 90 0 90 0 0 90 0 90 -90 0 -90 0 0 -90z m160 0 l0 -70 -70 0 -70 0 0 70 0 70 70 0 70 0 0 -70z"/>
            <path d="M92 140 c10 -16 10 -24 0 -40 -13 -22 -3 -27 16 -8 9 9 15 9 24 0 19 -19 29 -14 16 8 -10 16 -10 24 0 40 13 22 3 27 -16 8 -9 -9 -15 -9 -24 0 -19 19 -29 14 -16 -8z"/>
          </g>
        </svg>

        <svg className="minus" xmlns="http://www.w3.org/2000/svg" version="1.0" width="32.000000pt" height="32.000000pt" viewBox="0 0 32.000000 32.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
            <path d="M54 257 c-2 -7 -3 -56 -2 -108 l3 -94 105 0 105 0 0 105 0 105 -103 3 c-79 2 -104 0 -108 -11z m196 -97 l0 -90 -90 0 -90 0 0 90 0 90 90 0 90 0 0 -90z"/>
            <path d="M110 160 c0 -5 23 -10 50 -10 28 0 50 5 50 10 0 6 -22 10 -50 10 -27 0 -50 -4 -50 -10z"/>
          </g>
        </svg>

        <svg className="kroz" xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
            <path d="M56 444 c-24 -23 -24 -365 0 -388 23 -24 365 -24 388 0 24 23 24 365 0 388 -23 24 -365 24 -388 0z m379 -194 l0 -185 -185 0 -185 0 -3 175 c-1 96 0 180 3 187 3 11 44 13 187 11 l183 -3 0 -185z"/>
            <path d="M234 359 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16 -11z"/>
            <path d="M110 250 c0 -6 53 -10 140 -10 87 0 140 4 140 10 0 6 -53 10 -140 10 -87 0 -140 -4 -140 -10z"/>
            <path d="M234 159 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16 -11z"/>
          </g>
        </svg>

        <svg className="jednako" xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
            <path d="M35 457 c-3 -7 -4 -105 -3 -217 l3 -205 215 0 215 0 0 215 0 215 -213 3 c-167 2 -214 0 -217 -11z m415 -207 l0 -200 -200 0 -200 0 0 200 0 200 200 0 200 0 0 -200z"/>
            <path d="M120 290 c0 -6 50 -10 130 -10 80 0 130 4 130 10 0 6 -50 10 -130 10 -80 0 -130 -4 -130 -10z"/>
            <path d="M120 210 c0 -6 50 -10 130 -10 80 0 130 4 130 10 0 6 -50 10 -130 10 -80 0 -130 -4 -130 -10z"/>
          </g>
        </svg>

      </div>

      <h1>Estimator</h1>
      <Form />
    </div>
  );
}

export default App;
