import { Navigate } from "react-router-dom";
import Landing from "pages/landing";
import Signin from "pages/auth/Signin";

export default [
  {
    path: "/",
    element: <Landing />,
    name: "Landing",
  },
  {
    path: "/login",
    element: <Signin />,
    name: "Log In",
  },
  {
    path: "*",
    element: <Navigate to={"/login"} replace />,
    name: "Notfound",
  },
];