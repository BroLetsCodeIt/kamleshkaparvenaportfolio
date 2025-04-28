"use client";
import React, { useEffect, useRef, useState } from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import {
  IconBrandYoutube,
  IconSquareRoundedArrowRight,
} from "@tabler/icons-react";
import Cards, { UpcomingCards } from "./Cards";
import Techvideos from "./Techvideos";
import LifeChangelog, { LifeChangeLogRemaining } from "./LifeChangelog";
import Link from "next/link";
import Footer from "./Footer";
import BlogSection from "./blogs";
import ProjectSection from "./projects";
import UpcomingProjects from "./upcomingprojects";

const texts = [
  "Frontend Developer",
  "Backend Developer",
  "UI / UX Designer",
  "Competitive Coder",
];

const Landing = () => {
  const [ok, setOk] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" mt-[10rem] min-h-[200vh] p-2 ">
      {/* <motion.h2 className="dark:text-white text-neutral-800 text-3xl font-bold mb-20 text-center">
        <span className="flex flex-col gap-3">
          <span className="sm:text-4xl">Hey There 👋 I am</span>
          <motion.div
        key={index}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 1 }}
        className="text-5xl"
      >
        {texts[index]}
      </motion.div>
          <span className="text-sm text-gray-500 ">
            Converting Ideas into Reality ✨
          </span>
        </span>
      </motion.h2> */}

      {/* my div */}

      <div className="  flex flex-col container mx-auto  max-w-[45rem] rounded-tr-2xl">
        {/* me and logo */}
        <div className="flex items-center justify-between">
          <div className="flex items-start justify-between flex-col gap-2">
            <div className="text-4xl font-bold">Kamlesh S.K</div>
            <div className="text-gray-600 dark:text-white text-sm">
              Building{" "}
              <span className="bg-gray-200 font-bold p-0.5 rounded-sm px-1 dark:text-white dark:bg-gray-700/50 ">
                BroLetsCodeIt{" "}
              </span>
              &nbsp;and other{" "}
              <span className="bg-gray-200 font-bold p-0.5 rounded-sm px-1 dark:bg-gray-700/50 dark:text-white">
                cool things
              </span>
            </div>
            <div className="flex flex-col text-sm">
              <span>Software Engineer building SaaS Product and Web Apps.</span>
              <span>
                Connect with me on{" "}
                <Link
                  href={"https://www.youtube.com/@Coding-Edu"}
                  target="_blank"
                  className="font-bold"
                >
                  X
                </Link>{" "}
                for Coding and Algorithms.
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            <Image
              src={"/myimag01.webp"}
              alt="logoimg"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
        </div>

        <BlogSection />

        <ProjectSection />

        {/*upcoming projects section  */}
        <UpcomingProjects/>

        {/* Tech Videos */}
        <div className="w-full flex flex-col pt-10">
          <h1 className="font-bold text-3xl py-6 pt-9 tracking-tight">
            Tech Videos.
          </h1>
          <div className="flex flex-col items-center justify-between gap-4">
            <Techvideos />
          </div>
          <Link
            className="flex items-center justify-center pt-7 gap-2 text-xs"
            href={"/videos"}
          >
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
          <h1 className="font-bold text-3xl py-6 tracking-tight">
            Life Changelog & Updates.
          </h1>
          <div className="flex flex-col items-center justify-between gap-4">
            <LifeChangelog />
            {ok && <LifeChangeLogRemaining />}
            <button
              className="flex items-center justify-center pt-7 gap-2 text-xs"
              onClick={() => {
                setOk(!ok);
              }}
            >
              {ok ? "Read less" : "Read More"}{" "}
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Landing;
