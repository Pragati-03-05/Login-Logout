import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({ name: '', password: '' });
  //const history = useHistory();
  const setValue = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setData({ ...data, name: value });
    } else {
      setData({ ...data, password: value });
    }
  };
  const goThere = (e) => {
    e.preventDefault();
    // history.push('/logout');
    <Redirect to="/logout" />;
  };
  return (
    <div>
      <h1>login page</h1>
      <div>user name </div>
      <input type="text" name="name" onChange={(e) => setValue(e)} />
      <div>password </div>
      <input type="text" name="password" onChange={(e) => setValue(e)} />
      <div>
        <input type="button" value="Login" onClick={(e) => goThere(e)} />
      </div>
    </div>
  );
};
export default Login;
