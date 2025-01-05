export default function GoogleMap() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[563px] mt-8 px-4 md:px-16">
      <div className="overflow-hidden rounded-lg shadow-lg ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83535.23209007343!2d-0.31158256078356616!3d5.643589616835005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9099050ee617%3A0xec1887b5b7a1893d!2sMovenpick%20Ambassador%20Hotel%20Accra!5e0!3m2!1sen!2sng!4v1735112274376!5m2!1sen!2sng"
          width="900"
          height="500"
          style={{ border: "0", marginRight: "1em" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full border-0"
        ></iframe>
      </div>
    </div>
  );
}
