import Navbar from "@/components/navbar";
import Image from "next/image";
import LogoIcon from "@/components/LogoIcon";

export default function Home() {
  return (
    <main className=" text-primary-black w-lg  flex min-h-screen flex-col justify-center px-10 md:px-20  pb-10" >
        <div className="flex  flex-row w-full text-3xl sm:text-6xl gap-4">
        <div
        className="gap-10 mx-auto w-full mt-20 border-4 border-primary-black shadow-[10px_10px_0_0_primary-black] shadow-primary-black  mx-5 p-4 md:p-10 flex flex-col items-center justify-center text-center">
       
       <div className="flex flex-row text-3xl sm:text-6xl gap-4">
            <div className="flex flex-shrink-0 items-center">
              <Image
                className="h-10 sm:h-14 w-auto"
                src="/img/nayx.svg"
                alt="inayarhmns"
                width={32}
                height={32}
              />
            </div>
            <p className="bg-gradient-to-r from-yellow-500 via-emerald-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                Let's connect!
            </p>
        </div>        
        <ul className="flex flex-row items-center justify-center text-center mt-5">
            <li className="mx-2">
                <a href="https://github.com/inayarhmns" target="_blank" aria-label="Github">
                <i className="icon-[mdi--github]"></i>
                </a>
            </li>
            <li className="mx-2">
                <a href="https://instagram.com/inayarhmns" target="_blank" aria-label="Instagram">
                <i className="icon-[mdi--instagram]"></i>
                </a>
            </li>
            <li className="mx-2">
                <a href="https://www.linkedin.com/in/inayarahmanisa/" target="_blank" aria-label="LinkedIn">
                <i className="icon-[mdi--linkedin]"></i>
                </a>
            </li>
            <li className="mx-2">
                <a href="https://medium.com/@inayarhmns" target="_blank" aria-label="Medium">
                <i className="icon-[mdi--medium]"></i>
                </a>
            </li>
            <li className="mx-2">
                <a href="mailto:inaya.rahmanisa@gmail.com" target="_blank" aria-label="GMAIL">
                <i className="icon-[mdi--gmail]"></i>
                </a>
            </li>
        </ul>
    </div>
            
        </div>


    </main>
  );
}
