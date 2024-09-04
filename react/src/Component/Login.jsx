import React from 'react';
import { useSelector } from 'react-redux';

const Login = () => {
  const number = useSelector((state) => state.number);

  return (
    <div>
      Login - Number from Redux: {number}
    </div>
  );
};

export default Login;
