import React, { Fragment, useEffect, useContext } from 'react';
import Navbar from '../layout/Navbar';
import ZonasList from '../zonas/ZonasList';
import AuthContext from '../../context/auth/authContext';

import Acerca from './Acerca';
import { useState } from 'react';

const Home = () => {
  const [acerca, setAcerca] = useState;
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

export default React.memo(Home);
