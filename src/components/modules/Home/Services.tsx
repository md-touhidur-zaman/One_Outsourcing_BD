"use client";
import { ArrowDownRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import serviceImg1 from "../../../../public/assets/images/serviceImages/Web_Design.png";
import serviceImg2 from "../../../../public/assets/images/serviceImages/Web_Development.png";
import serviceImg3 from "../../../../public/assets/images/serviceImages/poster design.png";
import Image from "next/image";

export default function Services() {
  const [open, setOpen] = useState(0);
  return (
    <div className=" md:border-l md:border-l-muted-foreground md:border-r md:border-r-muted-foreground">
      <div className="flex flex-col items-center space-y-3 py-10">
        <h1 className="px-3 py-1 text-center border rounded-lg">Services</h1>
        <h1 className="text-3xl font-bold">Creative & Modern Services</h1>
      </div>

      <div>
        <div
          className={cn(
            "px-3 py-8 flex justify-between items-center border transition-all duration-300 ease-in-out cursor-pointer relative",
            {
              "bg-yellow-300 ": open === 1,
            },
          )}
          onMouseEnter={() => setOpen(1)}
          onMouseLeave={() => setOpen(0)}
        >
          <p>01</p>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Web Design</h1>
          <ArrowDownRight
            className={cn("font-bold transition-all duration-300 ease-in-out", {
              "-rotate-90": open === 1,
            })}
          />

          <div
            className={cn("absolute right-[20%] hidden top-10 -rotate-12 transition-all duration-300 ease-in-out z-80", {
              "inline-block": open === 1,
            })}
          >
            <div className="relative h-48 w-32">
              <Image
                src={serviceImg1}
                alt="web design"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>


        <div
          className={cn(
            "px-3 py-8 flex justify-between items-center border transition-all duration-300 ease-in-out cursor-pointer relative",
            {
              "bg-yellow-300 ": open === 2,
            },
          )}
          onMouseEnter={() => setOpen(2)}
          onMouseLeave={() => setOpen(0)}
        >
          <p>02</p>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Website Development</h1>
          <ArrowDownRight
            className={cn("font-bold transition-all duration-300 ease-in-out", {
              "-rotate-90": open === 2,
            })}
          />

          <div
            className={cn("absolute right-[20%] hidden top-10 -rotate-12 transition-all duration-300 ease-in-out  z-80", {
              "inline-block": open === 2,
            })}
          >
            <div className="relative h-48 w-32">
              <Image
                src={serviceImg2}
                alt="web development"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div
          className={cn(
            "px-3 py-8 flex justify-between items-center border transition-all duration-300 ease-in-out cursor-pointer relative",
            {
              "bg-yellow-300 ": open === 3,
            },
          )}
          onMouseEnter={() => setOpen(3)}
          onMouseLeave={() => setOpen(0)}
        >
          <p>01</p>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Digital Marketing</h1>
          <ArrowDownRight
            className={cn("font-bold transition-all duration-300 ease-in-out", {
              "-rotate-90": open === 3,
            })}
          />

          <div
            className={cn("absolute right-[20%] hidden top-10 -rotate-12 transition-all duration-300 ease-in-out z-80", {
              "inline-block": open === 3,
            })}
          >
            <div className="relative h-48 w-32">
              <Image
                src={serviceImg3}
                alt="web design"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
