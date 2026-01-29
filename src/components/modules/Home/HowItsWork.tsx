"use client";

import stepsImg1 from "../../../../public/assets/images/HowItsWorkImages/Discover.jpg";
import stepsImg2 from "../../../../public/assets/images/HowItsWorkImages/prototyping.jpg";
import stepsImg3 from "../../../../public/assets/images/HowItsWorkImages/developing.jpg";
import stepsImg4 from "../../../../public/assets/images/HowItsWorkImages/lunchAndSupport.jpg";
import Image from "next/image";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function HowItsWork() {
  const [active, setActive] = useState(0);
  return (
    <div className="container mx-auto md:border-l md:border-l-muted-foreground md:border-r md:border-r-muted-foreground py-10 space-y-10">
      <div className="flex flex-col items-center text-white space-y-5">
        <p className="px-3 py-2 rounded-lg text-center border font-bold">
          How It Works
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Step by Step Working Process</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:p-10">
        <div
          onMouseEnter={() => setActive(1)}
          onMouseLeave={() => setActive(0)}
          className="space-y-10 cursor-pointer"
        >
          <div className="relative w-full h-60 shadow-lg">
            <Image
              className="rounded-lg"
              src={stepsImg1}
              alt="discover"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="w-1/2 h-0 border border-dashed "></div>

            <div
              className={cn(
                "w-9 h-9 p-5  flex justify-center items-center text-white border border-background rounded-full",
                {
                  "bg-yellow-400 text-[#0E0D0D]": active === 1,
                },
              )}
            >
              <h1 className="text-lg">1</h1>
            </div>

            <div className="w-1/2 overflow-hidden  h-0 border border-dashed "></div>
          </div>

          <div
            className={cn(
              "bg-[#0E0D0D] shadow-2xl text-white px-5 py-10 text-center space-y-5 border border-muted-foreground rounded-lg h-60",
              {
                "bg-yellow-400 text-[#0E0D0D] transition-all duration-300 ease-linear":
                  active === 1,
              },
            )}
          >
            <h1 className="text-2xl font-bold">Discovery and Strategy</h1>
            <p>
              We begin by understanding your brand, goals, and target audience
              competitive
            </p>
          </div>
        </div>

        <div
          onMouseEnter={() => setActive(2)}
          onMouseLeave={() => setActive(0)}
          className="space-y-10 cursor-pointer flex flex-col-reverse lg:flex-col"
        >
          <div
            className={cn(
              "bg-[#0E0D0D] shadow-2xl text-white px-5 py-10 text-center space-y-5 border border-muted-foreground rounded-lg h-60",
              {
                "bg-yellow-400 text-[#0E0D0D] transition-all duration-300 ease-linear":
                  active === 2,
              },
            )}
          >
            <h1 className="text-2xl font-bold">Design Prototype</h1>
            <p>
              In this steps we design a sample of your website.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-10 lg:mt-0 ">
            <div className="w-1/2 h-0 border border-dashed "></div>

            <div
              className={cn(
                "w-9 h-9 p-5  flex justify-center items-center text-white border border-background rounded-full",
                {
                  "bg-yellow-400 text-[#0E0D0D]": active === 2,
                },
              )}
            >
              <h1 className="text-lg">2</h1>
            </div>

            <div className="w-1/2 overflow-hidden  h-0 border border-dashed "></div>
          </div>

          <div className="relative w-full h-60 shadow-lg">
            <Image
              className="rounded-lg"
              src={stepsImg2}
              alt="discover"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div
          onMouseEnter={() => setActive(3)}
          onMouseLeave={() => setActive(0)}
          className="space-y-10 cursor-pointer"
        >
          <div className="relative w-full h-60 shadow-lg">
            <Image
              className="rounded-lg"
              src={stepsImg3}
              alt="developing"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="w-1/2 h-0 border border-dashed "></div>

            <div
              className={cn(
                "w-9 h-9 p-5  flex justify-center items-center text-white border border-background rounded-full",
                {
                  "bg-yellow-400 text-[#0E0D0D]": active === 3,
                },
              )}
            >
              <h1 className="text-lg">3</h1>
            </div>

            <div className="w-1/2 overflow-hidden  h-0 border border-dashed "></div>
          </div>

          <div
            className={cn(
              "bg-[#0E0D0D] shadow-2xl text-white px-5 py-10 text-center space-y-5 border border-muted-foreground rounded-lg h-60",
              {
                "bg-yellow-400 text-[#0E0D0D] transition-all duration-300 ease-linear":
                  active === 3,
              },
            )}
          >
            <h1 className="text-2xl font-bold">Develop and Testing</h1>
            <p>
              In this phase we develop your website as per your requirements and test by using tools
            </p>
          </div>
        </div>

        <div
          onMouseEnter={() => setActive(4)}
          onMouseLeave={() => setActive(0)}
          className="space-y-10 cursor-pointer flex flex-col-reverse lg:flex-col"
        >
          <div
            className={cn(
              "bg-[#0E0D0D] shadow-2xl text-white px-5 py-7 text-center space-y-5 border border-muted-foreground rounded-lg h-60",
              {
                "bg-yellow-400 text-[#0E0D0D] transition-all duration-300 ease-linear":
                  active === 4,
              },
            )}
          >
            <h1 className="text-2xl font-bold">Lunch and Provide support</h1>
            <p>
              In this steps we live your website and provide support 30 days of free if you face any issue.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-10 lg:mt-0">
            <div className="w-1/2 h-0 border border-dashed "></div>

            <div
              className={cn(
                "w-9 h-9 p-5  flex justify-center items-center text-white border border-background rounded-full",
                {
                  "bg-yellow-400 text-[#0E0D0D]": active === 4,
                },
              )}
            >
              <h1 className="text-lg">4</h1>
            </div>

            <div className="w-1/2  h-0 border border-dashed "></div>
          </div>

          <div className="relative w-full h-60 shadow-lg">
            <Image
              className="rounded-lg"
              src={stepsImg4}
              alt="discover"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
