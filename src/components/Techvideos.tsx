import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const techvideos = [
    {
      projectimg: "/youtube.png",
      projectname: "Figlet",
      projectdescription: "Convert the normal text into Fancy ASCII character",
      projecttags: ["Frontend", "JavaScript", "HTML", "ReactJS"],
      projectlink : "https://www.youtube.com/watch?v=WhYOzx-qw68"
    },
    {
      projectimg: "/youtube.png",
      projectname: "Competitive Programming",
      projectdescription: "How to Upload Solutions in Node.js in Codeforces",
      projecttags: ["CP", "JavaScript", "NodeJS", "CodeForces"],
      projectlink : "https://www.youtube.com/watch?v=DUWTv8J0shM"
    },
    
  ];
  
const Techvideos = () => {
  return (
    <>
      {techvideos.map((val, ind) => {
        return (
          <div
            className="border-2 border-gray-200/20 rounded-md p-2 pb-4 w-full flex flex-row  items-center justify-between  gap-4 hover:border-gray-200/40 dark:border-gray-900 dark:hover:border-gray-800"
            key={ind}
          >
           
            <div className='flex flex-col items-start justify-between gap-1'>
              <h1 className="text-2xl font-bold ">{val.projectname}</h1>
              <p className='text-sm'>{val.projectdescription}</p>
              <div className="flex flex-wrap gap-2">
                {val.projecttags.map((tagval, tagind) => {
                  return (
                    <small
                      className="bg-[#F9FAFB] rounded-sm text-[#565F6C] px-1 dark:bg-gray-900"
                      key={tagind}
                    >
                      {tagval}
                    </small>
                  );
                })}
              </div>
            </div>

           <Link href={`${val.projectlink}`} target='_blank'>
            <Image
              alt="img"
              src={`${val.projectimg}`}
              width={30}
              height={10}
              className="rounded-md pb-10"
              />
            </Link>
            
          </div>
        );
      })}
    </>
  )
}

export default Techvideos
