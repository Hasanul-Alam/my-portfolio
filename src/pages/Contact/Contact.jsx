import SectionHeading from "../shared/SectionHeading/SectionHeading";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white py-10">
      <section className="w-[70%] mx-auto max-md:w-[95%]">
        {/* Section Heading */}
        <SectionHeading
          heading={"Contact"}
          subHeading={
            "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
          }
        ></SectionHeading>
        {/* First Section of Contact */}
        <div className="grid grid-cols-3 gap-4 text-black my-10 shadow-lg shadow-slate-400 px-10 py-7 rounded-lg max-md:grid-cols-1 max-md:px-3 max-md:shadow-none">
          <div className="flex items-center justify-center max-md:justify-start">
            <div className="bg-blue-600 p-3 text-2xl text-white rounded-full">
              <IoLocationOutline />
            </div>
            <div className="ms-5">
              <h3 className="text-xl font-semibold">Address</h3>
              <p>Chapainawabganj, Rajshahi, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center justify-center max-md:justify-start">
            <div className="bg-blue-600 p-3 text-2xl text-white rounded-full">
              <IoCallOutline />
            </div>
            <div className="ms-5">
              <h3 className="text-xl font-semibold">Call Me</h3>
              <p>+8801797888924</p>
            </div>
          </div>
          <div className="flex items-center justify-center max-md:justify-start">
            <div className="bg-blue-600 p-3 text-2xl text-white rounded-full">
              <FaRegEnvelope />
            </div>
            <div className="ms-5">
              <h3 className="text-xl font-semibold">Email</h3>
              <p>hasanul.alam.professional@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Message section of contact */}
        <div className="shadow-lg shadow-slate-400 px-10 py-7 rounded-lg max-md:px-3 max-md:shadow-none">
          <form action="">
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered input-primary w-full bg-white text-black"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered input-primary w-full bg-white text-black"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-primary w-full bg-white text-black my-5"
              required
            />
            <textarea
              className="textarea textarea-primary bg-white text-black w-full"
              placeholder="Message"
            ></textarea>
            <div className="text-center mt-5">
              <button className="btn bg-blue-600 border-0 hover:bg-blue-700 rounded-full text-white">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
