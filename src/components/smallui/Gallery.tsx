import React from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';

import { ThreeDCardDemo } from './hovercard';
import Link from 'next/link';



const Gallery = () => {
  return (
     <>
       

<div className="grid grid-cols-1 sm:grid-cols-1  gap-1 overflow-auto h-screen pb-[9rem]">
    
<div className="h-full px-0 py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
         <li>
            <Link href="/" className="flex items-center py-1 pl-0 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group bg-gray-200/10 border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900">
              
               <span className="ms-3">Home</span>
            </Link>
         </li>
         <li>
            <Link href="/aboutus" className="flex items-center  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group bg-gray-200/10 border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 py-1">
               
               <span className="flex-1 ms-3 whitespace-nowrap">About Me</span>
               
            </Link>
         </li>
         <li>
            <Link href="/resume" className="flex items-center  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group bg-gray-200/10 border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 py-1">
               
               <span className="flex-1 ms-3 whitespace-nowrap">Resume </span>
              
            </Link>
         </li>
         <li>
            <Link href="/projects" className="flex items-center  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group bg-gray-200/10 border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 py-1">
              
               <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
            </Link>
         </li>
         <li>
            <Link href="/contact" className="flex items-center  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group bg-gray-200/10 border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 py-1">
               
               <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
            </Link>
         </li>
         <li>
            <Link href="/links" className="flex items-center  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group bg-gray-200/10 border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 py-1">
               
               <span className="flex-1 ms-3 whitespace-nowrap">Links</span>
            </Link>
         </li>
        
      </ul>
   </div>
        
   </div>

     </>
  )
}

export default Gallery;
