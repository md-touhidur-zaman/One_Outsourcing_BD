import Image from "next/image";
import circleImage from "../../../../public/assets/images/heroimages/hero_image_circle.png";
export default function HeroSection() {
  return (
    <div className="relative p-5 md:p-10  md:border-l md:border-l-muted-foreground md:border-r md:border-r-muted-foreground min-h-screen ">
      <div className="absolute top-5 md:top-8 right-4 md:right-[35%] animate-spin animation-duration-[10s]">
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

      <div className="text-white mt-12 lg:mt-20 space-y-5 ">
        <div>
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
        </div>
      </div>

      

  
    </div>
  );
}
