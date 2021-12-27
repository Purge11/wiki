import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import {  FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  const intl = useIntl();
  return (
    <main className='main'>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
     
      <div className="block ">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#8947b1"
        />
        <span> {intl.formatMessage({ id: 'collapsed' })}</span>
      </div>
     
      <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleImageChange}
          checked={image}
          onColor="#219de9"
          offColor="#8947b1"
        />
        <span> {intl.formatMessage({ id: 'image' })}</span>
      </div>
      <div className="block">
      <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleRtlChange}
          checked={rtl}
          onColor="#219de9"
          offColor="#8947b1"
        />
        <span> {intl.formatMessage({ id: 'Dark Mode' })}</span>
      </div>

      <footer>
      
      </footer>
        
    </main>
    
  );
};

export default Main;
