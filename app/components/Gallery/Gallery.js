import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="md:mb-52 min-h-screen text-white mt-40">
      {/* intro */}
      <div className="flex flex-col items-center justify-center text-white gap-2 py-4 mb-20">
        <div className="border-t-4 border-dashed border-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867] h-[5px] w-[60px] flex items-start"></div>
        <h2 className="text-center text-2xl font-extrabold  tracking-wide">
          Our Works
        </h2>
      </div>

      {/* Gallery Container*/}
      <div className="flex max-w-[1800px] mx-auto justify-between items-center space-x-8 mb-20 px-6">
        <h1 className=" text-lg font-thin tracking-widest">
          A clear variety of target collaborations on what we <br /> provide our
          clients
        </h1>
        <div className="md:text-[50px] text-4xl font-thin">
          <BsArrowRight />
        </div>
      </div>

      <div className=" flex justify-between items-center w-full h-auto space-x-8">
        <div className="overflow-hidden  shadow-lg z-10">
          <Image
            src="/gallery3.png"
            alt="Gallery Image 1"
            width={800}
            height={300}
          />
        </div>

        <div className="overflow-hidden  shadow-lg  z-20">
          <Image
            src="/gallery2.png"
            alt="Gallery Image 2"
            width={1000}
            height={300}
          />
        </div>

        <div className="overflow-hidden shadow-lg  z-10">
          <Image
            src="/gallery1.png"
            alt="Gallery Image 3"
            width={600}
            height={300}
          />
        </div>
      </div>

      {/* gallery button */}

      <div class="text-center mt-12 flex items-center justify-center ">
        <button class=" flex items-center md:text-2xl text-lg tracking-widest bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-white font-thin px-6 py-2 rounded-full hover:scale-105 transition-transform">
          View Gallery
          <span class="ml-4 text-2xl font-thin">
            <BsArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Gallery;
