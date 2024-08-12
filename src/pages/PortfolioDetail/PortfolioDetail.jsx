import { useLoaderData } from "react-router-dom";

const PortfolioDetail = () => {
  const {
    name,
    description,
    details,
    technology,
    features,
    liveLink,
    sourceLink,
    img,
  } = useLoaderData();
  console.log(useLoaderData());
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 p-6 text-center">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-lg mt-2">{description}</p>
      </header>

      {/* Main Content */}
      <main className="p-8 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Image */}
          <div className="lg:w-1/2">
            <img
              src={img}
              alt="Project Screenshot"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Project Details */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">About the Project</h2>
            <p className="text-gray-400 mb-4">{details}</p>
            <div className="mt-6 flex">
              <a
                target="blank"
                href={liveLink}
                className="bg-teal-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-teal-500 transition mr-4 hover:cursor-pointer max-md:px-5"
              >
                View Live Project
              </a>
              <a
                target="blank"
                href={sourceLink}
                className="bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition max-md:px-5"
              >
                View Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-4">
            {technology.map((item) => (
              <span
                key={item}
                className="uppercase bg-gray-800 px-4 py-2 rounded-lg text-teal-400"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Additional Sections */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
          <ul className="list-disc list-inside text-gray-400">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-6 text-center">
        <p>&copy; 2024 Hasanul Alam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioDetail;
