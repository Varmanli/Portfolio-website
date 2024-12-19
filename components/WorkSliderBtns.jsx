"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
function WorkSliderBtns({ containerStyle, btnStyle, iconsStyle }) {
  const swiper = useSwiper();
  return (
    <div className=" flex gap-2 absolute right-0 bottom-[50%] lg:left-0  lg:bottom-0  z-20 w-full justify-between lg:w-max lg:justify-center">
      <button
        className="bg-accent hover:bg-accent/80 rounded-lg text-primary text-[22px] w-[44px] h-[44px] flex justift-center items-center transition-all"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className="mx-auto" />
      </button>{" "}
      <button
        className="bg-accent hover:bg-accent/80 rounded-lg text-primary text-[22px] w-[44px] h-[44px] flex justift-center items-center transition-all"
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className="mx-auto" />
      </button>
    </div>
  );
}

export default WorkSliderBtns;
