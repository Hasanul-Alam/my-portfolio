import { CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import useSkills from "../../../hooks/useSkills";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const AddSkill = () => {
  const [skills] = useSkills();
  const { register, handleSubmit, reset } = useForm();

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/add-skill/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your skill has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleAddSkill = (data) => {
    axios.post("http://localhost:5000/add-skill", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("Skill added successfully");
        reset();
      }
    });
  };

  return (
    <>
      <div className="">
        <h2 className="text-center text-2xl text-black my-10 font-semibold">
          <span className="border-b-2 border-blue-600 px-2">Your Skills</span>
        </h2>
        <table className="min-w-full bg-slate-300 text-black">
          <thead className="bg-gray-200 text-center">
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Progress</th>
              <th className="py-2 px-4 border">Project Link</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {skills.map((skill) => (
              <tr key={skill._id}>
                <td className="py-2 px-4 border">{skill.name}</td>
                <td className="py-2 px-4 border">{skill.progress}%</td>
                <td className="py-2 px-4 border">
                  <a target="blank" href={skill.link}>
                    {skill.link}
                  </a>
                </td>
                <td className="py-2 px-4 border flex gap-2">
                  <button
                    onClick={() => handleEdit(skill._id)}
                    className="inline-block bg-green-600 p-3 mx-2 rounded-lg"
                  >
                    <CiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(skill._id)}
                    className="inline-block bg-red-600 p-3 mx-2 rounded-lg"
                  >
                    <FaRegTrashCan />
                  </button>
                </td>
              </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>

        {/* Add skill Form */}
        <div className="py-5 w-[95%] mx-auto">
          <h2 className="text-center text-2xl text-black my-10 font-semibold">
            <span className="border-b-2 border-blue-600 px-2">Add Skill</span>
          </h2>
          <form onSubmit={handleSubmit(handleAddSkill)} action="">
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <input
                {...register("name")}
                type="text"
                placeholder="Skill Name"
                className="input input-bordered input-primary w-full bg-white text-black"
                required
              />
              <input
                {...register("progress")}
                type="number"
                placeholder="Progress"
                className="input input-bordered input-primary w-full bg-white text-black"
                required
              />
            </div>
            <input
              {...register("link")}
              type="text"
              placeholder="Project Link"
              className="input input-bordered input-primary w-full bg-white text-black my-5"
              required
            />
            <div className="text-center mt-5">
              <button
                type="submit"
                className="btn bg-blue-600 border-0 hover:bg-blue-700 rounded-lg text-white"
              >
                Add Skill
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSkill;
