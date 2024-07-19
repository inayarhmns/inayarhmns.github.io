import Image from "next/image";
import React from 'react';

const Contacts: React.FC = ()=> {
  return (
    <div className="slide-up flex w-full flex-row text-3xl sm:text-6xl gap-4 justify-center items-center">
        <div
        className="gap-10  mt-20 border-4 border-primary-cream shadow-[10px_10px_0_0_primary-cream] shadow-primary-cream  p-4 md:p-10 flex flex-col items-center justify-center text-center">
       
       <div className="flex flex-row text-3xl sm:text-6xl gap-4">
            {/* <div className="flex flex-shrink-0 items-center">
              <Image
                className="h-10 sm:h-14 w-auto"
                src="/img/nayx.svg"
                alt="inayarhmns"
                width={32}
                height={32}
              />
            </div> */}
            <p className="bg-gradient-to-r from-primary-cream via-light-cream to-primary-black text-transparent bg-clip-text animate-gradient">
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

  );
}
export default Contacts;
