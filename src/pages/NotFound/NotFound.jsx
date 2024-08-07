
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg text-center">
        <img src="https://i.ibb.co/nRRQKW8/404-error-dribbble-800x600.gif" alt="" />
        <p className="text-2xl mt-4 mb-8 text-gray-700">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-full shadow hover:bg-indigo-700 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
