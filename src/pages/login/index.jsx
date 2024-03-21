// pages/LoginPage.jsx
import Layout from '@/components/Layout';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const validateEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // Basic password validation (min length)
    return password.length >= 6;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    setIsFormValid(validateEmail(email) && validatePassword(password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('category')
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <div className="flex justify-center items-start bg-white text-black">
        <div className="w-[576px] min-h-[580px] h-[fit-content] bg-white border border-[#C1C1C1] rounded-[20px] p-8">
          <h1 className="text-center text-[32px] font-semibold mb-8 leading-9">Login</h1>
          <h5 className="text-center text-[24px] font-medium leading-9">Welcome back to ECOMMERCE</h5>
          <p className="text-center text-[16px] mb-8 leading-9">The next gen business marketplace</p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-normal text-base">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder='Enter Email'
                onChange={handleInputChange}
                className="border mt-1 border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="password" className="font-normal text-base">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                placeholder='Enter Password'
                onChange={handleInputChange}
                className="border mt-1 border-gray-300 rounded-md p-2 pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-[27px] right-0 mt-2 mr-2 focus:outline-none underline underline-offset-4"
              >
                {showPassword ? (
                  <p className='text-[16px]'>Hide</p>
                ) : (
                  <p className='text-[16px]'>Show</p>
                )}
              </button>
            </div>
            <button type="submit" className={`w-full rounded-md p-4 ${isFormValid ? 'bg-black text-white cursor-pointer' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`} disabled={!isFormValid}>LOGIN</button>
          </form>
          <div className='my-10 h-[1px] w-full bg-[#C1C1C1]' />
          <p className="text-center">Don’t have an Account? <a href="/login" className="font-medium">SIGN UP</a></p>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
