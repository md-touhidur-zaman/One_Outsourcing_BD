import Image from "next/image";
import circleImage from "../../../../public/assets/images/heroimages/hero_image_circle.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroBannerImg2 from "../../../../public/assets/images/heroimages/hero_banner_img_2.jpg";
import heroBgDotted from "../../../../public/assets/images/heroimages/hero_bg_dotted.jpg";
import heroBannerImg1 from "../../../../public/assets/images/heroimages/hero_banner_img_1.jpg";

export default function HeroSection() {
  return (
    <div className="relative pb-0 p-5 lg:p-2  md:border-l md:border-l-muted-foreground md:border-r md:border-r-muted-foreground min-h-dvh z-10">
      <div className="absolute top-10 md:top-20 right-4 md:right-[10%] lg:right-[35%] animate-spin animation-duration-[10s]">
        <Image
          src={circleImage}
          alt="circle"
          width={300}
          height={300}
          sizes="
            (max-width: 640px) 160px,
            (max-width: 1024px) 220px,
            300px
          "
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-55 md:h-55 lg:w-65 lg:h-65"
          quality={75}
        />
      </div>

      <div className="text-white mt-20  lg:mt-32 space-y-10 ">
        <h1 className="text-5xl md:text-7xl lg:text-9xl  font-bold">
          Building <br />
          Responsive <br />
          Websites
        </h1>
        <p className="text-justify text-sm text-muted/80 max-w-full md:max-w-1/2">
          Web design is a critical aspect of creating an effective online
          presence for any business or individual. A well-designed website not
          only reflects a brand&apos;s identity but also enhances user
          experience, ensuring visitors can easily
        </p>

        <Button
          variant={"outline"}
          className=" bg-[#f1b84a] border-none text-foreground/60 font-bold"
          size={"lg"}
        >
          <Link href="/contact-us">Explore Our Projects</Link>
        </Button>

        <p className="font-bold">5 + M Trusted Clients</p>
      </div>

      <div className="mt-5 flex">
        <div className="relative h-16 w-16 rounded-full">
          <Image
            className="h-16 w-16 rounded-full border border-white"
            src={"/assets/images/heroimages/user1.jpg"}
            alt="user1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative h-16 w-16 rounded-full -ml-3">
          <Image
            className="h-16 w-16 rounded-full border border-white"
            src={"/assets/images/heroimages/user2.jpg"}
            alt="user1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative h-16 w-16 rounded-full -ml-3">
          <Image
            className="h-16 w-16 rounded-full border border-white"
            src={"/assets/images/heroimages/user3.jpg"}
            alt="user1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative h-16 w-16 rounded-full -ml-3">
          <Image
            className="h-16 w-16 rounded-full border border-white"
            src={"/assets/images/heroimages/user4.jpg"}
            alt="user1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative h-16 w-16 rounded-full -ml-3">
          <Image
            className="h-16 w-16 rounded-full border border-white"
            src={"/assets/images/heroimages/user5.jpg"}
            alt="user1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative h-16 w-16 rounded-full -ml-3">
          <Image
            className="h-16 w-16 rounded-full border border-white"
            src={"/assets/images/heroimages/user6.jpg"}
            alt="user1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="lg:absolute  lg:top-125 w-full md:w-lg lg:w-3xl md:right-0 z-50 md:-mr-48 mt-2">
          <div className="relative w-full  md:w-full h-100 ">
            <Image
              src={heroBannerImg1}
              alt="hero1"
              quality={100}
              fill
              style={{ objectFit: "cover" }}
              className="overflow-hidden"
            />
          </div>
        </div>


      <div className="flex justify-end  ">
        <div className="relative  w-60 h-96 -mr-5 overflow-hidden lg:-mr-48 lg:-mt-5">
          <Image
            className="rotate-x-180 w-60 h-96"
            src={"/assets/images/heroimages/hero_image_circle_1.png"}
            alt="user1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-10 ">
        <div className="w-full lg:w-1/3 lg:-ml-48 -mt-20 lg:-mt-20 z-80">
          <div className="relative w-full h-100 lg:w-170 lg:h-100">
            <Image
              src={heroBannerImg2}
              alt="hero2"
              quality={100}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="w-dvw lg:w-2/3 relative lg:-mt-36 lg:-mr-48">
          <div className="bg-yellow-400 w-full h-100 lg:h-80  z-60  rounded-xl  ">

            
            <div className="absolute w-full h-100 lg:h-80 opacity-20">
              <div className="relative lg:w-full h-full">
                <Image
                  src={heroBgDotted}
                  alt="dotted"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="z-70 flex flex-col md:flex-row justify-center md:justify-between  items-center gap-10 h-full w-full px-10 py-5">
              <div className="z-80 space-y-5 text-center md:text-start">
                <h1 className="text-3xl md:text-5xl font-bold">15 k+</h1>
                <p className="bg-black text-white font-bold px-3 py-2 rounded-lg">
                  Project Complete
                </p>
              </div>
              <div className="z-80 space-y-5 text-center md:text-start">
                <h1 className="text-3xl md:text-5xl font-bold">10 k+</h1>
                <p className="bg-black text-white font-bold px-3 py-2 rounded-lg">
                  Happy Customers
                </p>
              </div>
              <div className="z-80 space-y-5 text-center md:text-start">
                <h1 className="text-3xl md:text-5xl font-bold">03 +</h1>
                <p className="bg-black text-white font-bold px-3 py-2 rounded-lg">
                  Years Of Experience
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden lg:overflow-visible  text-white py-2">
            <div className="whitespace-nowrap animate-marquee  font-bold text-7xl md:text-9xl text-muted-foreground/80 p-2">
              One Outsourcing BD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
