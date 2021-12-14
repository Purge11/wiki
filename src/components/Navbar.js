import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.scss';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar navbar-expand-lg navbar-light bg-nosvoid'>
          <Link to='#' className='ownmenu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />      
          </Link>
          <div className="owncenter">
         <h5>Nosvoid Wiki</h5>
          </div>
          <div className="ownright">
          <a href='https://discord.gg/qd2yrzg ' className='discord'>
          <SiIcons.SiDiscord/>     
          </a>
          </div>
          <div className="right1">
          <a href='https://nosvoid.com/' className='discord'>
          <img src="asset/Logo_color.png" alt="" />
          </a>
        </div>
        </div>
        <nav className={sidebar ? 'ownnav-menu active' : 'ownnav-menu'}>
          <ul className='ownnav-menu-items' onClick={showSidebar}>
            <li className='ownnavbar-toggle'>
              <Link to='#' className='ownmenu-bars'>
              <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <hr/>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>                  
                  </Link>
                  <hr/>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
