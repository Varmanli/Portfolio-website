"use client";

import CountUp from "react-countup";

const stat = [
  {
    num: 5,
    text: "technologies mastered",
  },
  {
    num: 2,
    text: "years of experience",
  },
  {
    num: 4,
    text: "projects compeleted",
  },
  {
    num: 500,
    text: "code commits",
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
                className="flex-1 flex-row flex gap-4 items-center justify-center lg:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-2xl lg:text-6xl font-extrabold"
                />
                <p className=" text-[11px] capitalize lg:max-w-none">
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
