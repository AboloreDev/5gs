import HeroTitle from "./HeroTitle";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-20 max-w-[1100px] mx-auto px-2">
      <h1 className=" relative text-[90px] font-bold bg-gradient-to-r  from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent">
        Capture Every Moment With Us
      </h1>
      <div className="translate-x-[80%] -translate-y-80 absolute w-[700px] h-[600px]">
        <Image
          src="/camera.png"
          alt="Hero Image"
          width={916}
          height={700}
          layout="responsive"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:max-w-[1450px] mx-auto mt-4">
        <HeroTitle />
      </div>
    </section>
  );
};

export default Hero;
