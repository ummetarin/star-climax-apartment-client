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

import Reviews from './Reviews/Reviews';
import AuthProvider from './Components/AuthWork.jsx/AuthProvider';
import Details from './Components/Details/Details';
import GiveRev from './Components/GiveReview/GiveRev';
import DesCart from './Components/DashBoard/DesCart';
import MyReview from './Components/DashBoard/MyReview';
import Propertyb from './Components/DashBoard/Propertyb';
import Addwishlishform from './Components/ADDWIsHList/Addwishlishform';
import UserAll from './Components/Admin/UserAll';
import AdminProfile from './Components/AWorkAdmin/AdminProfile';
import AdminProperties from './Components/AWorkAdmin/AdminProperties';
import AdminReviews from './Components/AWorkAdmin/AdminReviews';
import Agentprofile from './Components/agentwork/Agentprofile';
import AgentsoldProperty from './Components/agentwork/AgentsoldProperty';
import Agentallproperty from './Components/agentwork/Agentallproperty';
import RequstedProperties from './Components/agentwork/RequstedProperties';
import MainOffer from './Components/Offer/MainOffer';
import Verifydata from './Components/Verifydata/Verifydata';
import AddItem from './Components/AllAgentProperty/AddItem';
import AgentAdded from './Components/AllAgentProperty/AgentAdded';


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
        
      },{
        path:"/bookdata/:id",
        element:<Addwishlishform></Addwishlishform>,
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
        path:"/des/rev/:email",
        element:<MyReview></MyReview>
      },{
        path:"/des/prob",
        element:<Propertyb></Propertyb>,
        loader:({params})=>fetch(`http://localhost:3000/approveddata/${params.id}`)

      },{
        path:"/des/wish/offer/:id",
        element:<MainOffer></MainOffer>,
        loader:({params})=>fetch(`http://localhost:3000/wishdata/${params.id}`)
      },{
        path:"/des/wish/update/:id",
        element:<MainOffer></MainOffer>,
        loader:({params})=>fetch(`http://localhost:3000/wishdata/${params.id}`)
      },{
        // admin
        path:"/des/userall",
        element:<UserAll></UserAll>
      },{
        path:"/des/ad/pro",
        element:<AdminProfile></AdminProfile>,

      },
      {
        path:'/des/g/allpro',
        element:<Agentallproperty></Agentallproperty>
      },{
        path:"/des/ad/rev",
        element:<AdminReviews></AdminReviews>
      },
      // agent
      {
        path:"/des/g/pro",
        element:<Agentprofile></Agentprofile>
      },{
        path:"/des/ad/req",
        element:<RequstedProperties></RequstedProperties>
      },{
        path:"/des/g/mysold",
        element:<AgentsoldProperty></AgentsoldProperty>
      },{
        path:'/des/ag/allpro',
        element:<AgentAdded></AgentAdded>
      },{
        path:"/des/verify/:id",
        element:<Verifydata></Verifydata>,
        loader:({params})=>fetch(`http://localhost:3000/agentdata/${params.id}`)
      },{
        path:"/des/additem",
        element:<AddItem></AddItem>
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
