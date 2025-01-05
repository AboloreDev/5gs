const Appointment = () => {
  return (
    <div className="max-w-[1250px] mx-auto px-4">
      {/* Appointment Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-gradient-to-r from-[#AE67FA] to-[#F49867] py-12 px-8 rounded-xl">
        {/* Text Content */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-lg font-light text-[#0E0E0E]">
            Book a session with us
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-black leading-snug">
            Register today to book an appointment for a quicker service.
          </h3>
        </div>

        {/* Register Button */}
        <button className="bg-black text-white rounded-full px-10 py-3 font-bold text-lg transition-transform hover:scale-105">
          Register
        </button>
      </div>
    </div>
  );
};

export default Appointment;
