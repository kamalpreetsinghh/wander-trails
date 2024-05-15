import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/constants";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-10 hidden lg:flex justify-between items-center w-full h-12 py-8 px-24">
      <div className="flex items-center">
        <Link href={"/"} className="mr-4">
          <Image
            src={"/assets/images/logo.png"}
            alt="logo"
            width={220}
            height={40}
            priority={true}
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>
      <div>
        {navLinks.map((navLink) => (
          <Link
            className="text-primary px-6 text-xl text-hover"
            href={navLink.href}
            key={navLink.href}
          >
            {navLink.title}
          </Link>
        ))}
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
      </div>
    </nav>
  );
};

export default Navbar;
