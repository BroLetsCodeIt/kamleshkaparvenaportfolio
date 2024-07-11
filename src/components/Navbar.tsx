"use client"
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import { AlignJustify, AlignLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import { Badge } from "./ui/Bagde";
import Gallery from "./smallui/Gallery";
const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <>
    
      <nav className="py-1 flex items-center justify-evenly top-0 w-[100%] text-center fixed  z-[50] mb-[2rem]  inset-x-0  bg-transparent  backdrop-blur-2xl">
        {/* left division */}
        <Link href={'/'}>
          {/* <Badge text="Kamlesh Kaparvena"/> */}
          <p className="bg-gray-100/5 px-2 py-1 rounded-md font-semibold shadow-sm border-2 border-gray-100/10">Kamlesh kaparvena {">"}</p>
        </Link>

        {/* right division */}
        <div className="flex items-center justify-between gap-6">
        <div className="flex items-center rounded-lg p-1">
            <Sheet>
              <SheetTrigger>
                {/* <Image
                  className="dark:bg-gray-800 dark:fill-white p-1 rounded-md stroke-red-400 stroke-3"
                  src={"./Menu_bar_menu.svg"}
                  alt="menu"
                  width={35}
                  height={35}
                /> */}
                <AlignLeft />    
              </SheetTrigger>
              <SheetContent className="w-[20rem]">
                <SheetHeader>
                  <SheetTitle>More Aboute Me.</SheetTitle>
                  <SheetDescription>
                  Tech enthusiast with a passion for innovation and problem-solving.
                  </SheetDescription>
                </SheetHeader>
                   <Gallery/>
              </SheetContent>
            </Sheet>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
        </div>
      </nav>
 
    </>
  );
};

export default Navbar;
