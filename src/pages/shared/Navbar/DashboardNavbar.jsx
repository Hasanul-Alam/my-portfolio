import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out bg-gray-800 text-white w-64 p-4 h-screen`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Logo</h2>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            ✖️
          </button>
        </div>
        <nav className="mt-4">
          <Link to="/"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Home
          </Link>
          <Link to="/dashboard/messages"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Messages
          </Link>
          <Link to="/dashboard/add-skill"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Add Skill
          </Link>
          <Link to="/dashboard/add-resume-skill"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Add Resume Skill
          </Link>
          <Link to="/dashboard/add-service"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Add Service
          </Link>
          <Link to="/dashboard/add-portfolio"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Add Portfolio
          </Link>
          <Link to="/dashboard/update-contact"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Update Contact
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:ml-64">
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleSidebar}
        >
          🍔
        </button>
        {/* Outlet */}
        <div className="mt-5">
          <h1 className="text-3xl font-bold">Main Content</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
