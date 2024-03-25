import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Users from "./Components/users/Users";
import AddUser from "./Components/AddUser/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/users',
        element:<Users/>,
        loader:()=> fetch('http://localhost:5000/users')
      },
      {
        path:'/adduser',
        element:<AddUser/>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);