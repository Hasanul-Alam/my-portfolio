import SectionHeading from "../shared/SectionHeading/SectionHeading";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleSendMessage = (data) => {
    axios.post('https://portfolio-server-ah8e.onrender.com/message', {...data, "status":"not read"})
    .then(res => {
      if(res.data.insertedId){
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your message have been sent succesfully."
        });
        reset();
      }
    })
  };
  return (
    <div className="bg-white py-10" id="contact">
      <section className="w-[70%] mx-auto max-md:w-[95%]">
        {/* Section Heading */}
        <SectionHeading
          heading={"Contact"}
          subHeading={
            "Let's work together! Contact me for any project discussion or quaries"
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
          <form onSubmit={handleSubmit(handleSendMessage)} action="">
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <input
                {...register("name")}
                type="text"
                placeholder="Your Name"
                className="input input-bordered input-primary w-full bg-white text-black"
                required
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="input input-bordered input-primary w-full bg-white text-black"
                required
              />
            </div>
            <input
              {...register("subject")}
              type="text"
              placeholder="Subject"
              className="input input-bordered input-primary w-full bg-white text-black my-5"
              required
            />
            <textarea
              {...register("message")}
              rows={5}
              className="textarea textarea-primary bg-white text-black w-full"
              placeholder="Message"
            ></textarea>
            <div className="text-center mt-5">
              <button
                type="submit"
                className="btn bg-blue-600 border-0 hover:bg-blue-700 rounded-full text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
