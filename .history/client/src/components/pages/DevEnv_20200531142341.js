import React, { Fragment, useState } from 'react';
import Navbar from '../layout/Navbar';
import SectorCard from '../zonas/SectorCard';

const DevEnv = () => {
  const [sector, setZonas] = useState({
    nombre: 'Las Palestras',
    comuna: 'San José de Maipo',
    region: 'Metropolitana',
    pais: 'Chile',
    subsectores: [
      {
        _id: '5ed1d0c44bf5360e87261305',
        nombre: 'Hidrofobia',
        nVias: 9,
        sector: {
          _id: '5ed1d0434bf5360e87261301',
          nombre: 'Las Palestras',
          id: '5ed1d0434bf5360e87261301',
        },
        __v: 0,
      },
    ],
  });

  return (
    <Fragment>
      <Navbar />
      <div className=' w-1/3 max-w-lg'>
        <SectorCard sector={sector} />
      </div>
      <footer className='bg-gray-100 h-40 '></footer>
    </Fragment>
  );
};

export default DevEnv;
