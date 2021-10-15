import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import Nav from "./components/nav/Nav";
import Main from "./components/Main";
import Translated from './components/translated/Translated';
import { useState } from 'react';

function App() {


  return (
    <Router>
      <div className="App">

        <Nav/>
        
        <Switch>
          {/* pakai exact agar component muncul tepat pada path "/" bukan ada nested path nya lagi */}
          <Route path="/" exact>
            <Main />
          </Route>

          <Route path="/translated">
            <Translated />
          </Route>

          <Route path="/about">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
