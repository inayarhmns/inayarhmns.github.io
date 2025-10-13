
import React from 'react';

const SideBar: React.FC = ()=> {

  return (
    
    
    <div className="text-primary-black uppercase font-thin pl-4 py-4 pb-24 left-0 inset-0 fixed z-50 flex justify-center items-end text-center w-[70px] h-screen space-x-5">
    <ul className="text-xl flex flex-col items-center justify-center text-center space-y-4">
            <li className="">
                <a href="https://github.com/inayarhmns" target="_blank" aria-label="Github">
                <i className="icon-[mdi--github]"></i>
                </a>
            </li>
            <li>
                |
            </li>
            <li className="">
                <a href="https://www.linkedin.com/in/inayarahmanisa/" target="_blank" aria-label="LinkedIn">
                <i className="icon-[mdi--linkedin]"></i>
                </a>
            </li>
            <li>
                |
            </li>
            <li className="">
                <a href="https://instagram.com/inayarhmns" target="_blank" aria-label="Instagram">
                <i className="icon-[mdi--instagram]"></i>
                </a>
            </li>
            
    </ul>
    {/* <div className="flex justify-center">
        <div className="bg-opacity-70 w-[0.5px] h-[400px] bg-primary-cream"></div>
      </div> */}
    
  </div>
  

  );
}
export default SideBar;
