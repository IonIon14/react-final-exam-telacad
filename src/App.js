import React from 'react';
import './App.css';
import Home from './pages/Home/Home/Home.jsx';
import Dashboard from './pages/Home/Dashboard/Dashboard.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/people' component={Dashboard}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
