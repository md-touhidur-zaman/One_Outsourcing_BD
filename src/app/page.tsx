import HeroSection from "@/components/modules/Home/HeroSection";
import Navbar from "@/components/Shared/Navbar";
// import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="bg-[#111111] relative ">
        <div className="overflow-clip w-[45%] h-[45%] rounded-full md:-rotate-45 bg-linear-to-r from-[#f1b84a] to-yellow-500  absolute top-20 left-0 bottom-40 opacity-60 blur-3xl "></div>

        <div className="bg-[#1A1A1A] shadow-2xl fixed top-0 w-dvw z-80">
          <Navbar />
        </div>

        

        <div className="container mx-auto ">
          <HeroSection />
        </div>
      </div>
    </>
  );
}
