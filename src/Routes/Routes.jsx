import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import Messages from "../pages/Dashboard/Messages/Messages";
import AddSkill from "../pages/Dashboard/AddSkill/AddSkill";
import AddResumeSkill from "../pages/Dashboard/AddResumeSkill/AddResumeSkill";
import AddService from "../pages/Dashboard/AddService/AddService";
import AddPortfolio from "../pages/Dashboard/AddPortfolio/AddPortfolio";
import UpdateContact from "../pages/Dashboard/UpdateContact/UpdateContact";

export const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
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
  {
    path: "/dashboard",
    element: (
      <Dashboard></Dashboard>
    ),
    children:[
      {
        path: "messages",
        element: <Messages></Messages>
      },
      {
        path: "add-skill",
        element: <AddSkill></AddSkill>
      },
      {
        path: "add-resume-skill",
        element: <AddResumeSkill></AddResumeSkill>
      },
      {
        path: "add-service",
        element: <AddService></AddService>
      },
      {
        path: "add-portfolio",
        element: <AddPortfolio></AddPortfolio>
      },
      {
        path: "update-contact",
        element: <UpdateContact></UpdateContact>
      },
    ]
  },
]);
