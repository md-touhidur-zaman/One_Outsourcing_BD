"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
export default function About() {
  return (
    <>
      <div className="p-10 md:border-l md:border-l-muted-foreground md:border-r md:border-r-muted-foreground flex flex-col-reverse lg:flex-row gap-10 justify-center items-center ">
        <div className="lg:w-1/2 flex justify-center lg:-mt-24">
          <div className="relative space-y-2">
            <div className="h-52 w-52 rounded-full border-2 border-black flex justify-center items-center p-2 font-bold">
              Web Development
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="md:absolute md:top-32 md:left-16 h-52 w-52 rounded-full bg-black text-white flex justify-center items-center p-2 font-bold"
            >
              Web Design
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="md:absolute md:top-60 md:left-36 h-52 w-52 rounded-full bg-yellow-400  flex justify-center items-center p-2 font-bold"
            >
              Digital Marketing
            </motion.div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="space-y-16">
            <p className="px-3 py-2 border border-foreground/30 rounded-lg w-1/3 text-center font-bold">
              About Us
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">
              Technology Transforming Ideas into Reality Empowering Brands with
              Engaging{" "}
              <span className="text-yellow-400 py-0">One Outsourcing BD</span>
            </h1>

            <p className="text-muted-foreground/80">
              At our web design agency, we specialize in creating visually
              stunning and highly functional websites that help businesses stand
              out in the digital world. Our team of talented designers and
              developers are passionate about crafting
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 flex justify-center items-center bg-black rounded-full">
                  <Check className="text-white font-bold" />
                </div>
                <div>
                  <p className="font-bold">Website Development</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 flex justify-center items-center bg-black rounded-full">
                  <Check className="text-white font-bold" />
                </div>
                <div>
                  <p className="font-bold">Website Design</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 flex justify-center items-center bg-black rounded-full">
                  <Check className="text-white font-bold" />
                </div>
                <div>
                  <p className="font-bold">Digital Marketing</p>
                </div>
              </div>
            </div>

            <div>
              <Button className="bg-white hover:bg-yellow-400 text-foreground px-5 py-5 font-bold border cursor-pointer ease-in transition-all duration-300">
                Explore Our Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:border-l md:border-l-muted-foreground md:border-r md:border-r-muted-foreground relative w-full h-60 md:h-80 md:mt-52 lg:mt-0 lg:h-180 ">
        <Image
          src={"/assets/images/aboutImages/About_Us_Img.png"}
          alt="about us img"
          fill
          style={{ objectFit: "fill" }}
        />
      </div>
    </>
  );
}
