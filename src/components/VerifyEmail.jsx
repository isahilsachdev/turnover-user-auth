import { getUserToken, getVerificationOTP } from '@/services/apiCalls';
import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from 'react';

function VerifyEmail({email}) {
  const [otp, setOtp] = useState(['', '', '', '', '', '', '', '']);
  const [dummyOtp, setDummyOtp] = useState(null);
  const inputRefs = useRef([]);
  const router = useRouter();

  const sendOtp = async(email) => {
    const resp = await getVerificationOTP(email);
    setDummyOtp(resp);
  }
  useEffect(() => {
    sendOtp(email);
  }, [email]);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Move to the next input field if value is entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to the previous input field on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const token = await getUserToken();
    if (token) {
      localStorage.setItem('token', token)
      router.push('/category')
    }
  };

  return (
    <div className="flex justify-center items-center bg-white text-black">
      <div className="w-[576px] h-[fit-content] bg-white border border-[#C1C1C1] rounded-[20px] p-8">
        <h1 className="text-center text-[32px] font-semibold mb-8 leading-9">Verify your OTP</h1>
        <p className="text-center text-[16px] mb-8 leading-9">Enter the 8 digit code you have received on your email.</p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-between">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="border border-gray-300 rounded-md p-2 w-[46px] h-[46px] text-center"
              />
            ))}
          </div>
          {dummyOtp && <p>Your dummy otp to verify is <strong>{dummyOtp}</strong></p>}
          <button
            type="submit"
            className={`w-full rounded-md p-4 ${(otp.every((value) => value) && otp.join("") == dummyOtp) ? 'bg-black text-white cursor-pointer' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
            disabled={!(otp.every((value) => value) && otp.join("") == dummyOtp)}
          >
            VERIFY
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
