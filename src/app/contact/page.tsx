"use client";
import React from "react";
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
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { error } from "console";

import { useToast } from "@/components/ui/use-toast";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
let day = weekday[d.getDay()];
let currentmonth = month[d.getMonth()];
let currentdate = d.getDate();
let currentyear = d.getFullYear();
let currenttime = d.toLocaleTimeString();

const myformate = `${day},${currentmonth} ${currentdate},${currentyear} at ${currenttime}`;

type curr = string;
const Contact = () => {
  // toast functionality

  const { toast } = useToast();

  const toastsend = () =>{


    if(true){

    
    toast({
      title: "Message Sent Successfully ✅",
      description: `${myformate}`,
    });
  }
  }



  // email form function

  const form = useRef(null);




  const sendEmail = (e: any) => {
    const formval = form.current!;
    e.preventDefault();

    emailjs
      .sendForm(
        "service_shfpbd5",
        "template_5ntlpkb",
        formval,
        "b0eT9zCja_21Wpu9I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    toastsend();


    // toast here
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Have a Question ? Drop in your message 👇🏻</CardTitle>
        <CardDescription>
          I won&apos;t take more than 10 seconds. Shoot your shot 😎.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Enter your name."
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Type your Email here.."
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="message">Message</Label>
              {/* <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select> */}
              <textarea
                placeholder="Type your message here..."
                className="p-1 h-[10rem] border dark:border-gray-800 border-gray-200 rounded-sm dark:bg-[#020817] bg-white"
                id="message"
                name="message"
                required
              ></textarea>
            </div>
          </div>
          <div className="pt-4 pb-1 px-0">
            {/* <Button variant="outline">Cancel</Button> */}
            <button
              type="submit"
              className="bg-black  text-white border border-gray-700 p-1 rounded-md px-3 font-inter font-semibold"
             
            >
              Submit
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contact;
