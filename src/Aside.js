import React from 'react';
import { useIntl } from 'react-intl';
import {  FaBars } from 'react-icons/fa';
import {  FaDiscord, FaHammer, FaCat } from 'react-icons/fa';


import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from './assets/bg2.jpg';

const Aside = ({ image, collapsed, toggled, handleToggleSidebar, darkmode, isActive }) => {
  const intl = useIntl();
  return (
    
    <ProSidebar
      image={image ? sidebarBg : false}
     
      isActive={isActive}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      darkmode={darkmode}
    >
       <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {intl.formatMessage({ id: 'NosVoid Wiki' })}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
        
          <MenuItem 
          
          
            icon={<FaTachometerAlt />}
            
            
          >
             <a href='./'>
            
            {intl.formatMessage({ id: 'dashboard' })}
            </a>
          </MenuItem>
          
          
          <MenuItem icon={<FaGem />}><a href='rules'>  {intl.formatMessage({ id: 'Rules' })}  </a></MenuItem>
         
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">2</span>}
            title={intl.formatMessage({ id: 'Important' })}
            icon={<FaRegLaughWink />}
          >
            <MenuItem> <a href='server'>{intl.formatMessage({ id: 'Server' })}</a> </MenuItem>
            <MenuItem><a href='schedule'>{intl.formatMessage({ id: 'Schedule' })}</a> </MenuItem>
          </SubMenu>
          <SubMenu
            suffix={<span className="badge yellow">2</span>}
            title={intl.formatMessage({ id: 'Recommended' })}
            icon={<FaHeart />}
          >
            <MenuItem  suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}><a href='CustomFeatures'>{intl.formatMessage({ id: 'Features ⭐' })}</a> </MenuItem>
            <MenuItem  suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          ><a href='winter'>{intl.formatMessage({ id: 'Christmas 🎅' })} </a>
            </MenuItem>
           
          
           
          </SubMenu>
          <SubMenu
            suffix={<span className="badge yellow">2</span>}
            title={intl.formatMessage({ id: 'Crew' })}
            icon={<FaCat />}
          >
            <MenuItem> <a href='teammembers'>{intl.formatMessage({ id: 'Team Members' })} </a></MenuItem>
            <MenuItem><a href='contentCreators'>{intl.formatMessage({ id: 'Creators' })} </a></MenuItem>
           
          </SubMenu>
          <SubMenu title={intl.formatMessage({ id: 'Guides' })} icon={<FaList />}
             suffix={<span className="badge yellow">24</span>}>
          <MenuItem> <a href='server'>{intl.formatMessage({ id: 'Server' })}</a> </MenuItem>
          <MenuItem><a href='rules'>  {intl.formatMessage({ id: 'Rules' })}  </a></MenuItem>
            <MenuItem> <a href='teammembers'>{intl.formatMessage({ id: 'Team Members' })} </a></MenuItem>
            <MenuItem><a href='schedule'>{intl.formatMessage({ id: 'Schedule' })}</a> </MenuItem>
          <MenuItem  suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}><a href='CustomFeatures'>{intl.formatMessage({ id: 'Features ⭐' })}</a> </MenuItem>
            <MenuItem><a href='contentCreators'>{intl.formatMessage({ id: 'Creators' })} </a></MenuItem>
            <MenuItem  suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}><a href='winter'>{intl.formatMessage({ id: 'Christmas 🎅' })} </a></MenuItem>
            <MenuItem><a href='act4'>{intl.formatMessage({ id: 'Act4' })} </a> </MenuItem>
            <MenuItem><a href='books'>{intl.formatMessage({ id: 'Books' })} </a> </MenuItem>
            <MenuItem><a href='fish'>{intl.formatMessage({ id: 'Fish' })} </a> </MenuItem>
            <MenuItem><a href='box'>{intl.formatMessage({ id: 'Boxes' })}  </a></MenuItem>
            <MenuItem><a href='perfection'>{intl.formatMessage({ id: 'Perfection' })}</a>  </MenuItem>
            <MenuItem><a href='prestige'>{intl.formatMessage({ id: 'Prestige' })}</a> </MenuItem>
            <MenuItem><a href='resistance'>{intl.formatMessage({ id: 'Resistance' })} </a> </MenuItem>
            <MenuItem><a href='shell'>{intl.formatMessage({ id: 'Shell' })} </a> </MenuItem>
            <MenuItem><a href='sp'>{intl.formatMessage({ id: 'SP' })}  </a></MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'Tattos/Runes' })} `}>
              <MenuItem><a href='rune'>{intl.formatMessage({ id: 'Rune' })}</a> </MenuItem>
              <MenuItem><a href='tatto'>{intl.formatMessage({ id: 'Tattos' })}</a> </MenuItem>
              </SubMenu>
            <SubMenu title={`${intl.formatMessage({ id: 'Equipment' })} `}>
              <MenuItem><a href='accesory'>{intl.formatMessage({ id: 'Accesory' })} </a></MenuItem>
              <MenuItem><a href='badge'>{intl.formatMessage({ id: 'Badge' })} </a></MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'Equipment' })} `}>
                <MenuItem><a href='c50'>{intl.formatMessage({ id: 'C50' })} </a> </MenuItem>
                <MenuItem><a href='c55'>{intl.formatMessage({ id: 'C55' })}  </a></MenuItem>
                <MenuItem><a href='faires'>{intl.formatMessage({ id: 'Faires' })}</a> </MenuItem>
                <MenuItem><a href='Equipment'>{intl.formatMessage({ id: 'Equipment' })}</a> </MenuItem>
                
                
            </SubMenu>
          </SubMenu>
          </SubMenu>
          <SubMenu title={intl.formatMessage({ id: 'In work...' })} icon={<FaHammer />}
               suffix={<span className="badge yellow">5</span>}
              >
                <MenuItem><a href='titles'>{intl.formatMessage({ id: 'Titles' })} </a> </MenuItem>
              <MenuItem><a href='wings'>{intl.formatMessage({ id: 'Wings' })} </a> </MenuItem>
              <MenuItem><a href='psp'>{intl.formatMessage({ id: 'Partner cards' })} </a> </MenuItem>
              <MenuItem><a href='pets'>{intl.formatMessage({ id: 'Pets' })} </a> </MenuItem>
              <MenuItem><a href='raids'>{intl.formatMessage({ id: 'Raids' })} </a> </MenuItem>
              </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://discord.com/invite/qd2yrzg"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaDiscord />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {intl.formatMessage({ id: 'Discord' })}
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
