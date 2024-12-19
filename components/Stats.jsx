"use client";

import CountUp from "react-countup";

const stat = [
  {
    num: 5,
    text: "تسلط بر ابزارهای کاربردی دنیای وب",
  },
  {
    num: 2,
    text: "سال‌ها تجربه با طعم پیشرفت",
  },
  {
    num: 4,
    text: "پروژه‌های خاص و به‌یادماندنی",
  },
  {
    num: 500,
    text: "ساعت‌ها کدنویسی و یادگیری",
  },
];

function Stats() {
  return (
    <section>
      <div className="container mx-auto mb-10 lg:mb-0">
        <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 flex-wrap mx-auto lg:max-w-none">
          {stat.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex-row flex gap-2 items-center lg:justify-start bg-gradient-to-r from-[#1e1e22] to-[#27272c] p-4 rounded-lg shadow-lg"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-3xl lg:text-4xl font-extrabold text-accent"
                />
                <p className="text-[17px] lg:text-[14px] capitalize lg:max-w-none text-white/80">
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
