import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    userName: '',
    password: '',
    password2: '',
  });

  const { userName, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (userName === '' || password === '') {
      setAlert('Por favor complete todos los campos', 'danger');
    } else if (password !== password2) {
      setAlert('Las contraseñas no coinciden', 'danger');
    } else {
      register({
        userName,
        password,
      });
    }
  };

  return (
    <div className='container'>
      <h1 className='text-3xl'>Regístrate</h1>
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
            minLength='6'
          />
        </label>

        <label htmlFor='password2' className='block'>
          <span className='text-gray-700'> Repetir Contraseña</span>
          <input
            className='form-input mt-1 block w-full'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </label>

        <input
          className='block bg-blue-500 text-white rounded focus:outline-none p-3 mt-2 active:bg-gray-500 focus:shadow-outline hover:bg-blue-300'
          type='submit'
          value='Enviar'
        />
      </form>
    </div>
  );
};

export default Register;
