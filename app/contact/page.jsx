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
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(+98)09016828270",
  },
  {
    icon: <FaEnvelope />,
    title: "email",
    description: "varmanliamirhosein@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "address",
    description: "iran karaj",
  },
];

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto lg:w-[1130px] lg:mx-[100px]">
        <div className="flex flex-col justify-between lg:flex-row ">
          <div className=" order-2 lg:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-2xl text-accent">Lets work rogether</h3>
              <p className="text-white/60 text-[15px]">
                You can contact me for cooperation
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">HTML CSS JS project</SelectItem>
                    <SelectItem value="cst">React project</SelectItem>
                    <SelectItem value="mst">Nextjs project</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[100px]"
                placeholder="Type your message here"
              />
              <Button className="max-w-40" size="md">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 w-[35%] flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-6"
                  >
                    <div className=" flex items-center w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md justify-center">
                      <div className="text-[26px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-base">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
