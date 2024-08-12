import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSkill = () => {
  const { _id, name, link, progress } = useLoaderData();
  const { register, handleSubmit } = useForm();

  const handleUpdate = (data) => {
    // console.log(data);
    axios.patch(`https://portfolio-server-ah8e.onrender.com/update-skill/${_id}`, data)
    .then(res => {
        if(res.data.modifiedCount > 0){
            Swal.fire({
                title: "Updated",
                text: "Your skill has been updated",
                icon: "success"
              });
        }
    })
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-lg p-8 w-[60%] max-md:w-[95%] max-md:shadow-none max-md:p-0 max-md:bg-transparent">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Update Skill
          </h2>
          <form
            onSubmit={handleSubmit(handleUpdate)}
            className="space-y-6"
          >
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
                  htmlFor="progress"
                >
                  Progress
                </label>
                <input
                  {...register("progress")}
                  required
                  defaultValue={progress}
                  type="number"
                  id="progress"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-white text-black"
                  placeholder="Enter progress in %"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor=" link"
                >
                  Project Link
                </label>
                <input
                  {...register("link")}
                  required
                  defaultValue={link}
                  type="text"
                  id=" link"
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-white"
                  placeholder="Enter live site link"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-black bg-blue-400 font-semibold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              Update Skill
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateSkill;
