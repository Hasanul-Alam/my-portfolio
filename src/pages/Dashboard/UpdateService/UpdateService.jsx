import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateService = () => {
  const { _id, name, price, duration, reviews, description } = useLoaderData();
  const { register, handleSubmit } = useForm();
  const handleUpdate = (data) => {
    // console.log(data)
    axios
      .patch(`http://localhost:5000/update-service/${_id}`, data)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated",
            text: "Service has been updated successfully.",
            icon: "success",
          });
        }
      });
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-lg p-8 w-[60%]">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Add Portfolio Project
          </h2>
          <form onSubmit={handleSubmit(handleUpdate)} className="space-y-6">
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
                  required
                  defaultValue={name}
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-white text-black"
                  placeholder="Enter Project Name"
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  {...register("price")}
                  defaultValue={price}
                  required
                  type="number"
                  id="price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-white text-black"
                  placeholder="Enter price in %"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor=" duration"
                >
                  Duration
                </label>
                <input
                  {...register("duration")}
                  defaultValue={duration}
                  required
                  type="text"
                  id=" duration"
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-white"
                  placeholder="Enter live site duration"
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor=" reviews"
                >
                  Reviews
                </label>
                <input
                  {...register("reviews")}
                  defaultValue={reviews}
                  required
                  type="text"
                  id=" reviews"
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-white"
                  placeholder="Enter live site duration"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor=" description"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                defaultValue={description}
                required
                type="text"
                id=" description"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-white"
                placeholder="Enter live site duration"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full text-black bg-blue-400 font-semibold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              Update Service
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateService;
