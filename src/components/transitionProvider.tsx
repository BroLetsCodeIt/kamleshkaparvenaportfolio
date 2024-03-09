"use client"
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const TransitionProvider = ({children} : Readonly<{children : React.ReactNode}>) => {
  return (
    <>
      <AnimatePresence>
      <div className="container mx-auto w-[100%] h-screen relative">
         
         <Image
           alt=""
           src={"/docs.avif"}
           className="absolute top-0 z-[-3]"
           fill
           />
         <ThemeProvider
           attribute="class"
           defaultTheme="dark"
           enableSystem
           disableTransitionOnChange
           >
           <Navbar />
           {children}
         </ThemeProvider>
        
       </div>
      </AnimatePresence>
    </>
  )
}

export default TransitionProvider
