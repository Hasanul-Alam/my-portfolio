import useSkills from "../../../hooks/useSkills";
import Swal from "sweetalert2";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Skills = () => {
  const [skills] = useSkills();

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
  return (
    <div className="w-[90%] mx-auto">
      <div className="overflow-x-auto">
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
                <td className="py-2 px-4 border">{skill.link.slice(0, 30)}...</td>
                <td className="py-2 px-4 border">
                  <Link to={`/dashboard/update-skill/${skill._id}`}>
                    <button
                      className="inline-block bg-green-600 p-3 mx-2 rounded-lg"
                    >
                      <CiEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(skill._id)}
                    className="inline-block bg-red-600 p-3 mx-2 rounded-lg"
                  >
                    <FaRegTrashCan />
                  </button>
                </td>
                {/* {console.log(skill.link)} */}
              </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skills;
