// pages/Signup.jsx
import Layout from '@/components/Layout';
import VerifyEmail from '@/components/VerifyEmail';
import React, { useState } from 'react';

function SignUpDetails ({email, setEmail, setShowOtpPage}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // Basic password validation (min length)
    return password.length >= 6;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    setIsFormValid(validateEmail(email) && validatePassword(password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOtpPage(true);
  };

  return (
    <div className="flex justify-center items-start bg-white text-black">
      <div className="w-[576px] min-h-[580px] h-[fit-content] bg-white border border-[#C1C1C1] rounded-[20px] p-8">
        <h1 className="text-center text-[32px] font-semibold mb-8 leading-9">Create your account</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-normal text-base">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder='Enter Name'
              onChange={handleInputChange}
              className="border mt-1 border-gray-300 rounded-md p-2"
            />
          </div>
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
          <div className="flex flex-col">
            <label htmlFor="password" className="font-normal text-base">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder='Enter Password'
              onChange={handleInputChange}
              className="border mt-1 border-gray-300 rounded-md p-2"
            />
          </div>
          <button type="submit" className={`w-full rounded-md p-4 ${isFormValid ? 'bg-black text-white cursor-pointer' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`} disabled={!isFormValid}>CREATE ACCOUNT</button>
        </form>
        <p className="pt-12 text-center">Have an Account? <a href="/login" className="font-medium">LOGIN</a></p>
      </div>
    </div>
  )
}
function SignupPage() {
  const [showOtpPage, setShowOtpPage] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <Layout>
      {
        showOtpPage ? (
          <VerifyEmail email={email} />
        ) : (
          <SignUpDetails email={email} setEmail={setEmail} setShowOtpPage={setShowOtpPage} />
        )
      }
    </Layout>
  );
}

export default SignupPage;
