"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/works', label: 'Works' },
    // { href: '/illustrations', label: 'Illustrations' },
    { href: '/contacts', label: 'Contacts' },
  ];

  return (
    <nav className="">
      <div className="fixed top-0 z-50 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="md:flex flex-shrink-0 items-center hidden ">
              <Image
                className="h-8 w-auto"
                src="/img/nayx.svg"
                alt="inayarhmns"
                width={32}
                height={32}
              />
            </div>
            <div className="hidden w-full justify-center text-center items-center sm:ml-6 sm:block">
              
              <div className="grid grid-cols-4  justify-center text-center items-center">
                {/* <div className='w-1/4'> */}
                    <hr className="col-span-1 items-center justify-center border-t-1 border-primary-cream" />
                {/* </div> */}
                <div className='col-span-2 space-x-20'>
                  {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`uppercase ${
                      pathname === link.href ? 'text-primary-cream font-black' : 'font-regular text-primary-cream'
                    } hover:text-primary-cream rounded-md px-3 py-2 text-sm font-regular`}
                  >
                    {link.label}
                  </a>
                ))}
                </div>
                
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </div>
      <button type="button" className="sm:hidden relative inline-flex items-center justify-center rounded-md p-2 text-primary-cream focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={isMenuOpen}
        onClick={toggleMenu}>
          <span className="absolute -inset-0.5"></span>

          <svg className="block h-8 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`text-sm sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="w-full items-center space-y-1 px-2 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`uppercase ${
                pathname === link.href ? 'text-primary-cream' : 'text-gray-300'
              } block rounded-md px-3 py-2 text-sm font-medium hover:text-primary-cream`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
              <hr className='opacity-50 '/>
            </a>
            
          ))}
        </div>
      </div>
    </nav>
  );
}
