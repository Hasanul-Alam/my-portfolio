const AboutMe = () => {
  return (
    <div className="bg-white py-10" id="about">
      <section className="w-[75%] mx-auto shadow-2xl p-10 max-md:shadow-none max-md:p-0 max-md:w-[90%]">
        <div className="grid grid-cols-2 gap-4 bg-white text-black max-md:grid-cols-1 gap-0">
          <div>
            <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
              <div className="">
                <img
                  src="https://i.ibb.co.com/PYgMtcc/IMG20240915152138.jpg"
                  alt="Profile Image"
                />
              </div>
              <div className="mt-10 leading-8 ms-3 max-md:mt-3">
                <p>
                  <span className="text-gray-800 font-semibold">Name: </span>
                  Hasanul Alam
                </p>
                <p>
                  <span className="text-gray-800 font-semibold">Profile: </span>
                  Front End Developer
                </p>
                <p>
                  <span className="text-gray-800 font-semibold">Email: </span>
                  hasanul.alam.professional@gmail.com
                </p>
                <p>
                  <span className="text-gray-800 font-semibold">Phone: </span>
                  +8801797888924
                </p>
              </div>
            </div>
            <div className="w-[90%] max-md:w-[95%] max-md:mx-auto">
              <p className="font-semibold text-xl my-5">Skills</p>
              <div>
                <p className="text-xs uppercase">javascript</p>
                <progress
                  className="progress progress-primary w-full mt-2"
                  value="80"
                  max="100"
                ></progress>
              </div>
              <div className="my-5">
                <p className="text-xs uppercase">React</p>
                <progress
                  className="progress progress-primary w-full"
                  value="75"
                  max="100"
                ></progress>
              </div>
              <div>
                <p className="text-xs uppercase">mongodb</p>
                <progress
                  className="progress progress-primary w-full mt-2"
                  value="90"
                  max="100"
                ></progress>
              </div>
              <div className="mt-3">
                <p className="text-xs uppercase">node</p>
                <progress
                  className="progress progress-primary w-full mt-2"
                  value="85"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
          <div className="mt-5 ms-5 max-md:ms-0">
            <h3 className="text-2xl font-bold inline border-b-2 border-indigo-500">
              About Me
            </h3>
            <div className="mt-6 leading-7 text-lg text-gray-600 font-semibold">
              <p>
                I am a skilled MERN stack developer with a solid foundation in
                full-stack web development. My journey in web development has
                allowed me to build and deploy a variety of projects, each one
                enhancing my understanding of the intricacies of modern web
                applications.
              </p>
              <p className="my-3">
                I specialize in creating responsive, single-page applications
                (SPAs) using the MERN stack—MongoDB, Express.js, React, and
                Node.js. My work is characterized by a focus on clean code,
                efficient data management, and user-friendly interfaces.
              </p>
              <p>
                I am passionate about continuously improving my technical skills
                and staying updated with the latest developments in the field.
                Although I am in the early stages of my professional career, I
                have successfully completed some projects that demonstrate my
                ability to turn ideas into fully functional web applications.My
                goal is to contribute to innovative projects that push the
                boundaries of web development while delivering exceptional user
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
