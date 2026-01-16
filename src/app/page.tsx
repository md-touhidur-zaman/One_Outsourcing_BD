import HeroSection from "@/components/modules/Home/HeroSection";
import Navbar from "@/components/Shared/Navbar";
import heroBannerImg1 from "../../public/assets/images/heroimages/hero_banner_img_1.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[#111111] relative overflow-hidden">
        <div className="w-[45%] h-[45%] rounded-full -rotate-45 bg-linear-to-r from-[#f1b84a] to-yellow-500  absolute top-20 left-0 bottom-40 opacity-60 blur-3xl "></div>

        <div className="bg-[#1A1A1A] shadow-2xl fixed top-0 w-dvw z-80">
          <Navbar />
        </div>

        

        <div className="container mx-auto">
          <HeroSection />
        </div>

        <div className="absolute top-2/3  md:w-lg lg:w-3xl right-0 z-50">
          <div className="relative w-80 md:w-full h-100">
            <Image
              src={heroBannerImg1}
              alt="hero1"
              quality={100}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
