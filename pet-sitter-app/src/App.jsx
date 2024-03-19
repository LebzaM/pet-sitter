import React from "react"

import { Button } from "@radix-ui/themes"
import Home from "./Pages/Home";
import Service from "./components/Service";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./components/Root";
import SellerLogin from "./components/SellerLogin";
import Buyerdashboard from "./components/Buyerdashboard";
import Sellerdashboard from "./components/Sellerdashboard";

const isLoggedIn = () => {
  // Check if the user is logged in
  const userData = JSON.parse(localStorage.getItem('userData'));
  return userData;
};

const isSellerLoggedIn = () => {
  // Check if the user is logged in
  const sellerData = JSON.parse(localStorage.getItem('sellerData'));
  return sellerData;
};

const getHomeComponent = () => {
  // Conditionally return the Home or Buyerdashboard component
  return isLoggedIn() ? <Buyerdashboard /> : <Home />;
};

const getSellerComponent = () => {
  // Conditionally return the Home or Buyerdashboard component
  return isSellerLoggedIn() ? <Sellerdashboard /> : <Home />;
};

const router = createBrowserRouter([
  
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/service',
        element: <Service />,
      },
      {
        path: '/',
        element: getHomeComponent(),
      },
      {
        path: '/',
        element: getSellerComponent(),
      },
      {
        path:"/sellerlogin",
        element: <SellerLogin />
      },
      {
        path:"/buyerdash",
        element: <Buyerdashboard />
      },
      {
        path:"/sellerdash",
        element: <Sellerdashboard/>
      }
      
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;