import Image from "next/image";
import Head from 'next/head';
import LogoIcon from "./LogoIcon";

interface FlipCardProps {
  project: {
    name: string;
    link: string;
    description: string;
    type: string;
    role: string[];
    tech: string[];
    developer: string;
    picture: string;
  };
}
const FlipCard: React.FC<FlipCardProps> = ({ project }) => {
  return (
  
    <div>
        <div className="z-10 flip-card text-primary-black">
          <div className="flip-card-inner">
              <div className="flip-card-front bg-cover relative">
              <Image src={project.picture} alt={project.name} fill priority unoptimized style={{objectFit:"cover"}} className="rounded-lg" />
                <div className="absolute top-2 left-2 bg-primary-black/70 text-white text-xs font-medium px-2 py-1 rounded-md">
                  {project.type === "GD"
                    ? "Gamedev"
                    : project.type === "W&M"
                    ? "Web/Mobile"
                    : project.type === "P"
                    ? "Publications"
                    : project.type === "D"
                    ? "Designs"
                    : ""}
                </div>
                <div className="absolute inset-0 rounded-lg" style={{background: "linear-gradient(180deg, rgba(119, 121, 118, 0) -3.2%, rgba(150, 153, 150, 0.2) 72.99%, rgba(183, 187, 183, 0.9) 81.24%, rgba(170, 179, 170, 0.95) 90.86%, #6e786fff 100%)"}}>
                </div> 
                <div className="mb-4 flex flex-col justify-end absolute inset-0 ">
                  <p className="uppercase text-lg font-light truncate" style={{letterSpacing: "0.49em"}}>{project.name}</p>
                </div>
              
                  
              </div>
              <div className="flip-card-back bg-primary-black text-primary-cream">
                <div className="flex flex-col text-sm font-thin justify-start h-full p-2">
                <div className="flex flex-row w-full justify-between">
                  <div className="text-primary-green w-fit border-1 px-2 border-primary-cream flex gap-2 items-center rounded-lg">
                  {project.developer === 'solo' ? (
                    <i className={`icon-[mdi--person]`}></i>
                  ) : (
                    <i className={`icon-[mdi--people-group]`}></i>
                  )}
                    <p className="capitalize">{project.developer}</p>
                  </div>
                  <p>|</p>
                  <div className="text-primary-green px-2  flex gap-2 items-center justify-end text-right rounded-lg">
                    <p>Role: </p>
                    {project.role.map((role, index) => (
                    <p key={index} className="border-2 border-primary-green px-1 rounded-lg">
                      {role}
                    </p>
                  ))}


                  </div>
                </div>
                  <div className="flex flex-col justify-center items-center text-center w-full h-full gap-y-4">
                    <p className="h-24 text-center overflow-y-auto">
                      {project.description}
                    </p>
                    <a className="square ttf-cubic w-fit 1 justify-center items-center hover:bg-primary-cream rounded-lg hover:text-primary-black" href={project.link} target="_blank">
                      <p className="font-bold border-2 rounded-lg py-1 px-2">
                      Go to site
                      </p>
                    </a>      
                    <div className="flex flex-row w-full justify-center items-center text-center gap-x-2">
                    {project.tech.map((tech, index) => (
                    <LogoIcon key={index} logo={tech} />
                  ))}
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>

    </div>

  );
}
export default FlipCard;
