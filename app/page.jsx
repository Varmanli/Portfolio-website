import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

function home() {
  return (
    <section className="h-full lg:mx-[100px]">
      <div className="container mx-auto h-full">
        <div className=" flex flex-col lg:flex-row items-center justify-between lg:pt-2 lg:pb-10">
          <div className="text-center lg:text-left order-2 lg:order-none ">
            <span className="text-md lg:text-lg ">Front-end Developer</span>
            <h1 className="h1 mb-6">
              Hello I am <br />
              <span className="text-accent">Amirhosein Varmanli</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at carfting elegant digital experiences and I amproficient
              in various programing languages and technologies.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent  rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>
          <div className="lg:order-none lg:mb-0 order-1 mb-5">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default home;
