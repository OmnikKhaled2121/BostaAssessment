import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SalesCall from "../Pages/SalesCall";
import Prices from "../Pages/Prices";

export default function Routers() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "/salesCall", element: <SalesCall /> },
        { path: "/prices", element: <Prices /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);

  return routers;
}
