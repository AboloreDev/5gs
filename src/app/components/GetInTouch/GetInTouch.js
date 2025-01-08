import GoogleMap from "./GoogleMap";

const GetInTouch = () => {
  return (
    <section className="mb-52 max-w-[1200px] mx-auto px-4">
      {/* Title */}
      <div className="text-center text-white font-bold text-2xl mb-16">
        Get In Touch
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        {/* Location */}
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-white text-2xl">Location</h1>
          <p className="text-xl text-[#81AFDD] text-center">
            Pokuase - 4th Street opposite Movenpick
          </p>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-white text-2xl">Contact Us</h1>
          <p className="text-xl text-[#81AFDD] text-center">
            +23324000000
            <br />
            +23324000000
          </p>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-white text-2xl">Working Hours</h1>
          <div className="text-xl text-[#81AFDD] text-center space-y-2">
            <p>
              <strong>Monday-Friday:</strong>
              <br />
              08:00 AM - 12:00 AM
            </p>
            <p>
              <strong>Saturday-Sunday:</strong>
              <br />
              07:00 AM - 11:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <GoogleMap />
      </div>
    </section>
  );
};

export default GetInTouch;
