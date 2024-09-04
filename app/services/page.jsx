"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: 1,
    title: "front end",
    Description:
      "Front-end programming with modern technologies such as React Next.js Tailwindcss",
    href: "/",
  },
  {
    num: 2,
    title: "js project",
    Description: "Doing JavaScript language projects",
    href: "/",
  },
  {
    num: 3,
    title: "HTML template",
    Description: "Creating beautiful and high precision HTML templates",
    href: "/",
  },
  {
    num: 4,
    title: "wordpress",
    Description: "Shopping, news, personal sites...",
    href: "/",
  },
];

function Services() {
  return (
    <section className="min-h-[80vh] lg:mx-[100px] flex flex-col justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[50px]"
        >
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
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
