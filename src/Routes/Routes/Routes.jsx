import { createBrowserRouter } from "react-router-dom";
import Parent from "../../Layouts/Parent";
import Home from "../../Pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent></Parent>,
    // errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/login",
        // element: <Login></Login>
      }
    ]
  }
])