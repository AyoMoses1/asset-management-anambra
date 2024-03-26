import { Navigate } from "react-router-dom";
import Landing from "pages/landing";
import Signin from "pages/auth/Signin";
import ForgotPassword from "pages/auth/ForgotPassword";
import User from "pages/user";
import Accept from "pages/user/Accept";
import ChangePassword from "pages/auth/ChangePassword";
import Profile from "pages/user/Profile";
import AdminDashboard from "pages/admin/dashboard";
import Assets from "pages/admin/assets";
import CreateNewAsset from "pages/admin/assets/CreateNew";
import AssetCheckout from "pages/admin/assets/Checkout";
import AssetHistory from "pages/admin/assets/History";
import ViewAsset from "pages/admin/assets/ViewAsset";
import Users from "pages/admin/users";
import PredefinedKits from "pages/admin/predefined-kits";

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
    path: "/account/accept",
    element: <Accept />,
    name: "Accept Assets",
  },

  {
    path: "/account/change-password",
    element: <ChangePassword />,
    name: "Change Password",
  },

  {
    path: "/account/profile",
    element: <Profile />,
    name: "User Profile",
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
    name: "Dashboard",
  },
  {
    path: "/dashboard/licenses",
    element: <User />,
    name: "User Panel",
  },
  {
    path: "/dashboard/assets/:id",
    element: <ViewAsset />,
    name: "User Panel",
  },
  {
    path: "/dashboard/assets",
    element: <Assets />,
    name: "User Panel",
  },
  {
    path: "/dashboard/assets/checkout",
    element: <AssetCheckout />,
    name: "User Panel",
  },
  {
    path: "/dashboard/assets/history",
    element: <AssetHistory />,
    name: "User Panel",
  },
  {
    path: "/dashboard/assets/create-new",
    element: <CreateNewAsset />,
    name: "User Panel",
  },

  // PREDEFINED KITS MANAGEMENT
  {
    path: "/dashboard/predefined-kits",
    element: <PredefinedKits />,
    name: "Predefined Kits",
  },

  // USER MANAGEMENT

  {
    path: "/dashboard/users",
    element: <Users />,
    name: "User Panel",
  },
  {
    path: "*",
    element: <Navigate to={"/login"} replace />,
    name: "Notfound",
  },
];
