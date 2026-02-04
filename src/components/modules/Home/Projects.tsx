"use client";

import Image from "next/image";
import event_management from "../../../../public/assets/images/projectImages/Event_Management.png";
import rideManagement from "../../../../public/assets/images/projectImages/Ride_Sharing.png";
import hotelManagement from "../../../../public/assets/images/projectImages/Hotel_Management.png";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
export default function Projects() {
  const [open, setOpen] = useState(0);
  return (
    <div className="container mx-auto md:border-l md:border-l-muted-foreground md:border-r md:border-r-muted-foreground">
      <div className="flex flex-col items-center space-y-3 py-10">
        <h1 className="px-3 py-1 text-center border rounded-lg">Projects</h1>
        <h1 className="text-3xl font-bold">Explore Our Projects</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 p-5">
        <Link
          href={"https://event-management-nine-brown.vercel.app"}
          target="_blank"
          className="relative w-full lg:w-2/3 h-200 border p-5 rounded-xl cursor-pointer"
          onMouseEnter={() => setOpen(1)}
          onMouseLeave={() => setOpen(0)}
        >
          <div
            className={cn("hidden", {
              "relative block": open === 1,
            })}
          >
            <div className="absolute bg-yellow-400 top-0 z-80 w-full text-center py-5">
              <h1>Event Management</h1>
            </div>
          </div>
          <Image
            src={event_management}
            alt="event_management"
            fill
            style={{ objectFit: "cover" }}
            className="p-5 "
          />
        </Link>

        <div className="w-full lg:w-1/3 h-200 flex flex-col gap-5">
          <Link
            href={"https://ride-sharing-eta.vercel.app/"}
            target="_blank"
            className="relative w-full h-1/2 border p-5 rounded-xl cursor-pointer"
            onMouseEnter={() => setOpen(2)}
            onMouseLeave={() => setOpen(0)}
          >
            <div
              className={cn("hidden", {
                "relative block": open === 2,
              })}
            >
              <div className="absolute bg-yellow-400 top-0 z-80 w-full text-center py-5">
                <h1>Ride Management</h1>
              </div>
            </div>
            <Image
              src={rideManagement}
              alt="ride management"
              fill
              style={{ objectFit: "cover" }}
              className="p-5 "
            />
          </Link>

          <Link
            href={"https://hotelbookingsystem-70380.web.app/"}
            target="_blank"
            className="relative w-full h-1/2 border p-5 rounded-xl cursor-pointer"
            onMouseEnter={() => setOpen(3)}
            onMouseLeave={() => setOpen(0)}
          >
            <div
              className={cn("hidden", {
                "relative block": open === 3,
              })}
            >
              <div className="absolute bg-yellow-400 top-0 z-80 w-full text-center py-5">
                <h1>Hotel Management</h1>
              </div>
            </div>
            <Image
              src={hotelManagement}
              alt="hotel management"
              fill
              style={{ objectFit: "cover" }}
              className="p-5 rounded-xl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
