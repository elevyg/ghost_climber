import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error]);

  const [user, setUser] = useState({
    userName: '',
    password: '',
  });

  const { userName, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (userName === '' || password === '') {
      setAlert('Por favor complete todos los campos', 'danger');
    } else {
      login({
        userName,
        password,
      });
    }
  };

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <label htmlFor='userName' className='block'>
          <span className='text-gray-700'>Usuario</span>
          <input
            className='form-input mt-1 block w-full'
            type='text'
            name='userName'
            value={userName}
            onChange={onChange}
            required
          />
        </label>

        <label htmlFor='password' className='block'>
          <span className='text-gray-700'>Contraseña</span>
          <input
            className='form-input mt-1 block w-full'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          />
        </label>
        <input
          className='block bg-blue-500 text-white rounded focus:outline-none p-3 mt-2 active:bg-gray-500 focus:shadow-outline hover:bg-blue-300'
          type='submit'
          value='Entrar'
          required
        />
      </form>
    </div>
  );
};

export default Login;
