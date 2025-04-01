"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Amir from "../public/assets/Amir.png";

function Photo() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div>
        {/* image */}
        <div>
          <div className="w-[500px] h-[320px] overflow-hidden  lg:h-[360px] mix-blend-lighten absolute right-[-35%] lg:right-[-16.5%] ">
            <Image
              src={Amir}
              priority
              quality={100}
              fill
              alt="amirhosein"
              className=" object-contain overflow-hidden"
            />
          </div>
        </div>
        {/* circle */}
        <motion.svg
          className="w-[300px] lg:w-[382px] h-[300px] lg:h-[328px]"
          fill="transparent"
          viewBox="0 0 506 506 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.circle>
        </motion.svg>
      </div>
    </div>
  );
}

export default Photo;
