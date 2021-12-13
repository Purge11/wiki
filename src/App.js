import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Server from './pages/Server';
import Prestige from './pages/Prestige';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/server' component={Server} />
          <Route path='/prestige' component={Prestige} />
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
