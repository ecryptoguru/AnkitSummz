import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

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
        OpenAI Article Summariser <br className='max-md:hidden' />
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