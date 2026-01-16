import Image from "next/image";

export default function Logo() {
  return (
 
    <div className="relative h-20 w-40  flex items-center">
      <Image
        className="z-10 h-40"
        src={"/One Outsourcing BD Logo.png"}
        alt="logo"
        quality={100}
        fill
        style={{objectFit:"cover"}}
      />
    </div>
    
  );
}
