import EventPlanning from "./EventPlanning";
import GraphicsDesignCard from "./GraphicsDesignCard";
import MakeUp from "./MakeUp";
import PhotoGraphy from "./PhotoGraphy";
import SoftwareDevelopment from "./SoftwareDevelopment";
import StudioRentals from "./StudioRentals";
import TalentManagement from "./TalentManagement";
import VideographyCard from "./VideographyCard";

const Service = () => {
  return (
    <section className="mt-52 min-h-screen text-white px-2">
      <div className="max-w-[1100px] mx-auto mb-48">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="border-t-4 border-dashed border-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867] h-[5px] w-[60px]"></div>
          <h2 className="text-center text-3xl font-extrabold tracking-wide">
            Our Services
          </h2>
        </div>
      </div>
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-16 max-w-[1200px] mx-auto">
        {/* Individual Cards */}
        <VideographyCard />
        <GraphicsDesignCard />
        <EventPlanning />
        <TalentManagement />
        <MakeUp />
        <PhotoGraphy />
        <StudioRentals />
        <SoftwareDevelopment />
      </div>
    </section>
  );
};

export default Service;
