import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const AddPortfolio = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleAddPortfolio = (data) => {
    const imageFile = { image: data.image[0] };
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
          duration: data.duration,
          date: data.date,
          link: data.link,
          about: data.about,
          image: imageLink,
        };
        const response = await axios.post(
          `http://localhost:5000/add-portfolio`,
          portfolioData
        );
        if (response.data.insertedId) {
          reset();
          Swal.fire({
            title: "Added!",
            text: "Your portfolio has been added successfully.",
            icon: "success"
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
                htmlFor="duration"
              >
                Duration
              </label>
              <input
                {...register("duration")}
                type="text"
                id="duration"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-slate-300 text-black"
                placeholder="Enter Project Duration"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor=" date"
              >
                Date
              </label>
              <input
                {...register(" date")}
                type="date"
                id=" date"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-slate-300"
                placeholder="When you had done this project?"
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="link"
              >
                Link
              </label>
              <input
                {...register("link")}
                type="text"
                id="link"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-slate-300 text-black"
                placeholder="Enter project link?"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              About
            </label>
            <textarea
              {...register("about")}
              id="about"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-slate-300 text-black"
              rows="4"
              placeholder="Write about this project."
            ></textarea>
          </div>
          <div>
            <input
              {...register("image")}
              type="file"
              id="about"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-slate-300 text-black"
              rows="4"
              placeholder="Write about this project."
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
