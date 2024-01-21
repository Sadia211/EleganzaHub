import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../../../App.jsx'

import Home from '../../Home/Home.jsx'
import Addproduct from '../../Addproduct/Addproduct.jsx'
import Products from '../../Products/Products.jsx'
import Brandproducts from '../../Brands/Brandproducts.jsx'
import Login from '../../Login/Login.jsx'
import Register from '../../Register/Register.jsx'
import Cart from '../../Cart/Cart.jsx'
import Updateproduct from '../../UpdateProduct/Updateproduct.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader:()=>fetch('/brand.json')
  },
 
 
  {path:'/brand/:name',
  element:<Brandproducts></Brandproducts>,
  loader:()=>fetch('http://localhost:5000/product')
    },
{
  path:"/addproduct",
  element:<Addproduct></Addproduct>
},

{
  path:"/products/:brandname",
  element:<Products></Products>,
  loader:({params})=>fetch('http://localhost:5000/product')
},
{
    path:"/login",
    element:<Login></Login>,
  
  },
  {
    path:"/register",
    element:<Register></Register>,
  
  },
  
    {
      path:"/cart",
      element:<Cart></Cart>,
    
    },
    {
      path:"/update",
      element:<Updateproduct></Updateproduct>,
    
    }
  



]);
export default router;