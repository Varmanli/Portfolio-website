"use client";

import CountUp from "react-countup";

const stat = [
  {
    num: 5,
    text: "تسلط بر فناوری‌های پرکاربرد",
  },
  {
    num: 2,
    text: "سال تجربه در مسیر رشد",
  },
  {
    num: 4,
    text: "پروژه‌های موفق",
  },
  {
    num: 500,
    text: "تجربه عملی",
  },
];

function Stats() {
  return (
    <section>
      <div className=" container mx-auto mb-10 lg:mb-0">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 flex-wrap  mx-auto lg:max-w-none">
          {stat.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex-row flex gap-4 items-center  lg:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-2xl lg:text-6xl font-extrabold"
                />
                <p className=" text-[16px] lg:text-[18px] capitalize lg:max-w-none">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
