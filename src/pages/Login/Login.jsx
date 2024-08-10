import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setLoading, setUser, loginWithEmailPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(useContext(AuthContext))

  const { register, handleSubmit, reset } = useForm();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitLogin = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    loginWithEmailPassword(email, password)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        navigate('/dashboard/messages');
        reset();
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit(submitLogin)}>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-black"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-black"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                onChange={toggleShowPassword}
                type="checkbox"
                id="remember"
                className="form-checkbox bg-white"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Show Password
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mt-6"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
