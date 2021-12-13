import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CustomFeatures from './pages/CustomFeatures';
import Accesory from './pages/Accesory';
import Act4 from './pages/Act4';
import Badge from './pages/Badge';
import Books from './pages/Books';
import Box from './pages/Box';
import C50 from './pages/C50';
import C55 from './pages/C55';
import Equipment from './pages/Equipment';
import Faires from './pages/Faires';
import Fish from './pages/Fish';
import Maps from './pages/Maps';
import Perfection from './pages/Perfection';
import Prestige from './pages/Prestige';
import Resistance from './pages/Resistance';
import Rune from './pages/Rune';
import Server from './pages/Server';
import Shell from './pages/Shell';
import SP from './pages/SP';
import Tatto from './pages/Tatto';
import Wings from './pages/Wings';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/customFeatures' component={CustomFeatures} />
          <Route path='/accesory' component={Accesory} />
          <Route path='/act4' component={Act4} />
          <Route path='/badge' component={Badge} />
          <Route path='/books' component={Books} />
          <Route path='/box' component={Box} />
          <Route path='/c50' component={C50} />
          <Route path='/c55' component={C55} />
          <Route path='/equipment' component={Equipment} />
          <Route path='/faires' component={Faires} />
          <Route path='/fish' component={Fish} />
          <Route path='/maps' component={Maps} />
          <Route path='/perfection' component={Perfection} />
          <Route path='/prestige' component={Prestige} />
          <Route path='/resistance' component={Resistance} />
          <Route path='/rune' component={Rune} />
          <Route path='/server' component={Server} />
          <Route path='/shell' component={Shell} />
          <Route path='/sp' component={SP} />
          <Route path='/tatto' component={Tatto} />
          <Route path='/wings' component={Wings} />
        </Switch>   
      </Router>
    </>
  );
}

export default App;
