import HeroTitle from "./HeroTitle";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-16 sm:py-32 max-w-screen-xl mx-auto px-4">
      <h1 className=" relative text-4xl sm:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent">
        Capture Every Moment With Us
      </h1>
      <div className="translate-x-[65%] -translate-y-64  absolute w-full sm:w-[600px] sm:h-[600px] lg:w-[900px] lg:h-[800px] mt-8 sm:mt-0">
        <Image
          src="/camera.png"
          alt="Hero Image"
          width={1200}
          height={1200}
          layout="responsive"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:max-w-[1450px] mx-auto mt-8 sm:mt-16">
        <HeroTitle />
      </div>
    </div>
  );
};

export default Hero;
