import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center px-10 md:px-20 pt-36 lg:pt-10 pb-10" >
<div className="font-light text-primary-black text-md sm:text-xl w-full md:w-1/3 items-left lg:block space-y-3">
  <p>
    Hello! I'm
  </p>
  <p className="uppercase text-2xl sm:text-6xl">
    inaya rahmanisa
  </p>
  <p>
    A <span className="font-black">software developer & designer</span> as well as a 3rd year Computer Science student at University of Indonesia. I make websites, games, occasionally mobile apps, and design them too. I also happen to know how to use a brush (both traditionally and digitally).
  </p>
  <div className="min-w-full">
    <p className="text-sm sm:text-lg font-thin">Languages & frameworks I have worked with: </p> 
    <div className="space-x-2 bg-primary-cream bg-opacity-50 rounded-md p-2">
      <span className="icon-[logos--python] transform hover:scale-150"></span>
      <span className="icon-[logos--java] transform hover:scale-150"></span>
      <span className="icon-[logos--javascript] transform hover:scale-150"></span>
      <span className="icon-[logos--postgresql] transform hover:scale-150"></span>

      <span className="icon-[logos--django] transform hover:scale-150"></span>
      <span className="icon-[logos--spring] transform hover:scale-150"></span>
      <span className="icon-[logos--nextjs-icon] transform hover:scale-150"></span>
      <span className="icon-[logos--react] transform hover:scale-150"></span>
      <span className="icon-[logos--express] transform hover:scale-150"></span>
      <span className="icon-[logos--flutter] transform hover:scale-150"></span>
      <span className="icon-[logos--sap] transform hover:scale-150"></span>
      <span className="icon-[logos--godot] transform hover:scale-150"></span>
      <span className="icon-[logos--unity] transform hover:scale-150"></span>
      <span className="icon-[logos--figma] transform hover:scale-150"></span>
    </div>
    




    


  </div>
  
</div>


    </main>
  );
}
