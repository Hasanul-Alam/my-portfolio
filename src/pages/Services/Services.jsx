import { useState, useEffect } from "react";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import { FaCode } from "react-icons/fa";

// Sliding Library.
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Data fetching
    fetch("https://portfolio-server-ah8e.onrender.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-white py-10" id="services">
      <section className="w-[75%] mx-auto max-md:w-[95%]">
        {/* Section Heading */}
        <SectionHeading
          heading={"Services"}
          subHeading={
            "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
          }
        ></SectionHeading>

        {/* Services Cards */}
        <div
          className="grid grid-cols-3 gap-4 text-center max-md:grid-cols-1"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          {services.map((service) => (
            <div
              key={service._id}
              className="px-10 py-14 text-start shadow-md shadow-slate-500 rounded-lg hover:cursor-pointer border-b-4 border-blue-600 duration-300 mt-3 hover:mt-0 hover:mb-3 group"
            >
              <div>
                <p className="bg-blue-500 p-5 inline-block text-white text-2xl rounded-full">
                  <FaCode />
                </p>
                <h2 className="capitalize text-2xl font-semibold my-3 text-black group-hover:text-blue-600">
                  {service.name}
                </h2>
                <p className="text-black">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
