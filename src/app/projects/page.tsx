"use client";

import React, { useRef } from "react";
import Image from "next/image";
// import { ParallaxScrollSecond } from "'../../components/ui/parallex-scroll-2";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll-2";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ThreeDCardDemo } from "@/components/smallui/hovercard";
import { CardItem } from "@/components/ui/3d-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";

const MovingLine = () => {
  const transition = {
    duration: 4,
    ease: "easeInOut",
  };

  const ref = useRef<any>(null);

  // Track scroll progress, lies between 0 and 1.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // when scroll progress reached 1, path length becomes 0.
  const pathLengthValue = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const PATH = "M0.5 0.980671L0.5 1566.02";
  return (
    <div
      className="max-w-7xl mx-auto flex flex-row space-x-10 items-start w-full mt-40 "
      ref={ref}
    >
      <svg
        width="1"
        height="1567"
        viewBox="0 0 1 1567"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path d={PATH} stroke="url(#paint0_linear_207_38)" />
        <defs>
          <linearGradient
            id="paint0_linear_207_38"
            x1="1"
            y1="-102.823"
            x2="1"
            y2="1566.02"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3879E7" stop-opacity="0" />
            <stop offset="1" stop-color="#3879E7" />
          </linearGradient>
        </defs>
        <motion.path
          // animatng pathLength value, goes from 1 to 0
          style={{
            pathLength: useSpring(pathLengthValue, {
              stiffness: 500,
              damping: 100,
            }),
          }}
          transition={transition}
          d={PATH}
          stroke="var(--blue-500)"
          strokeOpacity="1"
          strokeLinecap={"round"}
          strokeWidth="3"
        />
      </svg>
      <div className="flex flex-col w-full">
        <Content
          projectname="Full Stack Projects"
          projectdescription="ReactJS , NextJS , TailwindCSS , FramerMotion"
          projectimages={fullstackimages}
          
        />
        <Content
          projectname="Frontend Projects"
          projectdescription="JavaScript , JQuery , TailwindCSS , GSAP , HTML ,CSS."
          projectimages={frontendimages}
        />
        <Content
          projectname="Python Projects"
          projectdescription="Tkinter , CustomTkinter , Python"
          projectimages={pythonimages}
        />
        <Content
          projectname="Rust Projects"
          projectdescription="Rust"
          projectimages={rustimages}
        />
        <Content
          projectname="Mobile Application"
          projectdescription="React Native"
          projectimages={mobileimages}
        />
        <Content
          projectname="DevOps Projects"
          projectdescription="DevOps , Docker , Kubernetes"
          projectimages={devopsimages}
        />
      </div>
    </div>
  );
};

const fullstackimages = [
  {
    imag: "/expense_tracker.png",
    desc: "Expense Tracker",
    name: ["NextJS","TailwindCSS","Neon","Postgresql", "Drizzle ORM"],
    live : "https://github.com/BroLetsCodeIt",
    githublink : ""
  },
  {
    imag: "/code_collab.jpg",
    desc: "CodeCollab.io",
    name: ["Socket.io","ReactJS","TailwindCSS","Vite"],
    live : "",
    githublink : ""
  },
  {
    imag: "/figletlogo.png",
    desc: "Fitness Web App",
    name: ["ReactJS","TailwindCSS","ChartJS"],
    live : "",
    githublink : ""
  },
];

const frontendimages = [
  {
    imag: "/myimag01.webp",
    desc: "Rejoice",
    name: ["HTML","CSS","JS","GSAP","Locomotive"],
    live : "",
    githublink : ""
  },
  {
    imag: "/myimag01.webp",
    desc: "Miranda",
    name: ["HTML","CSS","JS","GSAP","Locomotive"],
    live : "",
    githublink : ""
  },
  {
    imag: "/myimag01.webp",
    desc: "Equilibrium",
    name: ["HTML","CSS","JS","GSAP","Locomotive"],
    live : "",
    githublink : ""
  },
];
const pythonimages = [
  {
    imag: "/myimag01.webp",
    desc: "IMS",
    name: ["Tkinter","Custom Tkinter","Python","Sales"],
    live : "",
    githublink : ""
  },
  {
    imag: "/myimag01.webp",
    desc: "Friends Finder",
    name: ["ReactJS","TailwindCSS","Flask","Sqlite"],
    live : "",
    githublink : ""
  },
  {
    imag: "/myimag01.webp",
    desc: "Image Edit",
    name: ["ReactJS","TailwindCSS","Flask"],
    live : "",
    githublink : ""
  },
  
];

const rustimages = [
  {
    imag: "/myimag01.webp",
    desc: "Rust Game",
    name: ["Rust","Terminal"],
    live : "",
    githublink : ""
  },
 
];

const mobileimages = [
  {
    imag: "/myimag01.webp",
    desc: "Travel Go",
    name: ["React Native","TailwindCSS","Clerk"],
    live : "",
    githublink : ""
  },
  
];

const devopsimages = [
  {
    imag: "/myimag01.webp",
    desc: "Fitness Web App",
    name: ["ReactJS","TailwindCSS","ChartJS"],
    live : "",
    githublink : ""
  },
  {
    imag: "/myimag01.webp",
    desc: "Fitness Web App",
    name: ["ReactJS","TailwindCSS","ChartJS"],
    live : "",
    githublink : ""
  },
  {
    imag: "/myimag01.webp",
    desc: "Fitness Web App",
    name: ["ReactJS","TailwindCSS","ChartJS"],
    live : "",
    githublink : ""
  },
  {
    imag: "/myimag01.webp",
    desc: "Fitness Web App",
    name: ["ReactJS","TailwindCSS","ChartJS"],
    live : "",
    githublink : ""
  },
  {
    imag: "/myimag01.webp",
    desc: "Fitness Web App",
    name: ["ReactJS","TailwindCSS","ChartJS"],
    live : "",
    githublink : ""
  },
  {
    imag: "/myimag01.webp",
    desc: "Fitness Web App",
    name: ["ReactJS","TailwindCSS","ChartJS"],
    live : "",
    githublink : ""
  },
  {
    imag: "/myimag01.webp",
    desc: "Fitness Web App",
    name: ["ReactJS","TailwindCSS","ChartJS"],
    live : "",
    githublink : ""
  },
];
export default MovingLine;

const Content = (props: {
  projectname: string;
  projectdescription: string;
  projectimages: { imag: string; desc: string; name: string[] ; live : string ;
    githublink : string;}[];
 
}) => {
  return (
    <div className=" w-full mb-10 overflow-auto">
      <p className="text-3xl font-bold text-black dark:text-white">
        {props.projectname}
      </p>
      <p className="text-base font-normal text-neutral-500 dark:text-[#CBCCCD] ">
        {props.projectdescription}
      </p>
      <div className="w-full overflow-scroll flex  gap-3" >
        {/* <div className="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 mt-4 "> */}

        {props.projectimages.map((val, key) => {
          // console.log(val);

          return (
            <>
              {/* <Image
            key={key}
            src={val}
            with={400}
            height={400}
            alt="im"
            className="mt-4 rounded-md cursor-pointer hover:shadow-lg inset-2"
            />  */}

              <Card className="min-w-[350px] mt-4 max-w-[350px] flex flex-col justify-between" key={key}>
                <CardHeader>
                  <CardTitle>{val.desc}</CardTitle>
                  <div  className="flex gap-2  flex-wrap">
                  {
                    val.name.map((na , ind) => {
                       return(

                          <CardDescription key={ind} className="bg-gray-50 px-1 rounded-sm text-[0.8rem] dark:bg-gray-900">{na}</CardDescription>
                        )
                      })
                    }
                    </div>
                  
                </CardHeader>
                <CardContent>
                  <div className="w-full items-center gap-4">
                    <Image
                      src={val.imag}
                      width={300}
                      height={300}
                      alt="im"
                      className="rounded-md cursor-pointer hover:shadow-lg inset-2 dark:opacity-70"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link className="bg-gray-100 px-3 py-1 rounded-md text-sm dark:bg-gray-800" href={val.live}>Live Demo</Link>
                  <Link className="bg-gray-900 text-white px-4 py-1 rounded-md text-sm" href={val.githublink}>Github</Link>
                  {/* <Button variant="outline" className="text-sm">Live Demo</Button> */}
                  {/* <Button className="text-sm">Github</Button> */}
                </CardFooter>
              </Card>
            </>
          );
        })}

        {/* </div> */}
      </div>
    </div>
  );
};

// const Project = () => {
//   return (
//    <>
// {/* <h1 className='text-6xl  uppercase font-extrabold'>Projects.</h1> */}

// {/* <ParallaxScrollSecond images={images}/> */}

//      <h1 className='text-6xl  uppercase font-extrabold'>Projects.</h1>
//     <div className='flex overflow-auto mt-9 rounded-sm gap-1 flex-col'>
//         <Image src={'/myimag01.webp'} alt='im' width={700} height={700}/>
//         <Image src={'/myimag01.webp'} alt='im' width={300} height={300}/>
//         <Image src={'/myimag01.webp'} alt='im' width={300} height={300}/>
//         <Image src={'/myimag01.webp'} alt='im' width={300} height={300}/>
//         <Image src={'/myimag01.webp'} alt='im' width={300} height={300}/>
//         <Image src={'/myimag01.webp'} alt='im' width={300} height={300}/>
//         <Image src={'/myimag01.webp'} alt='im' width={300} height={300}/>
//     </div>
//    </>
//   )
// }
// const images = [
//   '/myimag01.webp',
//   '/myimag01.webp',
//   '/myimag01.webp',
//   '/myimag01.webp',
//   '/myimag01.webp',
//   '/myimag01.webp',
//   '/myimag01.webp',
//   '/myimag01.webp',
//   '/myimag01.webp',
//   '/myimag01.webp',
//   '/myimag01.webp',
//   '/myimag01.webp',
// ];
// export default Project
