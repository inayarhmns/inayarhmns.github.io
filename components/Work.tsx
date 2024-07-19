import Image from "next/image";
import Head from 'next/head';
import LogoIcon from "./LogoIcon";
import Navbar from "@/components/navbar";
import projectdata from '@/public/json/projects_wnm.json'
import gameproject from '@/public/json/projects_gd.json'
import designproject from '@/public/json/project_design.json'
import FlipCard from "@/components/FlipCard";
import React from 'react';

const Works: React.FC = ()=> {
    
  return (
    <div className="slide-up">
    <div className="flex flex-row items-center w-full">
    <h1 className="text-primary-cream text-3xl sm:text-6xl w-min font-thin py-10 gap-x-10">WEB & MOBDEV</h1>
    {/* <hr className="flex-grow border-t-1 border-primary-cream mx-4" /> */}

  </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projectdata.projects.map((project: any, index: any) => (
    <FlipCard key={index} project={project} />
  ))}
    </div>
  <div className="flex flex-row items-center w-full">
  <h1 className="text-primary-cream text-3xl sm:text-6xl w-min font-thin py-10">GAMEDEV</h1>
  </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-x-10 ">
      {gameproject.projects.map((project: any, index: any) => (
    <FlipCard key={index} project={project} />
  ))}
    </div>
    <div className="flex flex-row items-center w-full">
    <h1 className="text-primary-cream text-3xl sm:text-6xl w-min font-thin py-10">DESIGNS</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-x-10">
      {designproject.projects.map((project: any, index: any) => (
    <FlipCard key={index} project={project} />
  ))}
    </div>
  </div>

  );
}
export default Works;
