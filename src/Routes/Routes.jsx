import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound/>,
  },
  {
    path: "/home",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
