import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
  const location = useLocation();

  // Exclude Navbar and Footer for login and signup routes
  const showNavbarFooter = !['/login', '/signup'].includes(location.pathname);

  return (
    <div>
      {showNavbarFooter && <Navbar />}
      <main>
        <Outlet />
      </main>
      {showNavbarFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
