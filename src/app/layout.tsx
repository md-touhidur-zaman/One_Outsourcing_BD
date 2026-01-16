import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "One Outsourcing BD",
  description: "Generate By one outsourcing bd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
