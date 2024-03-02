import { Navigate } from "react-router-dom";
import Landing from "pages/landing";
import Signin from "pages/auth/Signin";
import ForgotPassword from "pages/auth/ForgotPassword";
import User from "pages/user";

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
    path: "/forgot-password",
    element: <ForgotPassword />,
    name: "Forgot Password",
  },
  {
    path: "/account",
    element: <User />,
    name: "User Panel",
  },

  {
    path: "/account/view-assets",
    element: <User />,
    name: "User Panel",
  },

  {
    path: "/dashboard/licenses",
    element: <User />,
    name: "User Panel",
  },
  {
    path: "*",
    element: <Navigate to={"/login"} replace />,
    name: "Notfound",
  },
];
