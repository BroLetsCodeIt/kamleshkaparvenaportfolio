import React from "react";
import Projectimage from "./projectimage";
import Image from "next/image";
import Link from "next/link";

const cardvalues = [
  {
    projectimg: "/expense_tracker.png",
    projectname: "Expenses Tracker",
    projectdescription: "It is a user-friendly web application designed to track the expenses. Users can create the budgets & add expenses accordingly. Users can delete & update the budgets.",
    projecttags: ["TypeScript", "NextJS", "Neon", "ReactJS","DrizzleORM"],
    githublink: "https://github.com/BroLetsCodeIt/Expense_Tracker",
    livedemolink: "https://github.com/BroLetsCodeIt/Expense_Tracker",
  },
  {
    projectimg: "/code_collab.jpg",
    projectname: "CodeCollab.io",
    projectdescription: "It is a user-friendly website, where user can create the room or join other's room. Users can Code live together. Seven themes are provided in the online editor.",
    projecttags: ["Socket.io", "TypeScript", "ReactJS", "Vite"],
    githublink: "https://github.com/BroLetsCodeIt/CodeCollab.io_new",
    livedemolink: "https://github.com/BroLetsCodeIt/CodeCollab.io_new",
  },
  {
    projectimg: "/figletlogo.png",
    projectname: "Fitness Web Application",
    projectdescription:
      "Complete Track of user Fitness. Calculate the BMR, Culinary, Meals, Calorie Tracker, Exercises.This app allows you to search exercises of your interest with a lot of filter options.It allows you to search exercises with respect to body parts and gave you more detail about the exercises that resembles the specified exercise in terms of target muscle or in terms of equipments ",
    projecttags: ["Frontend", "JavaScript", "HTML", "ReactJS"],
    githublink: "https://github.com/BroLetsCodeIt/Fitness_Web_application",
    livedemolink: "https://github.com/BroLetsCodeIt/Fitness_Web_application",
  },
  {
    projectimg: "/resume_builder.jpg",
    projectname: "Resume Builder",
    projectdescription: "Build your Resume Online. ",
    projecttags: ["JavaScript", "ReactJS", "TailwindCSS", "Firebase"],
    githublink: "https://github.com/BroLetsCodeIt/Resume_Builder_Project",
    livedemolink: "https://github.com/BroLetsCodeIt/Resume_Builder_Project",
  },
];

const UpcomingCardvalues = [
  {
    projectimg: "/sign_language.png",
    projectname: "Sign Language Learning App.",
    projectdescription: "It is a user-friendly web application designed to teach individuals of all ages and backgrounds how to communicate using sign language via  interactive lessons, videos, quizzes, and games. The app provides a comprehensive and engaging platform for both beginners and advanced learners to develop their signing skills at their own pace, fostering inclusivity and accessibility in communication for the deaf and hard of hearing community.",
    projecttags: ["NextJS", "Drizzle-ORM", "Neon", "TypeScript"],
    githublink: "https://github.com/BroLetsCodeIt/Sign_Learning_Web_Application",
    livedemolink: "https://github.com/BroLetsCodeIt/Sign_Learning_Web_Application",
  },
  {
    projectimg: "/gaming.jpg",
    projectname: "Live Streaming Gaming Website.",
    projectdescription: "It is user-friendly website, where user can live stream their gameplay.  ",
    projecttags: ["NextJS" , "Drizzle-ORM" , "TypeScript"],
    githublink: "https://github.com/BroLetsCodeIt/live_streaming_website",
    livedemolink: "https://github.com/BroLetsCodeIt/live_streaming_website",
  },
];

const Cards = () => {
  return (
    <>
      {cardvalues.map((val, ind) => {
        return (
          <div
            className="border-2 border-gray-200/20 rounded-md p-2 pb-4 flex flex-col gap-4 w-full min-h-3 hover:border-gray-200/40 dark:border-gray-900 "
            key={ind}
          >
            <div className="pl-4 pt-1">
              <Image
                alt="img"
                src={`${val.projectimg}`}
                width={60}
                height={30}
                className="rounded-md dark:opacity-95"
              />
            </div>
            <div className="flex flex-col gap-4 px-4">
              <h1 className="text-2xl font-bold tracking-tight dark:text-white/90">{val.projectname}</h1>
              <p className="text-sm dark:text-white/70">{val.projectdescription}</p>
              <div className="flex flex-row items-end justify-between gap-6">
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
                <span className="flex-1  flex items-start justify-end gap-x-3">
                  <Link
                   target="_blank"
                    href={val.livedemolink}
                    className="px-1 py-0.5 border border-gray-200/40 rounded-md text-sm dark:border-gray-800/50"
                  >
                    🌐 Live Demo
                  </Link>
                  <Link
                    target="_blank"
                    href={val.githublink}
                    className="px-1 py-0.5 border border-gray-200/40 rounded-md text-sm dark:border-gray-800/50"
                  >
                    🐈 GitHub
                  </Link>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const UpcomingCards = () => {
  return (
    <>
      {UpcomingCardvalues.map((val, ind) => {
        return (
          <div
            className="border-2 border-gray-200/20 rounded-md p-2 pb-4 flex flex-col  w-full min-h-3 hover:border-gray-200/40 dark:bg-slate-950 dark:border-gray-900 dark:shadow-slate-400 gap-3"
            key={ind}
          >
            <div className="pl-4 pt-1">
              <Image
                alt="img"
                src={`${val.projectimg}`}
                width={60}
                height={30}
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col gap-4 px-4">
              <h1 className="text-2xl font-bold">{val.projectname}</h1>
              <p className="text-sm">{val.projectdescription}</p>
              <div className="flex flex-row items-end justify-between gap-6">
                <div className="flex flex-wrap gap-2 ">
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
                <span className="flex-1  flex items-start justify-end gap-x-3">
                  {/* <Link
                    href={val.livedemolink}
                    className="px-1 py-0.5 border border-gray-200/40 rounded-md text-sm"
                  >
                    🌐 Live Demo
                  </Link> */}
                  <Link
                    href={val.githublink}
                    className="px-1 py-0.5 border border-gray-200/40 rounded-md text-sm"
                  >
                    🐈 GitHub
                  </Link>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export { UpcomingCards };

export default Cards;
