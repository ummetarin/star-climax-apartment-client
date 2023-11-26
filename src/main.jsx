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
import Details from './Components/Details/Details';
import GiveRev from './Components/GiveReview/GiveRev';
import DesCart from './Components/DashBoard/DesCart';
import MyReview from './Components/DashBoard/MyReview';
import Propertyb from './Components/DashBoard/Propertyb';

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
        path:"/all",
        element:<Allproperty></Allproperty>
      },{
        path:"/rev",
        element:<Reviews></Reviews>

      },{
        path:"/roomdata/:id",
        element:<Details></Details>,
        loader:({params})=>fetch(`http://localhost:3000/roomdata/${params.id}`)
      },{
        path:"/roomdata/:id",
        element:<GiveRev></GiveRev>,
        loader:({params})=>fetch(`http://localhost:3000/roomdata/${params.id}`)
        
      }
    ],
  },
  {
    path:"/des",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"/des/cart",
        element:<DesCart></DesCart>

      },
      {
        path:"/des/myP",
        element:<Myprofile></Myprofile>

      },
      {
        path:"/des/wishdata",
        element:<Wishlist></Wishlist>
      },{
        path:"/des/rev",
        element:<MyReview></MyReview>
      },{
        path:"/des/prob",
        element:<Propertyb></Propertyb>

      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router}></RouterProvider>
</AuthProvider>
  </React.StrictMode>,
)
