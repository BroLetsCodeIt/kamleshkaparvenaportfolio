import Footer from '@/components/Footer'
import { links } from '@/constants/links'
import { cn } from '@/lib/utils'
import React from 'react'

const Links = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start max-w-xl mx-auto mb-16 w-full mt-20 ">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Links
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4 hidden md:block ">
          Links to all my socials, projects, source codes.
        </p>
        {links?.map((el) => (
          <a
            key={el?.href}
            href={el?.href}
            target="__blank"
            className="dark:hover:bg-gray-900/20 dark:border-gray-600/30 border-2 border-gray-200/30 rounded-md py-3 w-full mb-4 hover:bg-gray-50/30 flex flex-row items-center space-x-2 px-4"
          >
            {/* <span className="inline-block mr-2">{`${el?.icon}`}</span>{" "} */}
            <el.icon className={cn("h-5 w-5", el?.iconClass)} />
            <span className="font-bold">{el?.name}</span>
          </a>
        ))}
      <Footer/>
      </div>
    </>
    
  )
}

export default Links
