"use client";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "تلفن",
    description: "۰۹۰۱۶۸۲۸۲۷۰",
  },
  {
    icon: <FaEnvelope />,
    title: "ایمیل",
    description: "varmanliamirhosein@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "آدرس",
    description: "ایران، کرج",
  },
];

function Contact() {
  return (
    <div className="mb-10 flex items-center justify-center">
      <div className="container mx-auto max-w-4xl bg-[#27272c] rounded-xl p-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* فرم */}
          <div className="flex-1 order-2 lg:order-1">
            <form className="flex flex-col gap-6">
              <h3 className="text-3xl text-accent font-bold text-center lg:text-right">
                بیایید با هم همکاری کنیم
              </h3>
              <p className="text-white/60 text-center lg:text-right">
                برای شروع همکاری فرم زیر را پر کنید
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="نام"
                  className="h-[50px] text-lg text-right"
                />
                <Input
                  type="text"
                  placeholder="نام خانوادگی"
                  className="h-[50px] text-lg text-right"
                />
                <Input
                  type="email"
                  placeholder="آدرس ایمیل"
                  className="h-[50px] text-lg text-right"
                />
                <Input
                  type="tel"
                  placeholder="شماره تماس"
                  className="h-[50px] text-lg text-right"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full h-[50px] text-lg text-right">
                  <SelectValue placeholder="انتخاب نوع پروژه" />
                </SelectTrigger>
                <SelectContent className="text-right">
                  <SelectGroup>
                    <SelectLabel>نوع پروژه</SelectLabel>
                    <SelectItem value="html">پروژه HTML CSS JS</SelectItem>
                    <SelectItem value="react">پروژه React</SelectItem>
                    <SelectItem value="nextjs">پروژه Next.js</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[150px] text-lg text-right"
                placeholder="پیام خود را اینجا بنویسید"
              />
              <Button
                className="h-[50px] text-lg bg-accent hover:bg-accent/80 transition-all duration-300"
                size="lg"
              >
                ارسال پیام
              </Button>
            </form>
          </div>

          {/* اطلاعات تماس */}
          <div className="flex-1 order-1 lg:order-2 flex items-center justify-center">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6 text-white/80"
                >
                  <div className="w-[70px] h-[70px] bg-accent text-white text-2xl rounded-md flex justify-center items-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-lg">{item.title}</p>
                    <h3 className="text-xl font-semibold">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
