"use client";
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
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaWordpress,
} from "react-icons/fa";
import {
  SiNestjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import WorkSliderBtns from "../../components/WorkSliderBtns";

const projects = [
  {
    num: "۰۱",
    category: "فول‌استک",
    title: "موزیک پیچ",
    description:
      "سایت استریم و پخش آنلاین موسیقی با قابلیت مدیریت بک‌اند و دیتابیس",
    stack: [
      { icon: <FaReact style={{ color: "#61DBFB" }} />, name: "ری‌اکت" },
      { icon: <SiTailwindcss style={{ color: "#38BDF8" }} />, name: "تیلویند" },
      { icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "جاوااسکریپت" },
      { icon: <FaNodeJs style={{ color: "#68A063" }} />, name: "نود جی‌اس" },
      { icon: <SiExpress style={{ color: "#000" }} />, name: "اکسپرس" },
      { icon: <SiMongodb style={{ color: "#4DB33D" }} />, name: "مونگو دی‌بی" },
    ],
    image: "/assets/work/music.png",
    live: "https://music.varmanli.ir",
    github: "https://github.com/Varmanli/Musicpich",
  },
  {
    num: "۰۲",
    category: "فول‌استک",
    title: "وب‌سایت شخصی",
    description:
      "در این پروژه مسئولیت کامل فرانت‌اند و بک‌اند را بر عهده داشتم. طراحی رابط کاربری مدرن همراه با یک داشبورد مدیریتی قدرتمند، امکان مدیریت آسان بخش‌های مختلف سایت و تجربه کاربری روان را فراهم می‌کند.",
    stack: [
      { icon: <SiNextdotjs style={{ color: "#000" }} />, name: "نکست‌جی‌اس" },
      { icon: <FaReact style={{ color: "#61DBFB" }} />, name: "ری‌اکت" },
      { icon: <SiTailwindcss style={{ color: "#38BDF8" }} />, name: "تیلویند" },
      { icon: <FaNodeJs style={{ color: "#68A063" }} />, name: "نود جی‌اس" },
      { icon: <SiNestjs style={{ color: "#ED0054" }} />, name: "نست جی اس" },
      {
        icon: <BiLogoPostgresql style={{ color: "#0064a5" }} />,
        name: "پستگرس‌کیوال",
      },
    ],
    image: "/assets/work/shemirani.png",
    live: "https://melikashemirani.ir",
    github: "https://github.com/Varmanli/portfolio-site",
  },
  {
    num: "۰۳",
    category: "فرانت‌اند",
    title: "فروشگاه آنلاین",
    description: "وبسایت فروشگاهی با قابلیت سبد خرید",
    stack: [
      { icon: <FaReact style={{ color: "#61DBFB" }} />, name: "ری‌اکت" },
      { icon: <SiTailwindcss style={{ color: "#38BDF8" }} />, name: "تیلویند" },
      { icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "جاوااسکریپت" },
    ],
    image: "/assets/work/ReactShop.png",
    live: "https://react-shop-murex-zeta.vercel.app/",
    github: "https://github.com/Varmanli/React-Shop",
  },
  {
    num: "۰۴",
    category: "فرانت‌اند",
    title: "لیست فیلم",
    description: "سایت جستجوی فیلم و سریال با امکان افزودن به لیست تماشا",
    stack: [
      { icon: <SiNextdotjs style={{ color: "#000" }} />, name: "نکست‌جی‌اس" },
      { icon: <SiTailwindcss style={{ color: "#38BDF8" }} />, name: "تیلویند" },
      { icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "تایپ‌اسکریپت" },
    ],
    image: "/assets/work/watchlist.png",
    live: "https://movie-watchlist-eosin.vercel.app/",
    github: "https://github.com/Varmanli/Movie-Watchlist",
  },
  {
    num: "۰۵",
    category: "فرانت‌اند",
    title: "اپلیکیشن هواشناسی",
    description: "برنامه‌ای برای نمایش وضعیت آب و هوا با استفاده از API",
    stack: [
      { icon: <FaReact style={{ color: "#61DBFB" }} />, name: "ری‌اکت" },
      { icon: <FaCss3 style={{ color: "#264DE4" }} />, name: "CSS" },
      { icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "جاوااسکریپت" },
    ],
    image: "/assets/work/weather.png",
    live: "https://weather.varmanli.ir",
    github: "https://github.com/Varmanli/Weather-app",
  },
  {
    num: "۰۶",
    category: "فرانت‌اند",
    title: "لندینگ پیج",
    description: "لندینگ پیج مناسبتی برای جشن یلدا",
    stack: [
      { icon: <FaHtml5 style={{ color: "#E34C26" }} />, name: "HTML" },
      { icon: <FaCss3 style={{ color: "#264DE4" }} />, name: "CSS" },
      { icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "جاوااسکریپت" },
    ],
    image: "/assets/work/yalda.png",
    live: "https://varmanli.github.io/landing-page-yalda/",
    github: "https://github.com/Varmanli/landing-page-yalda",
  },
  {
    num: "۰۷",
    category: "فرانت‌اند",
    title: "وب‌سایت Archi Studio",
    description:
      "در این پروژه، مسئولیت کامل طراحی و توسعهٔ فرانت‌اند و بک‌اند را بر عهده داشتم. این وب‌سایت شامل یک رابط کاربری مینیمال و مدرن همراه با داشبورد مدیریتی قدرتمند برای مدیریت پروژه‌ها و محتواست.",
    stack: [
      {
        icon: <SiNextdotjs style={{ color: "#000" }} />,
        name: "نکست جی اس",
      },
      { icon: <SiTailwindcss style={{ color: "#38BDF8" }} />, name: "تیلویند" },
      { icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "جاوااسکریپت" },
    ],
    image: "/assets/work/architecture.png",
    live: "https://architecture-firm.varmanli.ir",
    github: "https://github.com/Varmanli/Architecture-Firm-Portfolio",
  },
  {
    num: "۰۸",
    category: "وردپرس",
    title: "وب‌سایت مرکزی کالا",
    description:
      "طراحی و توسعه وب‌سایت فروش لوازم خانگی با قالب اختصاصی و پیاده‌سازی روی وردپرس. رابط کاربری ساده و کاربرپسند برای معرفی و فروش محصولات.",
    stack: [
      { icon: <FaHtml5 style={{ color: "#E34C26" }} />, name: "HTML" },
      { icon: <FaCss3 style={{ color: "#264DE4" }} />, name: "CSS" },
      { icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "جاوااسکریپت" },
      {
        icon: <FaWordpress style={{ color: "#0457A0" }} />,
        name: "وردپرس",
      },
    ],
    image: "/assets/work/markazikala.png",
    live: "https://markazikalaa.ir/",
    github: "",
  },
  {
    num: "۰۹",
    category: "وردپرس",
    title: "وب‌سایت پاسارگاد پلیمر",
    description:
      "طراحی و پیاده‌سازی وب‌سایت شرکتی چهارزبانه با قالب اختصاصی روی وردپرس. امکان مدیریت آسان محتوا و پشتیبانی از چند زبان برای دسترسی گسترده‌تر.",
    stack: [
      { icon: <FaHtml5 style={{ color: "#E34C26" }} />, name: "HTML" },
      { icon: <FaCss3 style={{ color: "#264DE4" }} />, name: "CSS" },
      { icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "جاوااسکریپت" },
      {
        icon: <FaWordpress style={{ color: "#0457A0" }} />,
        name: "وردپرس",
      },
    ],
    image: "/assets/work/pasargad.png",
    live: "https://pasargadpolymer.com/?lang=fa",
    github: "",
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
                {project.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-white/70"
              >
                {project.description}
              </motion.p>
              <ul className="flex gap-4 justify-center lg:justify-start">
                {project.stack.map((item, index) => (
                  <TooltipProvider key={index} delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="text-4xl hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm font-medium">{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
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
