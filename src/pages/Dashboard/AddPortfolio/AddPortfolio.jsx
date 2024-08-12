import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const AddPortfolio = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleAddPortfolio = (data) => {
    const imageFile = { image: data.image[0] };
    // console.log(data)

    // Putting all the technologies in an array
    const technologies = data.technology;
    const technologyArray = technologies.split(",");

    // Putting all the features in an array
    const features = data.features;
    const featuresArray = features.split(",");

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=a034eb9194a3961792dc743224e30bd2",
        imageFile,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then(async (res) => {
        const imageLink = res.data.data.display_url;
        const portfolioData = {
          name: data.name,
          description: data.description,
          details: data.details,
          liveLink: data.liveLink,
          sourceLink: data.sourceLink,
          technology: technologyArray,
          features: featuresArray,
          img: imageLink,
        };
        const response = await axios.post(
          `https://portfolio-server-ah8e.onrender.com/add-portfolio`,
          portfolioData
        );
        if (response.data.insertedId) {
          reset();
          Swal.fire({
            title: "Added!",
            text: "Your portfolio has been added successfully.",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-[60%]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Portfolio Project
        </h2>
        <form onSubmit={handleSubmit(handleAddPortfolio)} className="space-y-6">
          <div className="flex gap-4">
            <div className="w-full">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-slate-300 text-black"
                placeholder="Enter Project Name"
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <input
                {...register("description")}
                type="text"
                id="description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-slate-300 text-black"
                placeholder="A line that define your project"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="liveLink"
              >
                Live Site Link
              </label>
              <input
                {...register("liveLink")}
                type="liveLink"
                id=" liveLink"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-slate-300"
                placeholder="Enter your live site link"
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="sourceLink"
              >
                Source Link
              </label>
              <input
                {...register("sourceLink")}
                type="text"
                id="sourceLink"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-slate-300 text-black"
                placeholder="Enter Source link?"
              />
            </div>
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="technologies"
            >
              Technologies
            </label>
            <textarea
              {...register("technology")}
              id="technologies"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-slate-300 text-black"
              rows="2"
              placeholder="Write which technologies you have used."
            ></textarea>
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="features"
            >
              Features
            </label>
            <textarea
              {...register("features")}
              id="features"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-slate-300 text-black"
              rows="2"
              placeholder="Write about the features of this project."
            ></textarea>
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="details"
            >
              Description
            </label>
            <textarea
              {...register("details")}
              id="details"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-slate-300 text-black"
              rows="4"
              placeholder="Write details this project."
            ></textarea>
          </div>
          <div>
            <input
              {...register("image")}
              type="file"
              id="description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-slate-300 text-black"
              rows="4"
              placeholder="Write description this project."
            ></input>
          </div>

          <button
            type="submit"
            className="w-full text-black bg-blue-400 font-semibold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPortfolio;
