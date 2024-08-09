import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const UpdateContact = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleUpdateContact = (data) => {
    axios.post("http://localhost:5000/contact", data).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Updated",
          text: "Contact has been updated successfully.",
          icon: "success",
        });
        reset();
      }
    });
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-lg p-8 w-[60%]">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Update Contact
          </h2>
          <form
            onSubmit={handleSubmit(handleUpdateContact)}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <div className="w-full">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  {...register("address")}
                  type="text"
                  id="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-white"
                  placeholder="Enter your address"
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  {...register("phone")}
                  type="text"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2   bg-white"
                  placeholder="Enter curent phone number"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-white"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-black bg-blue-400 font-semibold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateContact;
