import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Home/Homepage/Homepage";
import Menu from "../pages/Menu/Menu/Menu";
import Food from "../pages/Food/Food/Food";
import Login from "../pages/Login/Login";

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
    ],
  },
]);

export default router;
