"use client";
import React, { useRef, useState } from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { IconSquareRoundedArrowRight } from "@tabler/icons-react";
import Cards, { UpcomingCards } from "./Cards";
import Techvideos from "./Techvideos";
import LifeChangelog, { LifeChangeLogRemaining } from "./LifeChangelog";
import Link from "next/link";
import Footer from "./Footer";
const Landing = () => {


  const [ok , setOk] = useState(false);
  return (
    <div className=" mt-[10rem] min-h-[200vh] p-2 ">
      <motion.h2 className="dark:text-white text-neutral-800 text-3xl font-bold mb-20 text-center">
        <span className="flex flex-col gap-3">
          <span className="sm:text-4xl">Hey There 👋 I am</span>
          <span className="text-5xl">Frontend Developer</span>
          <span className="text-sm text-gray-500">
            Converting Ideas into Reality ✨
          </span>
        </span>
      </motion.h2>

      {/* my div */}

      <div className="  flex flex-col container mx-auto  max-w-[45rem] rounded-tr-2xl">
        {/* me and logo */}
        <div className="flex items-center justify-between">
          <div className="flex items-start justify-between flex-col gap-2">
            <div className="text-5xl font-bold">Kamlesh S.K</div>
            <div className="text-gray-600">
              Building{" "}
              <span className="bg-gray-200 font-bold p-0.5 rounded-sm px-1 dark:text-white dark:bg-gray-700">
                BroLetsCodeIt{" "}
              </span>
              &nbsp;and other{" "}
              <span className="bg-gray-200 font-bold p-0.5 rounded-sm px-1 dark:bg-gray-700 dark:text-white">
                cool things
              </span>
            </div>
            <div className="flex flex-col">
              <span>Software Engineer building SaaS Product and Web Apps.</span>
              <span>
                Find 🔎 me on <Link href={'https://www.youtube.com/@Coding-Edu'} target="_blank" className="font-bold">YouTube</Link> for Coding and Algorithms.
              </span>
            </div>
          </div>
          <Image
            src={"/myimag01.webp"}
            alt="logoimg"
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>
        {/* blog section */}
        <div className="flex items-start justify-start mt-20 flex-col gap-4">
          <h1 className="text-4xl font-bold pb-3 tracking-tighter">Recent Blogs.</h1>

          {/* blog cards */}

          {/* 1st card */}
          <div className="flex border border-gray-400/10 rounded-md  w-full p-2 py-3 bg-[#F3F4F6]/20 items-end justify-between px-2 hover:border-gray-400/20 dark:bg-gray-900">
            <div className="flex flex-col">
              <h1 className="font-semibold tracking-tight">
                JavaScript Figlet Project.
              </h1>
              <small >
                This Project was made using ReactJS + Vite.<br></br>
                Convert the ordinary text into some fancy ASCII Characters.
              </small>
            </div>
           <Link href={'https://www.youtube.com/watch?v=WhYOzx-qw68'} target="_blank">
            <p className="animate-pulse hover:-rotate-45 cursor-pointer duration-1000">
              <IconSquareRoundedArrowRight size={30} />
            </p>
           </Link>
          </div>

          {/* 2nd card */}
          <div className="flex border border-gray-400/10 rounded-md  w-full p-2 py-3 bg-[#F3F4F6]/20 items-end justify-between px-2 hover:border-gray-400/20 dark:bg-gray-900">
            <div className="flex flex-col">
              <h1 className="font-semibold tracking-tight">
                Competitive Programming SetUp.
              </h1>
              <small>
                In this blog , we will be looking , how to setup Sublime Text editor for <br /> Competitive Coding.
              </small>
            </div>
           <Link href={'https://learnwithcodinggeek7.blogspot.com/2023/06/how-to-setup-sublime-text-for.html'} target="_blank">
            <p className="animate-pulse hover:-rotate-45 cursor-pointer duration-1000">
              <IconSquareRoundedArrowRight size={30} />
            </p>
           </Link>
          </div>
        </div>
        <Link className="flex items-center justify-center pt-7 gap-2 " href={'/blogs'}>
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

        {/* Projects section*/}
        <div className="w-full flex flex-col pt-10">
          <h1 className="font-bold text-4xl py-5 tracking-tight">Projects.</h1>

          <div className="flex  items-start justify-start  gap-4 flex-wrap ">
            <Cards />
          </div>
          <Link className="flex items-center justify-center pt-7 gap-2" href={'/projects'}>
            See all Projects{" "}
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
        </div>

        {/*upcoming projects section  */}
        <div className="w-full flex flex-col pt-10">
          <h1 className="font-bold text-4xl py-6 tracking-tighter">Upcoming Projects.</h1>
          <div className="flex flex-wrap items-center justify-between flex-col gap-4">
            <UpcomingCards />
          </div>
        </div>

        {/* Tech Videos */}
        <div className="w-full flex flex-col pt-10">
          <h1 className="font-bold text-4xl py-6 pt-9 tracking-tighter">Tech Videos.</h1>
          <div className="flex flex-col items-center justify-between gap-4">
            <Techvideos />
          </div>
          <Link className="flex items-center justify-center pt-7 gap-2" href={'/videos'}>
            See all Videos{" "}
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
        </div>


        {/* Life Change Log and Updates */}

        <div className="w-full flex flex-col pt-10">
          <h1 className="font-bold text-4xl py-6 tracking-tighter">Life Changelog & Updates.</h1>
          <div className="flex flex-col items-center justify-between gap-4">
          <LifeChangelog/>
        {ok && <LifeChangeLogRemaining/>}
           <button className="flex items-center justify-center pt-7 gap-2" onClick={() => {setOk(!ok)}}>{ok ? "Read less" : "Read More"} </button>
          </div>
        </div>

      <Footer/>
      </div>
    </div>
  );
};

export default Landing;
