import Image from "next/image";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Footer from "@/components/Footer";

// container page
export default function Home() {
  return (
    <div className="w-[100%] container mx-[10rem] ">
        <Landing />
    </div>
  );
}
