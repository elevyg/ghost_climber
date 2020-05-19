import React from 'react';

const Navbar = () => {
  const NavContent = [
    { name: 'Inicio', h_ref: '#!' },
    { name: 'Acerca de', h_ref: '#!' },
    { name: 'Iniciar Sesión', h_ref: '#!' },
  ];

  return (
    <nav className='flex items-center .bg-gray-300 p-3 flex-wrap border-solid border-1 border-gray-600'>
      <a href='#!' className='p-2 mr-4 inline-flex items-center'>
        <i className='fas fa-ghost fa-2x mx-2'></i>
        <span className='text-xl text-gray font-bold uppercase tracking-wide'>
          Ghost Climbers
        </span>
      </a>
      <button
        className='text-gray inline-flex p-3 hover:bg-gray-300 rounded lg:hidden ml-auto hover:text-gray outline-none nav-toggler'
        data-target='#navigation'
      >
        <i className='fas fa-bars'></i>
      </button>
      <div
        className='hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto'
        id='navigation'
      >
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          {NavContent.map((content) => (
            <a
              href={content.h_ref}
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray items-center justify-center hover:bg-gray-300 hover:text-gray'
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
