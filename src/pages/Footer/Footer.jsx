import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-blue-100 py-10" id="footer">
      <div className="flex items-center justify-center">
        <a href="https://www.facebook.com/hasanul.alam.prince" target="blank" className="">
          <div className="text-xl text-black hover:text-white p-3 hover:bg-blue-500 rounded-full border border-blue-500">
            <FaFacebookF />
          </div>
        </a>
        <a href="https://github.com/Hasanul-Alam" target="blank" className="mx-5">
          <div className="text-xl text-black hover:text-white p-3 hover:bg-blue-500 rounded-full border border-blue-500">
            <FiGithub />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/hasanul-alam/" target="blank" className="">
          <div className="text-xl text-black hover:text-white p-3 hover:bg-blue-500 rounded-full border border-blue-500">
            <FaLinkedinIn />
          </div>
        </a>
      </div>
      <div className="text-center mt-5">
        <p className="capitalize text-gray-500 text-sm">designed by bootstrapMade</p>
      </div>
      <div className="text-center">
        <p className="capitalize text-gray-500 text-sm">
          {" "}
          &copy; copyright <strong className="">hasanul alam</strong> all rights
          resevered
        </p>
      </div>
    </div>
  );
};

export default Footer;
