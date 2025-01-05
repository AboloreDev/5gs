import About from "./components/AboutUs/About";
import Appointment from "./components/BookAppointment/Appointment";
import CEOSection from "./components/CEO/CeoSection";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/OurServices/Service";

export default function Home() {
  return (
    <div className="bg-primary-darkBlue  dark:bg-primary-darkBackground">
      <div className="min-h-screen">
        {" "}
        {/* navbar */}
        <Navbar />
        {/* Hero */}
        <Hero />
        {/* About Us */}
        <About />
        {/* services */}
        <Service />
        {/* Gallery */}
        <Gallery />
        {/* Get In Touch */}
        <GetInTouch />
        {/* appointment */}
        <Appointment />
        {/* Ceo */}
        <CEOSection />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
