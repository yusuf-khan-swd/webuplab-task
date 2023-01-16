import React, { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Parent = () => {
  const { user } = useContext(AuthContext);
  const currentLocation = useLocation().pathname;

  return (
    <div>
      {
        (!user?.uid || currentLocation.includes("/about")) &&
        <Navbar></Navbar>
      }
      <Outlet></Outlet>
    </div>
  );
};

export default Parent;