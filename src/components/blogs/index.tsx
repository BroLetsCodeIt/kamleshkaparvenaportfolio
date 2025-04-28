import Link from 'next/link'
import React from 'react'

const BlogSection = () => {
  return (
   <> 
      <div className="flex items-start justify-start mt-20 flex-col gap-4">
               <h1 className="text-3xl font-bold pb-3 tracking-tight">
                 Recent Blogs.
               </h1>
     
               {/* blog cards */}
     
               {/* 1st card */}
               <div className="relative flex border border-gray-400/10 rounded-md  w-full p-2 py-3 bg-[#F3F4F6]/20 items-end justify-between px-2 hover:border-gray-200/40 dark:bg-gray-900 hover:shadow-sm dark:hover:border-gray-800">
                 <span className="absolute w-px -left-px top-[10%] h-[100%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
                 <div className="flex flex-col">
                   <h1 className="font-semibold ">JavaScript figlet project.</h1>
                   <small>
                     Transform the plain text into stylish ASCII characters.
                   </small>
                 </div>
                 <Link
                   href={"https://www.youtube.com/watch?v=WhYOzx-qw68"}
                   target="_blank"
                 >
                   <p className="cursor-pointer duration-1000 flex items-center text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-sm ">
                     Read Now
                     {/* <IconSquareRoundedArrowRight size={30} /> */}
                   </p>
                 </Link>
               </div>
     
               {/* 2nd card */}
               <div className="relative flex border border-gray-400/10 rounded-md  w-full p-2 py-3 bg-[#F3F4F6]/20 items-end justify-between px-2 hover:border-gray-200/40 dark:bg-gray-900 hover:shadow-sm dark:hover:border-gray-800">
               <span className="absolute w-px -left-px top-[5%] h-[100%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
                 <div className="flex flex-col">
                   <h1 className="font-semibold ">Competitive Programming setup.</h1>
                   <small>
                     In this blog, we will explore how to set up Sublime Text Editor
                     for competitive coding...
                   </small>
                 </div>
                 <Link
                   href={
                     "https://learnwithcodinggeek7.blogspot.com/2023/06/how-to-setup-sublime-text-for.html"
                   }
                   target="_blank"
                 >
                   <p className=" cursor-pointer duration-1000 flex items-center text-xs bg-gray-100 hover:bg-gray-200  px-2 py-1 rounded-sm">
                     Read Now
                     {/* <IconSquareRoundedArrowRight size={30} /> */}
                   </p>
                 </Link>
               </div>
             </div>
             <Link
               className="flex items-center justify-center pt-7 gap-2 text-xs"
               href={"/blogs"}
             >
               See all Blogs{" "}
               <svg
                 width="15"
                 height="15"
                 viewBox="0 0 15 15"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                   fill="currentColor"
                   fillRule="evenodd"
                   clipRule="evenodd"
                 ></path>
               </svg>
             </Link>
   </>
  )
}

export default BlogSection
