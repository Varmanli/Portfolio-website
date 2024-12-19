"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "../../components/ui/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../../components/ui/tooltip";

const about = {
  title: "درباره من",
  description:
    "سلام! من امیرحسین ورمانلی هستم. توسعه‌دهنده فرانت‌اند که با تکنولوژی‌های مختلف کار می‌کنم تا تجربه‌ای عالی برای کاربران خلق کنم",
  info: [
    {
      field: "نام",
      fieldValue: "امیرحسین ورمانلی",
    },
    {
      field: "ایمیل",
      fieldValue: "varmanliamirhosein@gmail.com",
    },
    {
      field: "سن",
      fieldValue: "۲۲",
    },
    {
      field: "شماره تماس",
      fieldValue: "۰۹۰۱۶۸۲۸۲۷۰",
    },
  ],
};

const education = {
  icon: "/assest/resume/cap.svg",
  title: "تحصیلات من",
  description: "مسیر یادگیری و تجربه‌هایی که مرا به جایگاه امروزی رسانده‌اند:",
  item: [
    {
      institution: "دانشجوی مهندسی کامپیوتر، دانشگاه آزاد کرج",
      degree: "مهندسی کامپیوتر",
      duration: "۱۴۰۰ - ۱۴۰۳",
    },
    {
      institution: "آموزش طراحی حرفه‌ای رابط کاربری با HTML و CSS",
      degree: "طراحی رابط کاربری",
      duration: "۱۴۰۰ - ۱۴۰۱",
    },
    {
      institution: "آموزش اصول برنامه‌نویسی و کدنویسی جاوااسکریپت",
      degree: "جاوااسکریپت مقدماتی",
      duration: "۱۴۰۱ - ۱۴۰۲",
    },
    {
      institution: "یادگیری پیشرفته کتابخانه React برای ساخت پروژه‌های پویا",
      degree: "React پیشرفته",
      duration: "۱۴۰۰ - ۱۴۰۱",
    },
  ],
};

const skill = {
  title: "مهارت‌ها",
  description:
    "مهارت‌های برنامه‌نویسی من که هر روز برای بهبود آن‌ها تلاش می‌کنم",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <BiLogoTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ],
};

function Resume() {
  return (
    <div className="flex items-center justify-center py-12 lg:py-0 lg:mt-[50px]">
      <div className="container lg:mx-[100px] mx-auto">
        <Tabs
          className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row-reverse gap-[50px]"
          defaultValue="about"
        >
          {/* لیست تب‌ها */}
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto lg:mx-0 gap-8">
            <TabsTrigger value="about" className="text-xl">
              درباره من
            </TabsTrigger>
            <TabsTrigger value="skills" className="text-xl">
              مهارت‌ها
            </TabsTrigger>
            <TabsTrigger value="education" className="text-xl">
              تحصیلات
            </TabsTrigger>
          </TabsList>
          {/* محتوای تب‌ها */}
          <div className="lg:max-w-[700px] max-w-[360px]">
            {/* درباره من */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center items-center justify-center lg:text-right">
                <h3 className="text-5xl font-extrabold text-accent">
                  {about.title}
                </h3>
                <p className="max-w-[700px] text-white/80 text-lg leading-relaxed">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#1e1e22] p-6 rounded-xl shadow-lg">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center justify-center bg-[#2a2a2f] rounded-lg p-6 hover:bg-[#333338] transition-all duration-300"
                    >
                      <span className="text-white/70 text-lg text-center mt-2">
                        {item.field}
                      </span>
                      <span className="text-accent text-xl font-bold text-center">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* مهارت‌ها */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-right mb-4">
                <h3 className="text-5xl font-bold">{skill.title}</h3>
                <p className="max-w-[700px] text-white/70 text-lg">
                  {skill.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-[40px]">
                {skill.skillList.map((item, index) => (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full p-[30px] bg-gradient-to-r from-[#1e1e22] to-[#27272c] rounded-xl flex justify-center items-center group shadow-lg hover:shadow-2xl transition-all duration-300">
                          <div className="text-7xl text-white hover:text-accent transform group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className=" text-sm font-medium">{item.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* تحصیلات */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-right mb-4">
                <h3 className="text-5xl font-bold">{education.title}</h3>
                <p className="max-w-[700px] text-white/70 text-lg">
                  {education.description}
                </p>
              </div>
              <ScrollArea className="h-[300px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                  {education.item.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[200px] p-7 rounded-xl flex flex-col justify-center items-center gap-4"
                    >
                      <span className="text-accent text-lg">
                        {item.duration}
                      </span>
                      <h3 className="text-lg font-bold min-h-[40px] text-center">
                        {item.degree}
                      </h3>
                      <div className="flex items-center text-center">
                        <p className="text-white/70 text-base">
                          {item.institution}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Resume;
