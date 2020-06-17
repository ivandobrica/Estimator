import React from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
import Home from '../../routes/home'
import About from '../../routes/about'

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" render={() => (
          <Home />
      )}/>
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
