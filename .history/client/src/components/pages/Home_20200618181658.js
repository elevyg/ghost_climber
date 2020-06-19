import React, { Fragment, useEffect, useContext, useState } from 'react';
import Navbar from '../layout/Navbar';
import ZonasList from '../zonas/ZonasList';
import AuthContext from '../../context/auth/authContext';

import Acerca from './Acerca';

const Home = () => {
  const [acerca, setAcerca] = useState(false);

  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar isDateBox={true} setAcerca={() => setAcerca()} />
      <div className='flex'>{acerca ? <Acerca /> : <ZonasList />}</div>
      <footer className='bg-gray-100 h-64 flex justify-center items-center '>
        <p> Todos los derechos reservados {'\u00A9'} </p>
      </footer>
    </Fragment>
  );
};

export default React.memo(Home);
