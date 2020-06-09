import React, { Fragment, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import ZonasList from '../zonas/ZonasList';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Navbar isDateBox={true} />
      <div className='flex'>
        <ZonasList />
      </div>
      <footer className='bg-gray-100 h-64 flex justify-center items-center '>
        <p> Todos los derechos reservados {'\u00A9'} </p>
      </footer>
    </Fragment>
  );
};

export default Home;
