import projectdata from '@/public/json/projects_wnm.json'
import gameproject from '@/public/json/projects_gd.json'
import designproject from '@/public/json/project_design.json'
import FlipCard from "@/components/FlipCard";
import React from 'react';

const sections = [
  { title: "WEB/MOBILE", projects: projectdata.projects },
  { title: "GAMEDEV", projects: gameproject.projects },
  { title: "DESIGNS", projects: designproject.projects },
];

const Works: React.FC = ()=> {
  return (
    <div className="slide-up">
      {sections.map((section) => (
        <div key={section.title}>
          <div className="flex flex-row items-center w-full">
            <h1 className="text-primary-black text-3xl sm:text-6xl w-min font-thin py-10">{section.title}</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-x-10">
            {section.projects.map((project: any, index: any) => (
              <FlipCard key={index} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Works;
