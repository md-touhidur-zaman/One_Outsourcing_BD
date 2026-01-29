"use client";

import Image from "next/image";
import circleImage from "../../../../public/assets/images/heroimages/hero_image_circle.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroBgDotted from "../../../../public/assets/images/heroimages/hero_bg_dotted.jpg";
import heroBannerImg1 from "../../../../public/assets/images/heroimages/hero_banner_img_1.jpg";
import { motion } from "motion/react";
export default function HeroSection() {
  return (
    <div className="relative container mx-auto pb-0 p-5 lg:px-2  md:border-l md:border-l-muted-foreground md:border-r md:border-r-muted-foreground min-h-dvh z-10">
      <div className="absolute top-10 lg:top-32 right-4 md:right-[10%] lg:right-[10%] xl:right-[20%] animate-spin animation-duration-[10s]">
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
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
          }}
          className="relative h-16 w-16 rounded-full -ml-3"
        >
          <Image
            className="h-16 w-16 rounded-full border border-white"
            src={"/assets/images/heroimages/user2.jpg"}
            alt="user1"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="relative h-16 w-16 rounded-full -ml-3"
        >
          <Image
            className="h-16 w-16 rounded-full border border-white"
            src={"/assets/images/heroimages/user3.jpg"}
            alt="user1"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="relative h-16 w-16 rounded-full -ml-3"
        >
          <Image
            className="h-16 w-16 rounded-full border border-white"
            src={"/assets/images/heroimages/user4.jpg"}
            alt="user1"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="relative h-16 w-16 rounded-full -ml-3"
        >
          <Image
            className="h-16 w-16 rounded-full border border-white"
            src={"/assets/images/heroimages/user5.jpg"}
            alt="user1"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
          className="relative h-16 w-16 rounded-full -ml-3"
        >
          <Image
            className="h-16 w-16 rounded-full border border-white"
            src={"/assets/images/heroimages/user6.jpg"}
            alt="user1"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex justify-end w-full mt-5 lg:-mt-52"
      >
        <div className="relative w-200 h-80">
          <Image
            src={heroBannerImg1}
            alt="hero1"
            quality={100}
            fill
            style={{ objectFit: "cover" }}
            className="overflow-hidden"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="lg:w-2/3 mt-10 relative z-60 overflow-hidden"
      >
        <div className="bg-yellow-400 w-full h-100 lg:h-80  z-60  rounded-t-xl">
          <div className=" w-full h-100 lg:h-80 opacity-20 right-0">
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

          <div className="absolute z-70 flex flex-col md:flex-row justify-center md:justify-between  items-center gap-10 h-full w-full px-10 py-5 top-0">
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
      </motion.div>

      <div className="overflow-hidden  text-white py-2 lg:absolute right-0 bottom-0 z-10">
        <div className="whitespace-nowrap animate-marquee  font-bold text-7xl md:text-9xl text-muted-foreground/80 p-2">
          One Outsourcing BD
        </div>
      </div>
    </div>
  );
}
