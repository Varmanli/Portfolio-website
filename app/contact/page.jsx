"use client";

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
    <div className="py-12 px-4 flex flex-col items-center justify-center ">
      <div className="w-full max-w-[73rem] flex flex-col items-center gap-12">
        <h3 className="text-5xl text-accent font-extrabold tracking-wide">ارتباط با من</h3>
        <p className="text-white/70 text-lg leading-relaxed text-center max-w-2xl">
          اگر به دنبال همکاری در پروژه‌های خلاقانه و چالش‌برانگیز هستید، می‌توانید از طریق اطلاعات زیر با من تماس بگیرید. همیشه مشتاق شنیدن ایده‌های جدید هستم.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {info.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 p-8 bg-gradient-to-b from-[#2a2a2f] to-[#1e1e22] rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <div className="w-[80px] h-[80px] bg-accent text-4xl rounded-full flex justify-center items-center text-white ">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-white">{item.title}</h4>
              <p className="text-lg text-white/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
