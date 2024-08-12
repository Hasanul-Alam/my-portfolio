

const AboutMe = () => {
  return (
    <div className="bg-white py-10" id="about">
      <section className="w-[75%] mx-auto shadow-2xl p-10 max-md:shadow-none max-md:p-0 max-md:w-[90%]">
        <div className="grid grid-cols-2 gap-4 bg-white text-black max-md:grid-cols-1 gap-0">
          <div>
            <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
              <div className="">
                <img
                  src="https://i.ibb.co/8s1223N/profile-img.jpg"
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
                <p className="text-xs uppercase">html</p>
                <progress
                  className="progress progress-primary w-full mt-2"
                  value="40"
                  max="100"
                ></progress>
              </div>
              <div className="my-5">
                <p className="text-xs uppercase">css</p>
                <progress
                  className="progress progress-primary w-full"
                  value="70"
                  max="100"
                ></progress>
              </div>
              <div>
                <p className="text-xs uppercase">javascript</p>
                <progress
                  className="progress progress-primary w-full mt-2"
                  value="100"
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
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor
                at sem. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi. Nulla porttitor accum
              </p>
              <p className="my-3">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Vivamus suscipit tortor eget felis porttitor volutpat.
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. porttitor at sem.
              </p>
              <p>
                Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium
                ut lacinia in, elementum id enim. Nulla porttitor accumsan
                tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh
                pulvinar a.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
