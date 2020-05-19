import React, { useState } from 'react';

const Navbar = () => {
  const NavContent = [
    { name: 'Inicio', h_ref: '#!' },
    { name: 'Acerca de', h_ref: '#!' },
    { name: 'Iniciar Sesión', h_ref: '#!' },
  ];
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className='flex bg-gray-100 p-3 flex-wrap border-b border-b-2 border-gray-200'>
      <a href='#!' className='p-2 mr-4 inline-flex items-center'>
        <i className='fas fa-ghost fa-2x mx-2'></i>
        <span className='text-xl text-gray font-bold uppercase tracking-wide'>
          Ghost Climbers
        </span>
      </a>
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
        }  top-navbar w-full md:inline-flex  md:flex-grow md:w-auto`}
        id='navigation'
      >
        <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto'>
          {NavContent.map((content) => (
            <a
              href={content.h_ref}
              className='md:inline-flex md:w-auto w-full px-3 py-2 rounded text-gray items-center justify-center hover:bg-gray-300 hover:text-gray'
            >
              <span>{content.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
