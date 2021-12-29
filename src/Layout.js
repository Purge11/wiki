import React, { useState } from 'react';
import Aside from './Aside';
import Main from './Main';
import Rules from './pages/Rules';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
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
import Perfection from './pages/Perfection';
import Prestige from './pages/Prestige';
import Resistance from './pages/Resistance';
import Rune from './pages/Rune';
import Server from './pages/Server';
import Shell from './pages/Shell';
import SP from './pages/SP';
import Tatto from './pages/Tatto';
import Wings from './pages/Wings';
import TeamMembers from './pages/TeamMembers';
import Schedule from './pages/Schedule';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './pages/Content';
import Winter from './pages/Winter';
import Titles from './pages/Titles';
import Pets from './pages/Pets';
import Raids from './pages/Raids';
import Psp from './pages/Psp';

function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
   

    <div className={`app ${rtl ? 'active' : ''} ${toggled ? 'toggled' : ''}`}>
     
      <Aside
        image={image}
        collapsed={collapsed}
        rtl={rtl}      
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      
      <Main
        image={image}
        toggled={toggled}
        collapsed={collapsed}
        rtl={rtl}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        handleRtlChange={handleRtlChange}
        handleImageChange={handleImageChange}
      />
      
      <Router>
       
       <Switch>
       <Route path='/Rules' exact component={Rules} />
       <Route path='/' exact component={Home} />
       <Route path='/teammembers' component={TeamMembers} />
          <Route path='/contentCreators' exact component={Content} />
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
          <Route path='/perfection' component={Perfection} />
          <Route path='/prestige' component={Prestige} />
          <Route path='/resistance' component={Resistance} />
          <Route path='/rune' component={Rune} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/server' component={Server} />
          <Route path='/shell' component={Shell} />
          <Route path='/sp' component={SP} />
          <Route path='/tatto' component={Tatto} />
          <Route path='/titles' component={Titles} />
          <Route path='/wings' component={Wings} />
          <Route path='/winter' component={Winter} />
          <Route path='/pets' component={Pets} />
          <Route path='/psp' component={Psp} />
          <Route path='/raids' component={Raids} />
       </Switch>   
     </Router>
    </div>
    
  );
}

export default Layout;
