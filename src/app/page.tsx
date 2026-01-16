import HeroSection from "@/components/modules/Home/HeroSection";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";
import heroBannerImg1 from "../../public/assets/images/heroimages/hero_banner_img_1.jpg"

export default function Home() {
  return (
    <>
      <div className="bg-[#111111] relative overflow-hidden">

        <div className="w-[45%] h-[45%] rounded-full -rotate-45 bg-linear-to-r from-[#f1b84a] to-yellow-500  absolute top-20 left-0 bottom-40 opacity-60 blur-3xl ">
          <h1 className="text-white border border-red-500">
          </h1>
        </div>

       <div className="absolute top-1/2 min-w-3xl right-0 z-50 ">
         <div className="relative w-full h-100">

          <Image src={heroBannerImg1} alt="hero1" fill style={{objectFit:"cover"}}/>

        </div>
       </div>

        <div className="bg-[#1A1A1A] shadow-2xl sticky ">
          <Navbar />
        </div>

        <div className="container mx-auto">
          <HeroSection />
        </div>

        
        

        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,#facc15_0%,#ca8a04_30%,rgba(0,0,0,0.9)_60%,#000_100%)]"></div> */}
      </div>
    </>
  );
}
