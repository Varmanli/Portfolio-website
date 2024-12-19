"use client";

import { useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, projectType: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("پیام شما با موفقیت ارسال شد!", {
        position: "top-center",
        autoClose: 3000,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } else {
      toast.error("خطا در ارسال پیام. لطفاً دوباره تلاش کنید.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="py-12 px-4 flex flex-col items-center justify-center ">
      <ToastContainer />
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* اطلاعات تماس */}
        <div className="flex flex-col items-start gap-6">
          <h3 className="text-4xl text-accent font-extrabold">اطلاعات تماس</h3>
          <p className="text-white/70 text-lg leading-relaxed">
            در صورت نیاز به اطلاعات بیشتر یا پیشنهاد همکاری، لطفاً از طریق
            اطلاعات زیر با من تماس بگیرید.
          </p>
          {info.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 hover:text-white transition-all duration-300"
            >
              <div className="w-[50px] h-[50px] bg-accent text-2xl rounded-md flex justify-center items-center">
                {item.icon}
              </div>
              <div>
                <p className="text-white/60 text-lg mb-1">{item.title}</p>
                <h3 className="text-xl font-bold">{item.description}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* فرم */}
        <form
          className="flex flex-col gap-6 bg-[#1e1e22] p-8 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="نام"
              className="h-[50px] text-lg text-right bg-[#333338] text-white focus:ring-accent focus:border-accent"
            />
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="نام خانوادگی"
              className="h-[50px] text-lg text-right bg-[#333338] text-white focus:ring-accent focus:border-accent"
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ایمیل"
              className="h-[50px] text-lg text-right bg-[#333338] text-white focus:ring-accent focus:border-accent"
            />
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="شماره تماس"
              className="h-[50px] text-lg text-right bg-[#333338] text-white focus:ring-accent focus:border-accent"
            />
          </div>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-full h-[50px] text-lg text-right bg-[#333338] text-white">
              <SelectValue placeholder="انتخاب نوع پروژه" />
            </SelectTrigger>
            <SelectContent className="text-right bg-[#2a2a2f] text-white">
              <SelectGroup>
                <SelectLabel>نوع پروژه</SelectLabel>
                <SelectItem value="html">پروژه HTML CSS JS</SelectItem>
                <SelectItem value="react">پروژه React</SelectItem>
                <SelectItem value="nextjs">پروژه Next.js</SelectItem>
                <SelectItem value="backend">پروژه بک‌اند</SelectItem>
                <SelectItem value="wordpress">پروژه وردپرس</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="h-[150px] text-lg text-right bg-[#333338] text-white focus:ring-accent focus:border-accent"
            placeholder="پیام خود را وارد کنید"
          />
          <Button
            className="h-[50px] text-lg bg-accent hover:bg-accent/90 transition-all duration-300"
            size="lg"
            type="submit"
          >
            ارسال پیام
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
