import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

const Resume = () => {
  return (
    <div className="mt-20 sm:container mx-auto sm:w-[60%] ">
      <div className="flex items-center justify-center flex-col h-[63rem] z-[-2]">
        <embed
          src="/Kamlesh_kaparvena_Resume.pdf"
          width="100%"
          height="110%"
          type="application/pdf"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
