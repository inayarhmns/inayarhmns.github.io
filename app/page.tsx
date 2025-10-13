"use client";

import React, { useEffect } from 'react';
import Navbar from "@/components/navbar";
import LogoIcon from "@/components/LogoIcon";
import anime from "animejs";
import Home from "@/components/Home"
import { usePathname } from 'next/navigation';
import Works from "@/components/Work"
import Contats from "@/components/Contacts"
import { useState } from 'react';
import Contacts from '@/components/Contacts';
import SideBar from '@/components/SideBar';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<string>('');

  const handlePageChange = (page: string) => {
    if (page !== currentPage) {
      setIsAnimating(true);
      setNextPage(page);
    }
  };

  const handleAnimationEnd = () => {
    setCurrentPage(nextPage);
    setIsAnimating(false);
  };
  const renderContent = () => {
    
    switch (currentPage) {
      case 'works':
        return <Works />;
      case 'contacts':
        return <Contacts />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <main className="text-primary-black flex min-h-fit sm:min-h-screen flex-col justify-center px-8 md:px-20 mb-48 sm:mb-0 py-10 sm:py-20">
      <Navbar  onLinkClick={handlePageChange}></Navbar>
      <div className='hidden md:flex'>
        <SideBar/>
      </div>
      
      <div
        className={`${isAnimating ? 'slide-out' : 'slide-in'}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {renderContent()}
      </div>
      {/* <div className='p-4 text-sm text-center w-screen text-primary-black font-thin items-end bottom-0 right-0'>
      Designed in Figma. Made with Next JS. Handcrafted by me. ♥️ © 2024 inayarhmns.
      </div> */}
      
    </main>
  );
};

export default HomePage;
