"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderBtns from "../../components/WorkSliderBtns";

const projects = [
  {
    num: "۰۱",
    category: "فرانت‌اند",
    title: "موزیک پیچ",
    Description: "سایت استریم و پخش آنلاین موسیقی",
    stack: [{ name: "ری‌اکت" }, { name: "تیلویند" }, { name: "جاوااسکریپت" }],
    image: "/assets/work/Musicpich.png",
    live: "https://musicpich.vercel.app/",
    github: "https://github.com/Varmanli/Musicpich",
  },
  {
    num: "۰۲",
    category: "فرانت‌اند",
    title: "فروشگاه آنلاین",
    Description: "وبسایت فروشگاهی با قابلیت سبد خرید",
    stack: [{ name: "ری‌اکت" }, { name: "تیلویند" }, { name: "جاوااسکریپت" }],
    image: "/assets/work/ReactShop.png",
    live: "https://react-shop.liara.run/",
    github: "https://github.com/Varmanli/React-Shop",
  },
  {
    num: "۰۳",
    category: "فرانت‌اند",
    title: "لیست فیلم",
    Description: "سایت جستجوی فیلم و سریال با امکان افزودن به لیست تماشا",
    stack: [
      { name: "نکست‌جی‌اس" },
      { name: "تیلویند" },
      { name: "تایپ‌اسکریپت" },
    ],
    image: "/assets/work/watchlist.png",
    live: "https://movie-watchlist-eosin.vercel.app/",
    github: "https://github.com/Varmanli/Movie-Watchlist",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);
  function handleSlideChange(swiper) {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:mt-[-80px]">
      <div className="container mx-auto max-w-[1050px]">
        <div className="flex flex-col lg:flex-row gap-[30px] items-center">
          <div className="w-full lg:w-[50%] flex flex-col justify-between text-center lg:text-right">
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-7xl leading-none font-extrabold text-transparent text-outline"
              >
                <h1>{project.num}</h1>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500"
              >
                پروژه {project.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-white/70"
              >
                {project.Description}
              </motion.p>
              <ul className="flex gap-4 justify-center lg:justify-start">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20 my-4"></div>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group shadow-lg hover:shadow-xl transition-all">
                        <BsArrowUpRight className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>مشاهده پروژه</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group shadow-lg hover:shadow-xl transition-all">
                        <BsGithub className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>مخزن گیت‌هاب</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="lg:h-[100%] w-[100%]"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="h-[320px] relative flex justify-center items-center bg-gray-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <Image
                        src={project.image}
                        fill
                        className="object-cover rounded-xl"
                        alt={project.title}
                      />
                    </motion.div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
