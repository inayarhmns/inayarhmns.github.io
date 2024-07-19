import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import localFont from "next/font/local"
import Head from "next/head";
const kyiv = localFont({
  src: [
    {
      path: '../public/font/kyiv-type-sans/KyivTypeSans-Medium-.otf',
      weight: '400',
      style: 'medium',
    },
    {
      path: '../public/font/kyiv-type-sans/KyivTypeSans-Regular-.otf',
      weight: '300',
      style: 'regular',
    },
    {
      path: '../public/font/kyiv-type-sans/KyivTypeSans-Light-.otf',
      weight: '200',
      style: 'light',
    },
    {
      path: '../public/font/kyiv-type-sans/KyivTypeSans-Thin.otf',
      weight: '100',
      style: 'thin',
    },
    {
      path: '../public/font/kyiv-type-sans/KyivTypeSans-Bold-.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/font/kyiv-type-sans/KyivTypeSans-Black-.otf',
      weight: '800',
      style: 'black',
    },
  ],

});

export const metadata: Metadata = {
  title: "Inaya Rahmanisa",
  description: "Portfolio by Inaya Rahmanisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en" className="bg-fixed bg-primary-bg overflow-hidden">
       <head>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
      </head>
      <body className={`${kyiv.className} `}>
        

<svg className="svg-bg" preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80" >
    <defs >
    </defs>
    <path fill="#393637" opacity={0.4} className="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"/>
    <path fill="#576955" opacity={0.5} className="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"/>
    <path  fill="#576955" opacity={0.5} className="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"/>
    <path fill="#393637" opacity={0.5} className="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"/>
</svg>

        
        <div className="relative z-10 h-screen overflow-auto">
        {children}
          <div className='pb-2 text-sm text-center text-primary-black font-thin items-end'>
            Designed in Figma. Made with Next JS. Handcrafted by me. ♥️ © 2024 inayarhmns.
          </div>
        </div>
        
        </body>
    </html>
  );
}
