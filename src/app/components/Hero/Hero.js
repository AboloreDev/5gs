import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <div className="py-16 sm:py-32 max-w-screen-xl mx-auto px-4">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent">
        Capture Every Moment With Us
      </h1>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:max-w-[1450px] mx-auto mt-8 sm:mt-16">
        <HeroTitle />
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
