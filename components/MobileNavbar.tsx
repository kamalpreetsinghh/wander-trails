"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { navLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { TbMenuDeep } from "react-icons/tb";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex lg:hidden fixed top-0 left-0 z-10 justify-between items-center w-full h-12 py-8 px-8">
      <div className="flex items-center">
        <Link href={"/"} className="mr-4">
          <Image
            src={"/assets/images/logo.png"}
            alt="logo"
            width={165}
            height={30}
            priority={true}
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-4 sm:gap-6">
        <ThemeSwitch />
        <>
          <SignedOut>
            <div className="rounded-button">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </>
        <Sheet>
          <SheetTrigger>
            <TbMenuDeep className="w-6 h-6" color="#00946A" />
          </SheetTrigger>
          <SheetContent className="sm:w-64 sheet-background-color">
            <ul className="mt-8">
              {navLinks.map((link) => {
                const isActive = link.href === pathname;

                return (
                  <li
                    className={`${
                      isActive && "text-primary"
                    } px-8 py-4 text-xl text-color`}
                    key={link.href}
                  >
                    <SheetClose asChild>
                      <Link href={link.href}>{link.title}</Link>
                    </SheetClose>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNavbar;
