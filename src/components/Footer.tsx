import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex items-start justify-between gap-3 pt-[4rem] max-w-[60rem] w-full  flex-wrap pb-10">
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="/dashboard" className="hover:text-gray-900">Dashboard</Link>
          <Link href="/blogs" className="hover:text-gray-900">Blog</Link>
          <Link href="/projects" className="hover:text-gray-900">Projects</Link>
          <Link href="/links" className="hover:text-gray-900">Links</Link>
        </div>
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
          <Link href="https://github.com/BroLetsCodeIt" target="_blank" className="hover:text-gray-900">Github</Link>
          <Link href="https://twitter.com/KKaparvena_7" className="hover:text-gray-900" target="_blank">Twitter</Link>
          <Link href="https://www.linkedin.com/in/kamlesh-kaparvena/" className="hover:text-gray-900" target="_blank">LinkedIn</Link>
          <Link href="https://www.upwork.com/freelancers/~01da32b7af9b8d2147" className="hover:text-gray-900" target="_blank">Freelancing</Link>
        </div>
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
          <Link href="/snippets" className="hover:text-gray-900">Snippets</Link>
          <Link href="/resources" className="hover:text-gray-900">Resources</Link>
          <Link href="https://www.youtube.com/channel/UCYj8M-fbbyR7nHMRHVH3iUg" className="hover:text-gray-900" target="_blank">Youtube</Link>
        </div>
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
            <Link href="https://codeforces.com/profile/kamlesh_kaparvena" className="hover:text-gray-900" target="_blank">Codeforces</Link>
            <Link href="https://www.codechef.com/users/vid_it_0076" className="hover:text-gray-900" target="_blank">Codechef</Link>
            <Link href="https://www.hackerearth.com/@kamleshkaparvena3570" className="hover:text-gray-900" target="_blank">HackerEarth</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
