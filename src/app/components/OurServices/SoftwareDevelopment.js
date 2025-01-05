import Image from "next/image";

const SoftwareDevelopment = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="mt-4 font-thin text-lg md:text-2xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. In neque mollis amet mauris
          malesuada turpis auctor lectus. Turpis pharetra fermentum justo
          egestas risus dignissim tempor in. Elementum est libero scelerisque
          urna lectus sit. Tortor dictum est faucibus ut.
        </p>
      </div>

      <div className="relative bg-gradient-to-r from-[#1B78DE70] to-[#042C5482] rounded-2xl p-8 shadow-lg w-full h-auto md:h-[350px] hidden md:flex items-center justify-start">
        <Image
          src="/graphicsDesign.png"
          alt="Software Development"
          width={200}
          height={200}
          className=" translate-x-96 -translate-y-56"
        />
        <h3 className="absolute text-[80px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867]">
          Software <br /> Development
        </h3>
      </div>
      {/* Mobile view */}
      <div className=" bg-gradient-to-r from-[#1B78DE70] to-[#042C5482] rounded-2xl p-8 shadow-lg w-full h-[250px] md:hidden flex gap-6 items-center justify-center">
        <Image
          src="/graphicsDesign.png"
          alt="Software Development"
          width={100}
          height={100}
          className="-translate-y-24"
        />
        <h3 className=" text-[30px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867]">
          Software <br /> Development
        </h3>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
