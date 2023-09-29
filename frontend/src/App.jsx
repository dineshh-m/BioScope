import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, Home, Search } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/search">
                  <Search />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  )
}

export default App;
