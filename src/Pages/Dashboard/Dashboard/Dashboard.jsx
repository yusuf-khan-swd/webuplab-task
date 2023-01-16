import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mt-4">
      <h2 className="text-xl text-center lg:text-left lg:ml-12">Welcome <span className="text-blue-600 font-bold">{user?.displayName}</span></h2>
    </div>
  );
};

export default Dashboard;