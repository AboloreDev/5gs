import AboutImage from "./AboutImage";
import AboutText from "./AboutText";
import Image from "next/image";

const About = () => {
  return (
    <section className="mt-60 max-w-[1100px] mx-auto relative text-white py-10 px-4 rounded-lg bg-gradient-to-r from-[#0F4279] 80% ,to-[#1B78DE] 20%">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AboutText />
        <AboutImage />
      </div>

      {/* Decorative Camera Image */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 sm:-translate-x-40 sm:-translate-y-40 hidden lg:block">
        <Image
          src="/camera2.png"
          alt="Camera"
          width={400}
          height={400}
          className="lg:w-64 xl:w-80 md:w-40 sm:w-20"
        />
      </div>
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 sm:-translate-x-40 sm:-translate-y-40 md:block hidden">
        <Image
          src="/camera2.png"
          alt="Camera"
          width={300}
          height={300}
          className="lg:w-64 xl:w-80 md:w-40 sm:w-20"
        />
      </div>
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 sm:-translate-x-40 sm:-translate-y-40">
        <Image
          src="/camera2.png"
          alt="Camera"
          width={200}
          height={200}
          className="lg:w-64 xl:w-80 md:w-40 sm:w-20"
        />
      </div>
    </section>
  );
};

export default About;
