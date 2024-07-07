import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const techvideos = [
    {
      projectimg: "/figletlogo.png",
      projectname: "Figlet",
      projectdescription: "Convert the normal text into Fancy ASCII character",
      projecttags: ["Frontend", "JavaScript", "HTML", "ReactJS"],
    },
    {
      projectimg: "/figletlogo.png",
      projectname: "Figlet",
      projectdescription: "Convert the normal text into Fancy ASCII character",
      projecttags: ["Frontend", "JavaScript", "HTML", "ReactJS"],
    },
    
  ];
  
const Techvideos = () => {
  return (
    <>
      {techvideos.map((val, ind) => {
        return (
          <div
            className="border-2 border-gray-200 rounded-md p-2  w-full flex flex-row gap-4"
            key={ind}
          >
            <Image
              alt="img"
              src={`${val.projectimg}`}
              width={60}
              height={30}
              className="rounded-md"
            />
            <div>
              <h1 className="text-2xl font-bold">{val.projectname}</h1>
              <p>{val.projectdescription}</p>
              <div className="flex flex-wrap gap-2">
                {val.projecttags.map((tagval, tagind) => {
                  return (
                    <small
                      className="bg-[#F9FAFB] rounded-sm text-[#565F6C] px-1"
                      key={tagind}
                    >
                      {tagval}
                    </small>
                  );
                })}
              </div>
            </div>
            
          </div>
        );
      })}
    </>
  )
}

export default Techvideos
