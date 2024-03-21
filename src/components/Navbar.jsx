import React from 'react';
import Image from 'next/image';

function Navbar() {
  return (
    <>
      <nav className="text-black flex items-center justify-between p-4">
        <div className="flex items-center">
          <h1 className="text-[32px] font-bold">ECOMMERCE</h1>
        </div>

        {/* Page Options */}
        <div className="flex items-center">
          <ul className="flex space-x-8">
            {['Category', 'Sales', 'Clearance', 'New Stock', 'Trending'].map((heading, key) => (
              <li key={key} className="cursor-not-allowed">{heading}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <button className="cursor-not-allowed mx-2">
            <Image src="/assets/Search.svg" alt="Search" width={24} height={24} />
          </button>
          <button className="cursor-not-allowed mx-2">
            <Image src="/assets/Cart.svg" alt="Cart" width={24} height={24} />
          </button>
        </div>
      </nav>
      <div className='w-full flex items-center justify-center bg-[#F4F4F4] h-[36px] text-center text-black mb-16'>
        <p>Get 10% off on business sign up</p>
      </div>
    </>
  );
}

export default Navbar;
