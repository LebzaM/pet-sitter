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
  
  const userData = JSON.parse(localStorage.getItem('userData'));
  return userData;
};

const isSellerLoggedIn = () => {
  
  const sellerData = JSON.parse(localStorage.getItem('sellerData'));
  return sellerData;
};

const getHomeComponent = () => {

  return isLoggedIn() ? <Buyerdashboard /> : <Home />;
};

const getSellerComponent = () => {
 
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
  // <RouterProvider router={router} />;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Acme Inc</h1>
        <p className="text-lg text-gray-600 mb-4">Thank you for submitting the form!</p>
        <p className="text-sm text-gray-500 mb-6">
          We appreciate your inquiry. Our team is currently reviewing your issue/question, and we will get back to you as soon as possible.
        </p>
        <div className="text-sm text-gray-400">Sit tight — we’re on it!</div>
      </div>
    </div>
  );
};

export default App;
