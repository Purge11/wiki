import React from 'react';
import { useIntl } from 'react-intl';
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
  useIntl();
  return (
    <main className='main '>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
     
      

      <footer>
      
      </footer>
        
    </main>
    
  );
};

export default Main;
