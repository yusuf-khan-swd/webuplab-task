import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Loader from '../Pages/Shared/Loaders/Loader';

const PrivateRoute = ({ children }) => {
  const { user, authIsLoading } = useContext(AuthContext);

  if (authIsLoading) {
    return <Loader></Loader>
  }

  if (user?.uid) {
    return children;
  }

  return (<Navigate to={`Login`}></Navigate>);
};

export default PrivateRoute;