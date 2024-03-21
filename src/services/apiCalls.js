import axios from "axios";

const getCategories = async () => {
  try {
    const response = await axios.get('/api/categories');
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

const getVerificationOTP = async () => {
  try {
    const response = await axios.get('/api/verification');
    const data = response.data;
    return data.otp;
  } catch (error) {
    console.error('Error updating categories:', error);
  }
}

const getUserToken = async () => {
  try {
    const response = await axios.get('/api/token');
    const data = response.data;
    return data.token;
  } catch (error) {
    console.error('Error updating categories:', error);
  }
}

export {getCategories, getVerificationOTP, getUserToken}