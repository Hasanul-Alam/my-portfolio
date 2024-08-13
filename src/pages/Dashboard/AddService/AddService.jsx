import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleAddService = (data) => {
    axios.post("https://portfolio-server-ah8e.onrender.com/add-service", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Added",
          text: "Service has been added successfully.",
          icon: "success",
        });
        reset();
      }
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center max-md:items-start">
      <div className="bg-white shadow-xl rounded-lg p-8 w-[60%] max-md:w-[95%] max-md:p-0 max-md:bg-transparent max-md:shadow-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Service
        </h2>
        <form onSubmit={handleSubmit(handleAddService)} className="space-y-6">
          <div className="flex gap-4 max-md:block">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-white"
                placeholder="Enter Service Name"
              />
            </div>
            <div className="w-full max-md:mt-5">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                {...register("price")}
                type="number"
                id="price"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-white"
                placeholder="Enter price ($)"
              />
            </div>
          </div>
          <div className="flex gap-4 max-md:block">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-white"
                placeholder="Enter Service Duration. Exg: 10 days"
              />
            </div>
            <div className="w-full max-md:mt-5">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="reviews"
              >
                Reviews
              </label>
              <input
                {...register("reviews")}
                type="text"
                id="reviews"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-white"
                placeholder="How many times will you recheck it? Ans: 5 times"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              Description
            </label>
            <textarea
              {...register("description")}
              id="description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-white"
              rows="4"
              placeholder="Write your service description"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-black bg-blue-400 font-semibold py-2 px-4 rounded-lg shadow-lg"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
