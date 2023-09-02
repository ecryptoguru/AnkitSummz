import Hero from "./components/Hero";
import Demo from "./components/Demo";
import { ThemeContext } from './contexts/theme-context';
import React, { useState } from 'react';

import "./App.css";

const App = () => {
  const [theme, setTheme] = useState('light'); // Use useState within the component

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        
          <main>
            <div className='main'>
              <div className='gradient' />
            </div>

            <div className='app'>
              <Hero />
              <Demo />
            </div>
          </main>
      
      </div>
    </ThemeContext.Provider>
  );
};

export default App;