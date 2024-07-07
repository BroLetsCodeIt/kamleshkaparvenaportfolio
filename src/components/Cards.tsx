import React from "react";
import Projectimage from "./projectimage";
import Image from "next/image";
import Link from "next/link";

const cardvalues = [
  {
    projectimg: "/figletlogo.png",
    projectname: "Sign Language Learning App.",
    projectdescription:
      "It is a user-friendly web application designed to teach individuals of all ages and backgrounds how to communicate using sign language via  interactive lessons, videos, quizzes, and games. The app provides a comprehensive and engaging platform for both beginners and advanced learners to develop their signing skills at their own pace, fostering inclusivity and accessibility in communication for the deaf and hard of hearing community.",
    projecttags: ["NextJS", "Drizzle-ORM", "Neon", "TypeScript"],
    githublink: "",
    livedemolink: "",
  },
  {
    projectimg: "/figletlogo.png",
    projectname: "Learning Management System.",
    projectdescription: "Create the Course",
    projecttags: ["TypeScript", "NextJS", "Neon", "ReactJS"],
    githublink: "",
    livedemolink: "",
  },
  {
    projectimg: "/figletlogo.png",
    projectname: "Live Streaming Website.",
    projectdescription: "Convert the normal text into Fancy ASCII character",
    projecttags: ["Socket.io", "Neon", "TypeScript", "NextJS"],
    githublink: "",
    livedemolink: "",
  },
  {
    projectimg: "/figletlogo.png",
    projectname: "Fitness Web Application",
    projectdescription:
      "Complete Track of user Fitness. Calculate the BMR , BMI and Excersizes",
    projecttags: ["Frontend", "JavaScript", "HTML", "ReactJS"],
    githublink: "",
    livedemolink: "",
  },
  {
    projectimg: "/figletlogo.png",
    projectname: "Resume Builder",
    projectdescription: "Build your Resume Online",
    projecttags: ["JavaScript", "ReactJS", "TailwindCSS", "Firebase"],
    githublink: "",
    livedemolink: "",
  },
];

const UpcomingCardvalues = [
  {
    projectimg: "/figletlogo.png",
    projectname: "Figlet",
    projectdescription: "Convert the normal text into Fancy ASCII character",
    projecttags: [
      "Frontend",
      "JavaScript",
      "HTML",
      "ReactJS",
      "nextjs",
      "remix",
    ],
    githublink: "",
    livedemolink: "",
  },
  {
    projectimg: "/figletlogo.png",
    projectname: "Figlet",
    projectdescription: "Convert the normal text into Fancy ASCII character",
    projecttags: [],
    githublink: "",
    livedemolink: "",
  },
];

const Cards = () => {
  return (
    <>
      {cardvalues.map((val, ind) => {
        return (
          <div
            className="border-2 border-gray-200 rounded-md p-2  flex flex-col gap-4 w-full min-h-3"
            key={ind}
          >
            <div className="">
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
                        className="bg-[#F9FAFB] rounded-sm text-[#565F6C] "
                        key={tagind}
                      >
                        {tagval}
                      </small>
                    );
                  })}
                </div>
                <span className="flex-1  flex items-start justify-end gap-x-3">
                  <Link
                    href={val.livedemolink}
                    className="px-1 py-0.5 border border-gray-200 rounded-md text-sm"
                  >
                    🌐 Live Demo
                  </Link>
                  <Link
                    href={val.githublink}
                    className="px-1 py-0.5 border border-gray-200 rounded-md text-sm"
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
            className="border-2 border-gray-200 rounded-md p-2  flex flex-col gap-1 w-full min-h-3"
            key={ind}
          >
            <div className="">
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
                        className="bg-[#F9FAFB] rounded-sm text-[#565F6C] "
                        key={tagind}
                      >
                        {tagval}
                      </small>
                    );
                  })}
                </div>
                <span className="flex-1  flex items-start justify-end gap-x-3">
                  <Link
                    href={val.livedemolink}
                    className="p-1 border border-gray-200 rounded-md"
                  >
                    🌐 Live Demo
                  </Link>
                  <Link
                    href={val.githublink}
                    className="p-1 border border-gray-200 rounded-md"
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
