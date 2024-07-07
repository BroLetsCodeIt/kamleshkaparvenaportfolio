"use client";
import { AnimatePresence, easeInOut } from "framer-motion";
import { ThemeProvider } from "next-themes";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { Badge } from "./ui/Bagde";
import { SparklesPreview } from "./SparklePreview";
import Bot from "./smallui/Bot";
import { Toaster } from "./ui/toaster";

interface childrenProps {
  children : React.ReactNode
}

const TransitionProvider = ({children}:childrenProps) => {


  
  // const Params = useParams();
  const Pathname = usePathname();
  // console.log(Params)
  // console.log("path" , Pathname)

  return (
    <>
      <AnimatePresence>
        <div className="fixed bottom-0 sm:block right-0  border-2 border-gray-200 rounded-full flex items-center justify-center p-2 mr-6 mb-6">
          <Bot/>
        </div>
       
        <motion.div
          className="container mx-auto w-[100%] h-screen relative flex items-start  justify-center "
          animate={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{
            duration: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          key={Pathname}
        >
          {/* <motion.div key={Pathname} className="w-[100%] bg-black  z-[5] text-white flex items-center justify-center " animate={{height:'0vh' , display:'none'}}
        exit={{height:'100vh'}} transition={{duration:5 , ease:"easeInOut"}}>
          {(Pathname == "/contact" &&  <SparklesPreview titlename={'Contact Page'}/>) ||
            (Pathname == "/aboutus" && <SparklesPreview titlename={'About Page'}/>) ||
            (Pathname == "/projects" && <SparklesPreview titlename={'Project Page'}/>) ||
            (Pathname == "/resume" && <SparklesPreview titlename={'Resume Page'}/>) ||
            (Pathname == "/" && <SparklesPreview titlename={'Home Page'}/>)}
        </motion.div> */}
          <Image
            alt=""
            src={"/docs.avif"}
            className="absolute top-0 z-[-3]"
            fill
          />
        <div className="absolute z-[-10] top-0 left-0 right-0 bottom-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
            <Toaster/>
          </ThemeProvider>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default TransitionProvider;
