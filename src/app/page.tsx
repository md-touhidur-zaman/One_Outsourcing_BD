import About from "@/components/modules/Home/About";
import HeroSection from "@/components/modules/Home/HeroSection";
import Services from "@/components/modules/Home/Services";
import Navbar from "@/components/Shared/Navbar";
// import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className=" relative ">
        <div className="">
          <div className="w-80  h-60 rounded-full  bg-yellow-500 -rotate-12  absolute  top-[20%] left-0  opacity-60 blur-3xl overflow-x-hidden"></div>
          <div className="w-80  h-60 rounded-full  bg-yellow-500 -rotate-45  absolute  top-[15%] lg:left-52  opacity-60 blur-3xl overflow-x-hidden"></div>
        </div>

        <div className="bg-[#1A1A1A] shadow-2xl fixed top-0 w-dvw z-80">
          <Navbar />
        </div>

        <div className="bg-[#111111]">
          <HeroSection />
        </div>
      </div>

      <div className="container mx-auto" >
        <About/>
      </div>
      <div className="container mx-auto" >
        <Services/>
      </div>
    </>
  );
}
