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
import MessageDetail from "../pages/Dashboard/MessageDetail/MessageDetail";
import UpdateSkill from "../pages/Dashboard/UpdateSkill/UpdateSkill";
import UpdateService from "../pages/Dashboard/UpdateService/UpdateService";
import PrivateRoute from "./PrivateRoute";
import PortfolioDetail from "../pages/PortfolioDetail/PortfolioDetail";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <App></App>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      
    ],
  },
  {
    path: "portfolio-detail/:id",
    element: <PortfolioDetail></PortfolioDetail>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/portfolio-detail/${params.id}`),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "messages",
        element: <Messages></Messages>,
      },
      {
        path: "skills",
        element: <Skills></Skills>,
      },
      {
        path: "add-skill",
        element: <AddSkill></AddSkill>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "add-service",
        element: <AddService></AddService>,
      },
      {
        path: "add-portfolio",
        element: <AddPortfolio></AddPortfolio>,
      },
      {
        path: "update-contact",
        element: <UpdateContact></UpdateContact>,
      },
      {
        path: "update-skill/:id",
        element: <UpdateSkill></UpdateSkill>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update-skill/${params.id}`),
      },
      {
        path: "update-service/:id",
        element: <UpdateService></UpdateService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update-service/${params.id}`),
      },
      {
        path: "message-detail/:id",
        element: <MessageDetail></MessageDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/message-detail/${params.id}`),
      },
    ],
  },
]);
