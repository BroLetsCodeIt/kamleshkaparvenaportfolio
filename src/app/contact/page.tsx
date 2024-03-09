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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Contact = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Have a Question ? Drop in your message 👇🏻</CardTitle>
        <CardDescription>
          I won&apos;t take more than 10 seconds. Shoot your shot 😎.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email Address</Label>
              <Input
                id="name"
                type="email"
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
                className="p-1 h-[10rem] border-2 border-gray-200 rounded-sm "
                id="message"
                required
              ></textarea>
            </div>
          </div>
          <CardFooter className="pt-4 pb-1 px-0">
            {/* <Button variant="outline">Cancel</Button> */}
            

            <Button>Submit</Button>
            
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contact;
