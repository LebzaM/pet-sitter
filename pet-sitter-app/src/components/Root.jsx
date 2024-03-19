import React from 'react';
import { Outlet } from 'react-router-dom';


import Footer from './Footer';
import NavBar from '../Navbar';
import { Container } from '@radix-ui/themes';
const Root = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <NavBar />
      
      <main className="container mx-auto flex-grow py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;