import React from 'react';

const Navbar = () => {
  return (
    <nav class='flex items-center bg-gray-800 p-3 flex-wrap'>
      <a href='' className='p-2 mr-4 inline-flex items-center'></a>
      <div
        class='hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto'
        id='navigation'
      >
        <div class='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          <a
            href='#'
            class='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white'
          >
            <span>Home</span>
          </a>
          <a
            href='#'
            class='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white'
          >
            <span>About</span>
          </a>
          <a
            href='#'
            class='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white'
          >
            <span>Services</span>
          </a>
          <a
            href='#'
            class='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white'
          >
            <span>Gallery</span>
          </a>
          <a
            href='#'
            class='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white'
          >
            <span>Products</span>
          </a>
          <a
            href='#'
            class='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white'
          >
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
