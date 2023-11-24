import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Mainlayout from './Components/Main/Mainlayout';
import Home from './Components/Home/Home';
import Register from './Components/AuthWork.jsx/Register';
import Login from './Components/AuthWork.jsx/Login';
import Dashboard from './Components/DashBoard/Dashboard';
import Allproperty from './Components/AllProperty/Allproperty';
import Myprofile from './Components/Myprop/Myprofile';
import Wishlist from './Components/Wishlist/Wishlist';
import Property from './Components/Property/Property';
import Reviews from './Reviews/Reviews';
import AuthProvider from './Components/AuthWork.jsx/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/res",
        element:<Register></Register>
      },{
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/des",
        element:<Dashboard></Dashboard>
      },{
        path:"/all",
        element:<Allproperty></Allproperty>
      },{
        path:"/myP",
        element:<Myprofile></Myprofile>
      },{
        path:"/wish",
        element:<Wishlist></Wishlist>
      },{
        path:"/property",
        element:<Property></Property>
      },{
        path:"/rev",
        element:<Reviews></Reviews>

      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router}></RouterProvider>
</AuthProvider>
  </React.StrictMode>,
)
