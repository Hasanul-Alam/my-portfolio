import axios from "axios";
import { useEffect, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Messages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/messages").then((res) => {
      setMessages(res.data);
    });
  }, []);

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
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {messages.map((message) => (
              <tr key={message._id}>
                <td className="py-2 px-4 border">{message.name}</td>
                <td className="py-2 px-4 border">{message.email}</td>
                <td className="py-2 px-4 border">
                  {message.message.slice(0, 30)}{message.message.length > 30 ?'...' : ''}
                </td>
                <td className="py-2 px-4 border text-center">
                  <p
                    className={`p-1 rounded-full text-xs w-[60%] mx-auto ${
                      message.status === "read"
                        ? "bg-green-300"
                        : "bg-yellow-300"
                    }`}
                  >
                    {message.status === 'read' ? 'Seen' : 'Unseen'}
                  </p>
                </td>
                <td className="py-2 px-4 border flex gap-2 justify-center items-center">
                  <Link to={`/dashboard/message-detail/${message._id}`}>
                    <button className="inline-block bg-green-600 p-3 rounded-lg">
                      <FaBookReader />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(message._id)}
                    className="inline-block bg-red-600 p-3 rounded-lg"
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
