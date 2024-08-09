import Image from "next/image";
import Head from 'next/head';
import LogoIcon from "./LogoIcon";

import React from 'react';

const Home: React.FC = ()=> {
    
const logos = [
    'python', 'java', 'javascript', 'google-cloud', 'postgresql', 'firebase', 
    'django', 'spring', 'nextjs-icon', 'react', 'express', 'flutter', 'sap', 
    'godot', 'unity', 'figma', 'vue', 'laravel'
  ];

  return (
    
  
    <div className="slide-up text-start font-thin sm:text-xl w-full items-left grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          {/* <p className="text-xl">Hello! I'm</p> */}
          <div id="animateMe" className=" font-black uppercase text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-primary-cream via-light-cream to-primary-cream text-transparent bg-clip-text animate-gradient grid grid-cols-1">
            Inaya
            <span>Rahmanisa</span>
            {/* <span className='font-thin'>software developer & designer</span> */}
            </div>
          <div className='font-thin text-xl md:text-2xl uppercase block bg-gradient-to-r from-primary-cream via-light-cream to-primary-cream text-transparent bg-clip-text animate-gradient'>
            <p>
            software developer 
            </p>
            <p>
            & ui/ux designer
            </p>
          </div>

        </div>
        <div className="space-y-10">
          <p className="text-sm">
            A <span className="font-bold">software developer & designer</span>, currently in my final year studying Computer Science at University of Indonesia. I create websites, games, occasionally mobile apps, and design them too. I am currently delving into the field of machine learning, in which I constantly seek for new knowledge and experience to enhance my expertise.
          </p>
          <div className="min-w-full">
            <p className="text-sm font-thin">Languages & frameworks I have worked with</p>
            <div className="items-center justify-between text-between space-x-1 sm:space-x-3 space-y-1">
              {logos.map((logo) => (
                <LogoIcon key={logo} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>

  );
}
export default Home;
