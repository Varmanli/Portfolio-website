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
    num: "01",
    category: "frontend",
    title: "Musicpich",
    Description: "Music streaming website",
    stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Javascript" }],
    image: "/assets/work/Musicpich.png",
    live: "https://musicpich.vercel.app/",
    github: "https://github.com/Varmanli/Musicpich",
  },
  {
    num: "02",
    category: "frontend",
    title: "React Shop",
    Description: "A store website with a shopping cart",
    stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Javascript" }],
    image: "/assets/work/ReactShop.png",
    live: "https://react-shop.liara.run/",
    github: "https://github.com/Varmanli/React-Shop",
  },
  {
    num: "02",
    category: "frontend",
    title: "Movie Watchlist",
    Description: "Movie and series search site and add to watch list",
    stack: [{ name: "Nextjs" }, { name: "Tailwind" }, { name: "Typescript" }],
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
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0"
    >
      <div className="container mx-auto max-w-[1050px] lg:mx-[100px]">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%]  flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[13px] ">
              <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
                <h1>{project.num}</h1>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">
                {project.title} Project
              </h2>
              <p className="text-white/60">{project.Description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
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
              className="lg:h-[100%] mb-12 lg:mb-0 w-[100%]"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[320px] relative flex justify-center items-center bg-pink-50/20">
                      <div className="relative h-full w-full"></div>
                      <div>
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
