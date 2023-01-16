import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../../Layouts/DashboardLayouts";
import Parent from "../../Layouts/Parent";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Data from "../../Pages/Dashboard/Data/Data";
import Login from "../../Pages/LoginsAndRegisters/Login/Login";
import About from "../../Pages/Other/About/About";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent></Parent>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <PrivateRoute><DashboardLayouts></DashboardLayouts></PrivateRoute>
      },
      {
        path: "/home",
        element: <PrivateRoute><DashboardLayouts></DashboardLayouts></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/about",
        element: <About></About>
      },
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayouts></DashboardLayouts></PrivateRoute>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/dashboard/data",
        element: <Data></Data>
      }
    ]
  }
])