import React, { useState, useContext } from 'react';
import DateBox from './DateBox';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ isDateBox = true, setAcerca, acerca }) => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;
  const onLogout = () => {
    logout();
  };

  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className='flex bg-gray-100 p-3 flex-wrap border-b border-b-2 border-gray-200'>
      <Link to='/' className='p-2 mr-4 inline-flex items-center border-r-2'>
        <i className='fas fa-ghost fa-2x mx-2'></i>
        <span className='text-xl text-gray font-bold uppercase tracking-wide'>
          Ghost Climbers
        </span>
      </Link>
      {isDateBox && <DateBox />}
      <div className='md:hidden inline-flex flex-row ml-auto '>
        <button
          className='text-gray p-3 hover:bg-gray-300 rounded hover:text-gray outline-none'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <i className='fas fa-bars'></i>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        }  top-navbar w-full md:inline-flex  md:flex-grow md:w-auto pt-2`}
        id='navigation'
      >
        <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto'>
          <button
            className='md:inline-flex md:w-auto w-full px-3 py-2 rounded text-gray items-center justify-center hover:bg-gray-300 hover:text-gray'
            onClick={() => setAcerca(!acerca)}
          >
            Acerca
          </button>
          <button
            className='md:inline-flex md:w-auto w-full px-3 py-2 rounded text-gray items-center justify-center hover:bg-gray-300 hover:text-gray'
            onClick={onLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
