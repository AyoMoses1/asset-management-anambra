import { Navigate } from "react-router-dom";
import Landing from "pages/landing";

export default [
  {
    path: "/",
    element: <Landing />,
    name: "Landing",
  },
  {
    path: "*",
    element: <Navigate to={"/login"} replace />,
    name: "Notfound",
  },
];