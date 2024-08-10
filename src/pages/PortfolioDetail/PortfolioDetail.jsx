import { useLoaderData } from "react-router-dom";

const PortfolioDetail = () => {
  const { name, description, details, technology, link, img } = useLoaderData();
  return (
    <div className="bg-gray-100 min-h-screen p-5 mt-[4rem]">
      {/* Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-600 text-white p-5">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="mt-2">{description}</p>
        </div>

        {/* Image Section */}
        <div className="p-5">
          <img
            src={img}
            alt="Project Screenshot"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Project Details Section */}
        <div className="p-5 text-black">
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <p className="text-gray-700 mb-4">{details}</p>
          <h2 className="text-lg font-semibold mb-2">Technology Used</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {technology.map((item) => (
              <li className="uppercase" key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-200 p-5 text-center text-black">
          <a href={link} target="blank">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Visit Project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
