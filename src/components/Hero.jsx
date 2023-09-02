import React from "react";

import { logo } from "../assets";
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';

import '../styles/theme-variables.scss';

const Hero  = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'light'}
            />
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          </div>
        </div>
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/ecryptoguru", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Precise Article Summariser <br className='max-md:hidden' />
        <span className='orange_gradient '>AnkitSummz</span>
      </h1>
      <h2 className='desc'>
      Simplify your reading with AnkitSummz - an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
      Just paste your complete website URL and watch the magic unfold before your eyes. 
      </h2>
    </header>
  );
};

export default Hero;