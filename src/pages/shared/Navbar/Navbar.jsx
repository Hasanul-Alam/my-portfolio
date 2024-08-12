import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

// All the pages


const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // All the menu items here to avoid DRY
  const menuItems = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Resume",
      id: "resume",
    },
    {
      name: "Services",
      id: "services",
    },
    {
      name: "Portfolio",
      id: "portfolio",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  //   All the states here.
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <nav className="bg-black fixed w-full top-0 z-10">
        <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  to="/home"
                  className="h-8 w-8 text-2xl text-white hover:cursor-pointer"
                >
                  Hasanul
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4 gap-4">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className="cursor-pointer hover:text-white"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to={user ? "/dashboard/messages" : "/login"}
                    className="hover:text-white py-2 rounded-md text-sm font-medium"
                  >
                    {user ? "Dashboard" : "Admin"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScroll(item.id)}
                    className="text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <Link
              to={user ? "/dashboard/messages" : "/login"}
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {user ? "Dashboard" : "Admin"}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
