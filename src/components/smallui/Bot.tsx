import React from "react";
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

import { MessageCircleMore } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
const Bot = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <MessageCircleMore size={30} />
        </PopoverTrigger>
        <PopoverContent className="w-[30rem] mr-4 mb-4">
          <Card className="w-full p-0">
            <CardHeader>
              <CardTitle className="text-lg">
                Want to hire me as Freelancer ? Let&apos;s discuss.
              </CardTitle>
              <CardDescription className="text-sm">Drop your message and let&apos;s discuss about your project.</CardDescription>
            </CardHeader>
          </Card>
          <CardFooter className="pt-4 pb-1 px-0 w-full">
            {/* <Button variant="outline">Cancel</Button> */}
            <a href="https://wa.me/919619659103" target="_blank" rel="noopener noreferrer">

            <Button className="w-full">Whatsapp</Button>
            </a>
          </CardFooter>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Bot;
