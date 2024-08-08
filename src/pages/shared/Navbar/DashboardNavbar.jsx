import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex bg-slate-100 text-black">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out bg-slate-100 text-black w-64 p-4 h-screen`}
      >
        <div className="flex items-center justify-between">
          <Link to="/dashboard/messages"><h2 className="text-2xl font-bold">Admin {'(Hasanul)'}</h2></Link>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            ✖️
          </button>
        </div>
        <nav className="mt-4">
          <Link to="/"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-slate-300"
          >
            Home
          </Link>
          <Link to="/dashboard/messages"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-slate-200"
          >
            Messages
          </Link>
          <Link to="/dashboard/add-skill"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-slate-200"
          >
            Add Skill
          </Link>
          <Link to="/dashboard/add-service"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-slate-200"
          >
            Add Service
          </Link>
          <Link to="/dashboard/add-portfolio"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-slate-200"
          >
            Add Portfolio
          </Link>
          <Link to="/dashboard/update-contact"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-slate-200"
          >
            Update Contact
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 bg-slate-100 overflow-x-scroll">
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleSidebar}
        >
          🍔
        </button>
        {/* Outlet */}
        <div className="mt-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
