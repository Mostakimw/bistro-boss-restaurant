import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Home/Homepage/Homepage";
import Menu from "../pages/Menu/Menu/Menu";

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
    ],
  },
]);

export default router;
