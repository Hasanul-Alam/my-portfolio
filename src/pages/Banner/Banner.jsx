import "./Banner.css";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <>
      <section className="banner-section mt-[4rem]" id="home">
        <div className="relative banner-image flex justify-center items-center">
          <img
            src="https://i.ibb.co/s2gd0Cf/Untitled-design3.png"
            width={'100%'}
            alt="Hero Image"
            className="opacity-40 object-cover w-full h-screen max-md:h-[300px]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-7xl max-md:text-xl font-bold">
                I am Hasanul Alam
              </h1>
              <p className="text-md md:text-3xl mt-2">
                <ReactTyped
                  backSpeed={50}
                  strings={[
                    "Web Developer",
                    "Web Designer",
                    "Freelancer",
                  ]}
                  typeSpeed={50}
                  loop
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
