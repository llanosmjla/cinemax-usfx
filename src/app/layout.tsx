import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar, { SidebarItem } from "@/components/templats/NavBar";
import HomeIcon from "@/components/atoms/icons/HomeIcon";
import AboutIcon from "@/components/atoms/icons/AboutIcon";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-[auto_1fr] bg-[#edf6f9]">
          <NavBar>
            <Link href="/">
              <SidebarItem icon={<HomeIcon size={10} color="text-sky-100" />} text="Home" alert href="/" />
            </Link>

            <Link href="/about">
              <SidebarItem icon={<AboutIcon size={10} color="text-sky-100" />} text="About" href="/about" />
            </Link>

            <hr className="my-3" />
          </NavBar>
          <div className="flex flex-col">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
