import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const { googleLogin } = useContext(AuthContext);

  const [isDataLoading, setIsDataLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    setIsDataLoading(true);
    googleLogin()
      .then(result => {
        const user = result.user;
        toast.success(`Welcome! ${user.displayName || user.email}`);
        setIsDataLoading(false);
        navigate("/dashboard");
      })
      .catch(error => {
        console.log("google login error: ", error);
        setIsDataLoading(false);
        toast.error(error.message);
      })
  };

  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="m-2">
        <div className="flex flex-col max-w-sm mx-auto mt-5">
          <button onClick={handleGoogleLogin} className="btn capitalize text-lg" disabled={isDataLoading}>Google Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;