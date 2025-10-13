"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC<{ onLinkClick: (page: string) => void }> = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [page, setPage] = useState("home");


  const links = [
    { href: 'home', label: 'Home' },
    { href: 'works', label: 'Works' },
    // { href: '/illustrations', label: 'Illustrations' },
    { href: 'contacts', label: 'Contacts' },
  ];
  const router = useRouter();

  const handleNavigation = (page: string) => {
    onLinkClick(page);
    setPage(page);
    // router.push("http://localhost:3000" + page); // This will update the URL without reloading the page
  };
  return (
    <nav className="">
      <div className="fixed left-0 top-0 z-50 mx-auto w-screen  sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className=" md:flex flex-shrink-0 items-center hidden ">
              <Image
                className="h-8 w-auto"
                src="/img/nayx.svg"
                alt="inayarhmns"
                width={32}
                height={32}
              />
            </div>
            <div className="hidden w-full justify-center text-center items-center sm:ml-6 sm:block">
              
              <div className=" justify-center text-center items-center">
                {/* <div className='w-1/4'> */}
                    {/* <hr className="col-span-1 items-center justify-center border-t-1 border-primary-cream" /> */}
                {/* </div> */}
                <div className='space-x-20'>
                  {links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavigation(`${link.href}`)}
                    className={`uppercase ${
                      page === link.href ? 'text-primary-black font-black' : 'font-thin text-primary-black'
                    } hover:text-primary-black rounded-md  py-2 text-sm font-regular`}
                  >
                    {link.label}
                  </button>
                ))}
                </div>
                
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </div>
      {/* <button type="button" className="sm:hidden fixed top-0 left-0 inline-flex items-center justify-center rounded-md p-2 text-primary-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={isMenuOpen}
        onClick={toggleMenu}>
          <span className="absolute -inset-0.5"></span>

          <svg className="block h-8 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> */}
        
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`text-sm sm:hidden `} id="mobile-menu">
        <div className="w-full items-center space-y-1 pt-2">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigation(`${link.href}`)}
              className={`uppercase ${
                page === link.href ? 'text-primary-black' : 'text-primary-black/60'
              } block rounded-md  py-2 text-sm font-medium hover:text-primary-black`}
              aria-current={page === link.href ? 'page' : undefined}
            >
              {link.label}
              <hr className='opacity-50 '/>
            </button>
            
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar
