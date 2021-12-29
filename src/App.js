import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Aside from './Aside';
import messages from './messages';
import './styles/App.scss'; 
import './TableColor.scss';

function App() {
  const [locale, setLocale] = useState('en');

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Aside setLocale={setLocale} />
      
    </IntlProvider>
  );
}

export default App;
