const AboutText = () => {
  return (
    <div className="flex flex-col justify-center space-y-12 mt-12">
      <div className="border-t-4 border-dashed border-transparent bg-gradient-to-r from-[#AE67FA] to-[#F49867] h-[5px] w-[60px] mx-auto"></div>
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center">
        About Us
      </h2>
      <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6 font-thin text-center sm:text-left">
        5gs media was established on the 24th November 2023, located at the
        Pokoase – Curve Anyaa Awoshie Road. Its core value is to drive clients
        through five solid gears, which at the end correspond to the quality,
        diversity, and impact of our content to the community.
      </p>
    </div>
  );
};

export default AboutText;
