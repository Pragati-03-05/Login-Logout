import React from 'react';
import { useHistory, Navigate } from 'react-router-dom';

const Logout = () => {
  //const history = useHistory();
  const backToLogin = (e) => {
    //history.push('/');
    e.preventDefault();
    // Navigate('/login');
  };
  return <button onClick={(e) => backToLogin(e)}>Back to Login</button>;
};
export default Logout;
