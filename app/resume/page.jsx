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
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../../components/ui/tooltip";

const about = {
  title: "Aboute me",
  description:
    "Hello, I am Amir Hosein Varmanli, a front-end developer who is proficient in various technologies to provide a great experience for users.",
  info: [
    {
      field: "Name",
      fieldValue: "Amirhosein Varmanli",
    },
    {
      field: "Email",
      fieldValue: "varmanliamirhosein@gmail.com",
    },
    {
      field: "Age",
      fieldValue: "22",
    },
    {
      field: "Phone",
      fieldValue: "(+98)09016828270",
    },
  ],
};

const education = {
  icon: "/assest/resume/cap.svg",
  title: "My education",
  description: "My education and the courses I took:",
  item: [
    {
      institution: "Computer engineering student at Karaj Azad University",
      degree: "Computer engineering student",
      duration: "2021 - 2024",
    },
    {
      institution: "Learning how to see html css design",
      degree: "HTML CSS design",
      duration: "2021 - 2022",
    },
    {
      institution: "Learning to see JavaScript programming",
      degree: "Javascript curse",
      duration: "2022 - 2023",
    },
    {
      institution: "Learning how to see the react libraryس",
      degree: "React curse",
      duration: "2021 - 2022",
    },
  ],
};

const skill = {
  title: "Skills",
  description:
    "My skills in programming. I try to improve my skills every day. I am learning every day.",
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
      name: "JS",
    },
    {
      icon: <BiLogoTypescript />,
      name: "Typescrpt",
    },
    {
      icon: <FaReact />,
      name: "REACT",
    },
    {
      icon: <SiNextdotjs />,
      name: "NEXT.JS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
  ],
};

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex  items-center justify-center py-12 lg:py-0"
    >
      <div className="container lg:mx-[100px] mx-auto">
        <Tabs
          className="flex flex-col lg:flex-row gap-[50px]"
          defaultValue="about"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto lg:mx-0  gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>{" "}
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <div className="lg:max-w-[600px]  max-w-[360px]">
            <TabsContent value="about" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center items-center justify-center lg:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[14px]">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 mx-auto lg:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6"
                      >
                        <span className="text-white/60">{item.field}</span>
                        <span className="text-lg"> {item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left mb-4">
                <h3 className="text-4xl font-bold">{skill.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[14px]">
                  {skill.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                {skill.skillList.map((item, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full p-[26px] bg-[#232329] rounded-xl flex justify-center items-center  group">
                            <div className="text-6xl hover:text-accent transition-all duration-100">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left mb-4">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[14px]">
                  {education.description}
                </p>
              </div>
              <ScrollArea className="h-[280px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                  {education.item.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[170px] p-7  rounded-xl flex flex-col justify-center items-center gap-2"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-base font-bold min-h-[40px] text-center ">
                          {item.degree}
                        </h3>
                        <div className="flex items-center text-center">
                          <p className="text-white/60 text-sm">
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
