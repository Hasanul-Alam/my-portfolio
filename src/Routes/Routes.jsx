import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import Messages from "../pages/Dashboard/Messages/Messages";
import AddSkill from "../pages/Dashboard/AddSkill/AddSkill";
import AddService from "../pages/Dashboard/AddService/AddService";
import AddPortfolio from "../pages/Dashboard/AddPortfolio/AddPortfolio";
import UpdateContact from "../pages/Dashboard/UpdateContact/UpdateContact";
import Skills from "../pages/Dashboard/Skills/Skills";
import Services from "../pages/Dashboard/Services/Services";

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
        path: "skills",
        element: <Skills></Skills>
      },
      {
        path: "add-skill",
        element: <AddSkill></AddSkill>
      },
      {
        path: "services",
        element: <Services></Services>
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
