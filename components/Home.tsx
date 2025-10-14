import Image from "next/image";
import Head from 'next/head';
import LogoIcon from "./LogoIcon";

import React from 'react';

const Home: React.FC = ()=> {
    
const logos = [
    'python', 'pytorch','java', 'javascript', 'google-cloud', 'postgresql', 'firebase', 
    'django', 'spring', 'nextjs-icon', 'react', 'express', 'flutter', 'sap', 
    'godot', 'unity', 'figma', 'vue', 'laravel'
  ];

  return (
    
    
    <div className="slide-up text-start font-extralight sm:text-xl w-full items-left grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex items-center justify-center justify-center">
          {/* <p className="text-xl">Hello! I'm</p> */}
          <div className="block">
            <div id="animateMe" className="font-black uppercase text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-primary-cream via-light-cream to-primary-cream  bg-clip-text animate-gradient grid grid-cols-1 text-primary-black">
            Inaya
            <span>Rahmanisa</span>
            {/* <span className='font-thin'>software developer & designer</span> */}
            </div>
          <div className='mt-4 font-light text-xl md:text-2xl uppercase block bg-gradient-to-r from-primary-cream via-light-cream to-primary-cream  bg-clip-text animate-gradient'>
            <p>
            AI Research 
            </p>
            <p>
            
            </p>
          </div>
          </div>
          

        </div>
        <div className="space-y-10">
          <p className="text-sm">

            {/* A <span className="font-bold">software developer & designer</span>, currently in my final year studying Computer Science at University of Indonesia. I create websites, games, occasionally mobile apps, and design them too. I am currently delving into the field of machine learning, in which I constantly seek for new knowledge and experience to enhance my expertise. */}
            <span className="font-bold">AI researcher</span> exploring methods to make large language models more understandable and applicable to real-world problems. Currently focused on neural computation, with previous work in natural language processing (NLP) on neuron-level interpretability, developing techniques to enhance the transparency and reliability of large language models.
            <br />
            <br />
            Alongside research, I have a strong background in <span className="font-bold">software development, game development, and DevOps.</span> I love building websites, games, tools, experiments, and finding creative ways to bring ideas to life through code.        </p>
          <div className="min-w-full">
            <p className="text-sm font-light">Languages & frameworks I have worked with: </p>
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
