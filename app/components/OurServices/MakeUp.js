import Image from "next/image";

const MakeUp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="relative bg-gradient-to-r from-[#1B78DE70] to-[#042C5482] rounded-2xl p-8 shadow-lg w-full h-auto md:h-[350px] hidden lg:flex items-center justify-start">
        <Image
          src="/lipstick.png"
          alt="Make-Up"
          width={200}
          height={200}
          className=" translate-x-96 -translate-y-56"
        />
        <h3 className="absolute text-[60px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867]">
          Make- <br /> Ups
        </h3>
      </div>
      {/* Mobile view */}
      <div className=" bg-gradient-to-r from-[#1B78DE70] to-[#042C5482] rounded-2xl p-8 shadow-lg w-full h-[250px] lg:hidden flex flex-row-reverse gap-8 items-center justify-center">
        <Image
          src="/lipstick.png"
          alt="Make-Up"
          width={100}
          height={100}
          className="-translate-y-32"
        />
        <h3 className=" text-[40px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867]">
          Make- <br /> Ups
        </h3>
      </div>

      <div>
        <p className="mt-4 font-thin text-xl text-[#81AFDD] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. In neque mollis amet mauris
          malesuada turpis auctor lectus. Turpis pharetra fermentum justo
          egestas risus dignissim tempor in. Elementum est libero scelerisque
          urna lectus sit. Tortor dictum est faucibus ut.
        </p>
      </div>
    </div>
  );
};

export default MakeUp;
