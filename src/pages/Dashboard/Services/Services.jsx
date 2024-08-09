import axios from "axios";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
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
        axios.delete(`http://localhost:5000/service/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Service has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="w-[95%] mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-300 text-black">
          <thead className="bg-gray-200 text-center">
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Duration</th>
              <th className="py-2 px-4 border">Reviews</th>
              <th className="py-2 px-4 border">Description</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {services.map((service) => (
              <tr key={service._id}>
                <td className="py-2 px-4 border">{service.name}</td>
                <td className="py-2 px-4 border">${service.price}</td>
                <td className="py-2 px-4 border">{service.duration}</td>
                <td className="py-2 px-4 border">{service.reviews}</td>
                <td className="py-2 px-4 border">
                  {service.description.slice(0, 30)}...
                </td>
                <td className="py-2 px-4 border flex gap-2 justify-center items-center">
                  <Link to={`/dashboard/update-service/${service._id}`}>
                    <button
                      onClick={() => handleEdit(service._id)}
                      className="inline-block bg-green-600 p-3 rounded-lg"
                    >
                      <CiEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="inline-block bg-red-600 p-3 rounded-lg"
                  >
                    <FaRegTrashCan />
                  </button>
                </td>
              </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
