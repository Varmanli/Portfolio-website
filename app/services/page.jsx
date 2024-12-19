"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: 1,
    title: "توسعه فرانت‌اند",
    Description:
      "برنامه‌نویسی فرانت‌اند با استفاده از تکنولوژی‌های مدرن مانند React، Next.js و TailwindCSS",
    href: "/",
  },
  {
    num: 2,
    title: "پروژه‌های جاوااسکریپت",
    Description: "پیاده‌سازی پروژه‌های پیچیده و خلاقانه با زبان جاوااسکریپت",
    href: "/",
  },
  {
    num: 3,
    title: "قالب‌های HTML",
    Description: "طراحی قالب‌های زیبا و دقیق HTML برای وبسایت‌های شما",
    href: "/",
  },
  {
    num: 4,
    title: "سایت‌های وردپرس",
    Description: "ایجاد سایت‌های فروشگاهی، خبری، شخصی و موارد دیگر...",
    href: "/",
  },
];

function Services() {
  return (
    <section className="min-h-[80vh] lg:mx-[100px] flex flex-col justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-3"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[50px] h-[50px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                <h2
                  className="text-[32px]  capitalize font-bold leading-none text-white hover:text-accent transition-all duration-500 
                "
                >
                  {item.title}
                </h2>
                <p className="text-white/60 text-[14px]">{item.Description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
