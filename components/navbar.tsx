"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
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
            <div className="flex flex-shrink-0 items-center">
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
                    <hr className="col-span-1 items-center justify-center border-t-1 border-primary-black" />
                {/* </div> */}
                <div className='col-span-2 space-x-20'>
                  {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`uppercase ${
                      pathname === link.href ? 'text-primary-black font-black' : 'font-regular text-primary-black'
                    } hover:text-primary-black rounded-md px-3 py-2 text-sm font-regular`}
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

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="w-full items-center space-y-1 px-2 pb-3 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`uppercase ${
                pathname === link.href ? 'text-primary-black ' : 'text-gray-300'
              } block rounded-md px-3 py-2 text-base font-medium hover:text-primary-black`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <hr></hr>
      </div>
    </nav>
  );
}
