"use client";

import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: ["100%", "0%"],
};

function reverseIndex(index) {
  const totalSteps = 6;
  return totalSteps - index - 1;
}

function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            varriants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            tranition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
}

export default Stairs;
