import Image from "next/image";
import React, { useEffect, useState } from "react";

const lifeupdate = [
  {
    year  : 2023 , 
    heading : [
      {
        key : "Started Learning MERN Stack Development ",
        value : "Get to know about different tech stack , built bunch of projects."
      },
      {
        key : "Secured 5th Position in Web Redesign Competition.",
        value : "This competition was organized by Ksham Innovation Pvt.Ltd."
      }
    ]
  },
  {
    year : 2022 , 
    heading : [
      {
        key : "Started College 🔥",
        value : "Opted for Information Technology B.E Degree from Vidyalankar Institute of Technology."
      },
      {
        key : "Introduce to Programming Languages.",
        value : `Started Learning logics and basics programming fundamentals with Object Oriented Programming.`
      },{
        key : "Qualified for Finals in Tech Gig Code Gladitors",
        value : "This is Coding competition happens every year."
      }
    ]
  },

  {
     year : 2021 , 
     heading : [
      {

        key  : "Got 97%ile in MHT-CET Examination.",
        value : "It was the best moment. All my hard work paid off."
      },
      {
        key : "Got 79%ile in JEE Main Examination.",
        value : "I was not able to qualify for JEE-Advance😔."
      },  
     ]
  },

  {
   year : 2020 , 
   heading : [
    {
      key : "Got 91% in my 12th(HSC) Boards ✨.",
      value : "I was the Physics Topper in my College (96/100) marks. Again, a big achievement for me."
    },
    {
      key : "Engineering Entrance Examination 🧑‍🔬",
      value : "I was also preparing for JEE & MHT-CET examination."
    }
    
   ]
  },
];


const lifeupdateremaining = [
  {
    year: 2019,
      heading: [
        {
          key : "Got 82% in my 10th(SSC) Boards ✨.",
          value : "I was the Maths Topper in my Class (96/100) marks."
        },
        {
          key : "Sports & Health 🏅",
          value : "I was also the gold medalist in 1500m running in my School & I was able to make selection for Taluka level in 1500m running."
        }

      ]
  },
  {
      year : 2015 ,
      heading : [
        {
          key : "Moved to Class 8th.",
          value : "I was barely manage to pass the Language Subjects ( Hindi , Marathi , Telugu )😔."
        },
        {
          key : "Coaching Classes.",
          value : "So, I took a coaching classes. This was the best descision of my life."
        }
      ]
  },
  {
    year: 2004,
    heading: [
      {
        key: "Moved to Mumbai for my Studies.",
        value:
          "In my school days, I was very much interested in Drawing ,Crafts & Sports",
        
      }
    ],
  },

  {
    year: 2003,
    heading: [
      {
        key: "A Engineer was Born in India (Telangana) 🐣.",
        value: "",
      },
    ],
  },
]


const LifeChangelog = () => {



  return (
    <>
      {lifeupdate.map((val, ind) => {
       
      
        return (
          
          <>
            <div className="border-b-2 border-gray-200/20 rounded-md p-2 pb-4 pl-0  w-full flex flex-col gap-4 " key={ind}>
              <h1 className="text-xl font-bold">{val.year}</h1>

              <div className="flex flex-col gap-2 pl-3">
                {val.heading.map((headval, headind) => (
                  <div key={headind}>
                    <p className="flex gap-1 items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="text-blue-500 mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                      </svg>
                      <span className="font-semibold ">{headval.key}</span>
                    </p>
                    <div className="flex flex-col pl-7 text-gray-600 dark:text-[#A1A19A]">
                      <p>{headval.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};


const LifeChangeLogRemaining = () => {
  return(
    <>
    {lifeupdateremaining.map((val, ind) => {
       
      
       return (
         
         <>
           <div className="border-b-2 border-gray-200 rounded-md p-2 pl-0  w-full flex flex-col gap-4 dark:border-gray-800 pb-4" key={ind}>
             <h1 className="text-xl font-bold">{val.year}</h1>

             <div className="flex flex-col gap-2 pl-3">
               {val.heading.map((headval, headind) => (
                 <div key={headind}>
                   <p className="flex gap-1 items-center">
                     <svg
                       stroke="currentColor"
                       fill="currentColor"
                       strokeWidth="0"
                       viewBox="0 0 16 16"
                       className="text-blue-500 mr-2"
                       height="1em"
                       width="1em"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                     </svg>
                     <span className="font-semibold ">{headval.key}</span>
                   </p>
                   <div className="flex flex-col pl-7 text-gray-600 dark:text-[#A1A19A]">
                     <p>{headval.value}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </>
       );
     })}
   </>
  )
}

export {LifeChangeLogRemaining};

export default LifeChangelog;
