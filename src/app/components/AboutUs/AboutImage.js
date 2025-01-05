import Image from "next/image";

const AboutImage = () => {
  return (
    <div className="relative">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/AboutVideo.png"
          alt="Office"
          className="w-full h-full object-cover"
          width={500}
          height={400}
        />
        <button className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 text-white text-3xl font-bold rounded-full w-16 h-16">
          ▶
        </button>
      </div>
    </div>
  );
};

export default AboutImage;
