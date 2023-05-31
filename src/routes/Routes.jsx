import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Home/Homepage/Homepage";
import Menu from "../pages/Menu/Menu/Menu";
import Food from "../pages/Food/Food/Food";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layout/DashboardLayout";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "food/:category",
        element: <Food />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
