import AboutImage from "./AboutImage";
import AboutText from "./AboutText";
import Image from "next/image";

const About = () => {
  return (
    <section className="max-w-screen-xl mx-auto relative text-white py-16 px-8 sm:px-16 lg:px-24 rounded-lg bg-gradient-to-r from-[#0F4279] to-[#1B78DE] mt-16 sm:mt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AboutText />
        <AboutImage />
      </div>

      {/* Decorative Camera Image */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 sm:-translate-x-40 sm:-translate-y-40">
        <Image
          src="/camera2.png"
          alt="Camera"
          width={400}
          height={400}
          className="lg:w-64 xl:w-80"
        />
      </div>
    </section>
  );
};

export default About;
