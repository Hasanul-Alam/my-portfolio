import { useEffect } from "react";
import useSkills from "../../hooks/useSkills";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
// Sliding Library.
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Resume = () => {
  const [skills] = useSkills();

  // AOS useEffect
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animation in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="bg-white py-10" id="resume">
      <section className="w-[75%] mx-auto max-md:w-[95%]">
        {/* Section Heading */}
        <SectionHeading
          heading={"Resume"}
          subHeading={
            "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
          }
        ></SectionHeading>

        {/* Main resume section */}
        <div className="grid grid-cols-2 gap-4 mt-16 text-black max-md:grid-cols-1">
          <div data-aos="flip-left" data-aos-anchor-placement="top-center">
            {/* Summary */}
            <h3 className="text-2xl font-semibold">Summary</h3>
            <div className="border-indigo-600 border-l-4 max-md:border-0 text-gray-600 pb-1">
              <div className="ps-3">
                <h4 className="text-xl my-3 font-semibold text-lg">
                  Hasanul Alam
                </h4>
                <p className="leading-7">
                  Innovative and deadline-driven Graphic Designer with 3+ years
                  of experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </p>
                <ul className="list-disc ps-5 mt-3 leading-8">
                  <li>Bashar Road, Rajshahi</li>
                  <li>+8801797888924</li>
                  <li>hasanul.alam.professional@gmaill.com</li>
                </ul>
              </div>
            </div>
            {/* Education */}
            <h3 className="text-2xl font-semibold mt-5">Education</h3>
            <div className="border-indigo-600 border-l-4 max-md:border-0 text-gray-600 pb-1">
              <div className="ps-3">
                <h4 className="mt-3 text-black text-lg font-semibold">
                  Bachelor of Science
                </h4>
                <p className="italic">2018-2024</p>
                <p className="">Rajshahi Government City College</p>
                <p className="my-3 leading-7">
                  I hold a Bachelor degree in Physics, where I gained a strong
                  foundation in classical mechanics, electromagnetism, quantum
                  mechanics, and thermodynamics. My coursework emphasized
                  problem-solving, analytical skills, and experimental
                  techniques, preparing me for diverse technical challenges and
                  further academic pursuits.
                </p>
              </div>
            </div>
            <div className="border-indigo-600 border-l-4 max-md:border-0 mt-5 pb-1">
              <div className="ps-3">
                <h4 className="font-semibold text-lg">
                  Higher Secondary Certificate
                </h4>
                <p className="italic">2015-2017</p>
                <p>Masjid Mission Academy</p>
                <p className="mt-3 leading-7">
                  I completed my Higher Secondary Certificate in the Science
                  department, focusing on subjects like Physics, Chemistry, and
                  Mathematics. This rigorous coursework honed my analytical and
                  problem-solving skills, preparing me for further studies in
                  science.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-anchor-placement="top-center">
            <h3 className="text-2xl font-semibold">Projects & Portfolios</h3>
            <div className="border-indigo-600 border-l-4 max-md:border-0 pb-3 text-gray-600">
              <div className="ps-3 mt-3 leading-7">
                <p className="text-lg font-semibold text-black">
                  Furnico &#40; A Simple E-Commerce Platform &#41;
                </p>
                <p>Duration: 10 days</p>
                <p className="italic">
                  Technology Used: React, Node, Express.js, Mongodb, Firebase
                  Authentication
                </p>
                <ul className="list-disc ps-10">
                  <li>
                    Simple E-Commerce application to manage orders, products,
                    users and sales.
                  </li>
                  <li>
                    Users can add and remove products from cart, can see order
                    status and give reviews.
                  </li>
                  <li>Firebase Authentication System</li>
                  <li>
                    Github Links:{" "}
                    <a
                      href="https://github.com/Hasanul-Alam/furnico-client-side"
                      target="blank"
                      className="ps-3 text-blue-500 block"
                    >
                      https://github.com/Hasanul-Alam/furnico-client-side
                    </a>
                    <a
                      href="https://github.com/Hasanul-Alam/furnico-server"
                      target="blank"
                      className="ps-3 text-blue-500 block"
                    >
                      https://github.com/Hasanul-Alam/furnico-server
                    </a>
                  </li>
                  <li>
                    Live Site Link:
                    <a
                      href="https://simple-react-authenticat-6665c.web.app/"
                      target="blank"
                      className="ps-3 text-blue-500 block"
                    >
                      https://simple-react-authenticat-6665c.web.app/
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-5 mb-3">Skills</h3>
            <div className="border-indigo-600 border-l-4 max-md:border-0 text-gray-600">
              <div className="ps-3">
                <h4 className="text-black text-lg font-semibold">
                  Mern Stack Developer
                </h4>
                <p className="my-2 font-semibold">Skillset:</p>
                {skills.map((skill) => (
                  <div
                    key={skill._id}
                    className="inline-block px-4 py-2 bg-blue-400 rounded-full text-black mx-1 mt-2 ms-0"
                  >
                    <span className="text-center uppercase">{skill.name}</span>
                  </div>
                ))}
                <h4 className="mt-3 font-semibold text-black">About Me: </h4>
                <p className="leading-7 mb-3">
                  I am a MERN stack developer with a strong foundation in
                  MongoDB, Express.js, React, and Node.js. I have hands-on
                  experience building full-stack web applications, focusing on
                  creating responsive, user-friendly interfaces and efficient
                  backend solutions. I am eager to contribute to dynamic
                  development teams and grow my skills.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto text-center mt-10">
          <a
            href="https://drive.google.com/file/d/1ziBx2WwJZ8ypEun5pNhwIy-Fk1CHaLHr/view?usp=drive_link"
            target="blank"
          >
            <button className="btn btn-primary">View Full Resume</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resume;
