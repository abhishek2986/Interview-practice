import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { ControlledForm } from "./Name";
import { Errorpage } from "./Errorpage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Errorpage/>
  },

    {
    path: "/about",
    element: <About/>,
    
  },
  {
    path:"/names",
    element:<ControlledForm/>,
  }
]);


export const Reactrouting=()=>{
    return (
 <RouterProvider router={router} />
    )
}

