import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

export default function CEOSection() {
  return (
    <section className="bg-[#031B34] text-white py-8 mt-20 h-screen ">
      <div className="max-w-[1200px] mx-auto ">
        {/* Header */}
        <h2 className="text-[30px] md:text-[60px] text-center md:text-left font-bold mt-12 mb-10">
          Word from our CEO
        </h2>

        <div className="md:flex flex-row-reverse items-center gap-6 hidden">
          {/* Image */}
          <div className="absolute z-20 translate-x-20 translate-y-8">
            <Image
              src="/ceo.png"
              alt="Mr. Seth Duodu"
              width={500}
              height={200}
            />
          </div>

          {/* Content */}
          <div className=" relative bg-gray-800 px-8 py-20 translate-y-40 rounded-lg shadow-lg flex-1">
            <div className="max-w-[500px]">
              <h3 className="text-xl font-semibold mb-2 text-[25px] tracking-wider">
                C.E.O
              </h3>
              <h4 className="text-lg font-bold mb-4 text-[25px] tracking-wider">
                Mr. Seth Duodu
              </h4>
              <p className="text-[#81AFDD] text-xl mb-6 leading-relaxed">
                &quot;Lorem ipsum dolor sit amet consectetur. In neque mollis
                amet mauris malesuada turpis auctor lectus. Turpis pharetra
                fermentum justo egestas risus dignissim tem&quot;
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 text-xl">
                <a
                  href="#"
                  className="text-white hover:text-gray-400 "
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-400"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-400"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-400"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* modile screen */}
        <div className="flex flex-col justify-center items-center md:hidden gap-6">
          <Image src="/ceo.png" alt="Mr. Seth Duodu" width={400} height={100} />

          <div className="max-w-[500px] bg-gray-800 px-4 py-6">
            <h3 className=" font-semibold mb-2 text-[25px] tracking-wider">
              C.E.O
            </h3>
            <h4 className="text-sm font-bold mb-4 text-[25px] tracking-wider">
              Mr. Seth Duodu
            </h4>
            <p className="text-[#81AFDD] text-[18px] mb-6 leading-relaxed">
              &quot;Lorem ipsum dolor sit amet consectetur. In neque mollis amet
              mauris malesuada turpis auctor lectus. Turpis pharetra fermentum
              justo egestas risus dignissim tem&quot;
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl">
              <a
                href="#"
                className="text-white hover:text-gray-400 "
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
