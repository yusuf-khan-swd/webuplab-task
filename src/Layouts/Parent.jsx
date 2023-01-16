import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Parent = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {
        !user?.uid &&
        <Navbar></Navbar>
      }
      <Outlet></Outlet>
    </div>
  );
};

export default Parent;