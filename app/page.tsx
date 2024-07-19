"use client";

import React, { useEffect } from 'react';
import Navbar from "@/components/navbar";
import LogoIcon from "@/components/LogoIcon";
import anime from "animejs";

const logos = [
  'python', 'java', 'javascript', 'google-cloud', 'postgresql', 'firebase', 
  'django', 'spring', 'nextjs-icon', 'react', 'express', 'flutter', 'sap', 
  'godot', 'unity', 'figma', 'vue'
];

const Home: React.FC = () => {
  // useEffect(() => {
  //   async function animateText() {
  //     const { default: Letterize } = await import('letterizejs');

  //     const test = new Letterize({
  //       targets: "#animateMe"
  //     });

  //     anime.timeline({
  //       targets: test.listAll,
  //       delay: anime.stagger(50),
  //       loop: true
  //     })
  //     .add({
  //       translateY: 20
  //     })
  //     .add({
  //       translateY: 0
  //     });
  //   }

  //   animateText();
  // }, []);

  // useEffect(() => {
  //   // const Letterize = require('letterizejs'); // Dynamically import to avoid SSR issues

  //   const test = new Letterize({
  //     targets: "#animateMe"
  //   });

  //   const animation = anime.timeline({
  //     targets: test.listAll,
  //     delay: anime.stagger(50),
  //     loop: true
  //   });

  //   animation
  //     .add({
  //       translateY: 10
  //     })
  //     .add({
  //       translateY: 0
  //     });

   
  // }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <main className="text-primary-cream flex min-h-fit sm:min-h-screen flex-col justify-center px-8 md:px-20 mb-48 sm:mb-0 py-10 sm:py-20">
      <div className="text-start font-thin sm:text-xl w-full items-left grid grid-cols-1 sm:grid-cols-2 gap-10">
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
            A <span className="font-bold">software developer & designer</span>, currently in my final year studying Computer Science at University of Indonesia. I create websites, games, occasionally mobile apps, and design them too. I am delving into the field of machine learning, in which I constantly seek for new knowledge and experience to enhance my expertise.
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
    </main>
  );
};

export default Home;
