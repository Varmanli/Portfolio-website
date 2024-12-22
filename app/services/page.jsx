"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: 1,
    title: "توسعه فرانت‌اند",
    Description:
      "ایجاد رابط کاربری با React و Next.js برای طراحی سریع و بهینه. افزایش سرعت بارگذاری صفحه و طراحی ریسپانسیو برای تمامی دستگاه‌ها.",
    href: "/",
  },
  {
    num: 2,
    title: "توسعه بک‌اند",
    Description:
      "ساخت APIهای ایمن و سریع با Node.js و Express. ذخیره‌سازی داده‌ها با MongoDB و مدیریت سرور بر روی هاست‌های معمولی یا Cloud.",
    href: "/",
  },
  {
    num: 3,
    title: "توسعه فول‌استک",
    Description:
      "طراحی کل پروژه از فرانت‌اند تا پایگاه داده. رفع تنگناها بین بخش‌های مختلف و بهینه‌سازی امنیت و سرعت برنامه.",
    href: "/",
  },
  {
    num: 4,
    title: "مشاوره و بهبود",
    Description:
      "آنالیز ساختار پروژه‌های موجود، رفع باگ و افزایش امنیت. ارتقا سئو و افزودن قابلیت‌های جدید بر اساس نیاز شما.",
    href: "/",
  },
];

function Services() {
  return (
    <section className="min-h-[80vh] lg:mx-[100px] flex flex-col justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-4 bg-[#1e1e22] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-accent">
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
                  className="text-[28px] font-bold leading-none text-white hover:text-accent transition-all duration-500"
                >
                  {item.title}
                </h2>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  {item.Description}
                </p>
                <div className="border-b border-white/20 w-full mt-4"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
