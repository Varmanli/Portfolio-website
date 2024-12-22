import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

function Home() {
  return (
    <section className="h-full lg:mx-[100px] mt-10">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-2 lg:pb-10">
          {/* بخش متن */}
          <div className="text-center lg:text-right order-2 lg:order-none">
            <span className="text-lg lg:text-xl">برنامه‌نویس وب</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              سلام، من <br />
              <span className="text-accent">امیرحسین ورمانلی</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-base lg:text-lg leading-relaxed">
              عاشق طراحی و ساخت وب‌سایت‌های جذاب و کاربردی هستم.
              <br /> از ایده‌پردازی تا اجرای نهایی، تلاش می‌کنم تجربه‌ای راحت و
              دوست‌داشتنی برای کاربران بسازم.
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <a
                href="https://www.dropbox.com/scl/fi/ebobgfbvgmloey8422wdl/AmirhoseinVarmanli.pdf?rlkey=wapruocqvxy8o1u5ytgb5imyu&st=gbk6amln&dl=1"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase flex items-center gap-2 px-5 py-2 rounded-xl text-primary bg-accent transition-all duration-300"
              >
                <span>دانلود رزومه</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* بخش عکس */}
          <div className="lg:order-none lg:mb-0 order-1 mb-5">
            <Photo />
          </div>
        </div>
      </div>

      {/* بخش آمار */}
      <Stats />
    </section>
  );
}

export default Home;
