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
        



        
        <div className="relative z-10 h-screen overflow-auto">
        {children}
          <div className='pb-2 text-sm text-center text-primary-black font-thin items-end'>
            Designed in Figma. Made with Next JS. Handcrafted by me with ♥️ © 2026 inayarhmns.
          </div>
        </div>
        
        </body>
    </html>
  );
}
