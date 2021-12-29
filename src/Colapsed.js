import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
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
     
      
        
    </main>
    
  );
};

export default Main;
