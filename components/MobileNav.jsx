"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  {
    name: "خانه",
    path: "/",
  },
  {
    name: "خدمات",
    path: "/services",
  },
  {
    name: "رزومه",
    path: "/resume",
  },
  {
    name: "نمونه کار",
    path: "/work",
  },
  {
    name: "تماس با من",
    path: "/contact",
  },
];

function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // بستن منو هنگام کلیک روی لینک
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setIsOpen(true)}
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-12 mb-5 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Amir<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-5">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={handleLinkClick} // بستن منو هنگام کلیک روی لینک
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
