import React from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';

import { ThreeDCardDemo } from './hovercard';



const Gallery = () => {
  return (
     <>
       

<div className="grid grid-cols-1 sm:grid-cols-1  gap-1 overflow-auto h-screen pb-[9rem]">
    
        <div className='rounded-lg p-1'>
            {/* <Image className="h-auto max-w-full rounded-lg" src="/sidebarimages/aboutus.png" alt="" width={150} height={150}/>
             <Button size={'sm'} variant={'default'}  >About</Button>
              */}
              <ThreeDCardDemo img={'aboutus.png'} title='Home' linkname=''/>
        </div>
        <div className='rounded-lg p-1'>
            {/* <Image className="h-auto max-w-full rounded-lg" src="/sidebarimages/aboutus.png" alt="" width={150} height={150}/>
             <Button size={'sm'} variant={'default'}  >About</Button>
              */}
              <ThreeDCardDemo img={'aboutus.png'} title='About' linkname='aboutus'/>
        </div>
        
        <div className='rounded-lg p-1'>
            {/* <Image className="h-auto max-w-full rounded-lg" src="/sidebarimages/aboutus.png" alt="" width={150} height={150}/>
             <Button size={'sm'} variant={'default'}  >About</Button>
              */}
              <ThreeDCardDemo img={'contact.png'} title='Contact' linkname='contact'/>
        </div>
        
        <div className='rounded-lg p-1'>
            {/* <Image className="h-auto max-w-full rounded-lg" src="/sidebarimages/aboutus.png" alt="" width={150} height={150}/>
             <Button size={'sm'} variant={'default'}  >About</Button>
              */}
              <ThreeDCardDemo img={'projects.png'} title='Projects' linkname='projects'/>
        </div>
        
        <div className='rounded-lg p-1'>
            {/* <Image className="h-auto max-w-full rounded-lg" src="/sidebarimages/aboutus.png" alt="" width={150} height={150}/>
             <Button size={'sm'} variant={'default'}  >About</Button>
              */}
              <ThreeDCardDemo img={'resume.png'} title='Resume' linkname='aboutus'/>
        </div>
        
   </div>

     </>
  )
}

export default Gallery;
