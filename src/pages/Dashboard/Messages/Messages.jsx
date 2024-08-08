import axios from "axios";
import { useEffect, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
const Messages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/messages").then((res) => {
      setMessages(res.data);
    });
  }, []);

  const handleSeeMoreButton = () => {
    console.log("Show More");
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
        axios.delete(`http://localhost:5000/messages/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-300 text-black">
          <thead className="bg-gray-200 text-center">
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Message</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {messages.map((message) => (
              <tr key={message._id}>
                <td className="py-2 px-4 border">{message.name}</td>
                <td className="py-2 px-4 border">{message.email}</td>
                <td className="py-2 px-4 border">{message.message}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={handleSeeMoreButton}
                    className="inline-block bg-green-600 p-3 mx-2 rounded-lg"
                  >
                    <FaBookReader />
                  </button>
                  <button
                    onClick={() => handleDelete(message._id)}
                    className="inline-block bg-red-600 p-3 mx-2 rounded-lg"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Messages;
