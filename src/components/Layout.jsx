'use client'

import React from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/navigation';

function Layout({ children }) {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
