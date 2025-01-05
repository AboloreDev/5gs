import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="w-full sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] mt-8 sm:mt-0">
      <Image
        src="/camera.png"
        alt="Hero Image"
        width={1200}
        height={1200}
        layout="responsive"
      />
    </div>
  );
};

export default HeroImage;
