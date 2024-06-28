import Navbar from "@/components/navbar";
import Image from "next/image";
import LogoIcon from "@/components/LogoIcon";
const logos = [
  'python',
  'java',
  'javascript',
  'google-cloud',
  'postgresql',
  'firebase',
  'django',
  'spring',
  'nextjs-icon',
  'react',
  'express',
  'flutter',
  'sap',
  'godot',
  'unity',
  'figma',
  'vue'
];
export default function Home() {
  return (
    <main className="text-primary-cream flex min-h-screen flex-col justify-center px-10 md:px-20 py-20" >
<div className=" font-light  text-md sm:text-xl w-full items-left grid grid-cols-1 sm:grid-cols-2 space-y-2">
  <div>
    <p className="text-xl">
    Hello! I'm
  </p>
  <p className="font-black uppercase text-2xl sm:text-4xl md:text-6xl bg-gradient-to-r from-yellow-500 via-emerald-200 to-green-800 text-transparent bg-clip-text animate-gradient">
    inaya rahmanisa
  </p>
  </div>
  <div className="space-y-10">
    <p className="text-md">
      A <span className="font-bold">software developer & designer</span> as well as a 3rd year Computer Science student at University of Indonesia. I make websites, games, occasionally mobile apps, and design them too
    </p>
    <div className="min-w-full">
      <p className="text-md font-light">Languages & frameworks I have worked with: </p> 
      <div className="space-x-1 space-y-1">
        {logos.map((logo) => (
          <LogoIcon key={logo} logo={logo} />
        ))}
      
      </div>
    </div>
  </div>
    
  
</div>


    </main>
  );
}
