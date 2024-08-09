import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MessageDetail = () => {
  const { _id, name, email, subject, message } = useLoaderData();

  const handleReadingStatus = (id) => {
    const {_id, ...doc} = message;
    const updatedDoc = {...doc, "status":"read"};
    axios.patch(`http://localhost:5000/message/${id}`, updatedDoc)
    .then(res => {
      if(res.data.modifiedCount > 0){
        Swal.fire({
          title: "Updated",
          text: "Message status has been updated successfully",
          icon: "success"
        });
      }
    })
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-[60%]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {name}
        </h2>
        <div className="flex gap-4">
          <div className="w-full">
            <h4 className="px-2 py-1 text-md font-semibold">Name</h4>
            <div className="border border-blue-600 rounded-lg py-2 px-3">
              {name}
            </div>
          </div>
          <div className="w-full">
            <h4 className="px-2 py-1 text-md font-semibold">Email</h4>
            <div className="border border-blue-600 rounded-lg py-2 px-3">
              {email}
            </div>
          </div>
          <div className="w-full">
            <h4 className="px-2 py-1 text-md font-semibold">Subject</h4>
            <div className="border border-blue-600 rounded-lg py-2 px-3">
              {subject}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h4 className="px-2 py-1 text-md font-semibold">Message</h4>
          <div className="border border-blue-600 rounded-lg py-2 px-3">
            {message}
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button onClick={()=>handleReadingStatus(message._id)} className="btn btn-primary capitalize">I have read it</button>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;
