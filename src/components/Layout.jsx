'use client'

import React from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/navigation';

function Layout({ children }) {
  const router = useRouter();
  const token = localStorage.getItem('token');
  if (!token && (window.location.pathname === '/' || window.location.pathname === '/category')) {
    router.push("/signup", { scroll: false })
  } else if (window.location.pathname === '/') {
    router.push("/category", { scroll: false })
  }
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
