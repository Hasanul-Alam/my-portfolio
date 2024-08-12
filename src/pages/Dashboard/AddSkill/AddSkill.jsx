import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const AddSkill = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleAddSkill = (data) => {
    if (data.progress > 100 || data.progress <= 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Progress cannot be more than 100% and less than or equal to 0%!",
      });
    } else {
      axios.post("http://localhost:5000/add-skill", data).then((res) => {
        if (res.data.insertedId) {
          Swal.fire("Skill added successfully");
          reset();
        }
      });
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-lg p-8 w-[60%]">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Add Skill
          </h2>
          <form onSubmit={handleSubmit(handleAddSkill)} className="space-y-6">
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
                  {...register(" link")}
                  required
                  type="link"
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
              Add Portfolio
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSkill;
