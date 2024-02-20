// main.js

const generateOTP = require('./otpGenerator');
const sendOTP = require('./emailSender');

// Example usage
const email = 'recipient@example.com'; // Change this to the recipient's email address
const otp = generateOTP(6); // Change the OTP length if needed
sendOTP(email, otp);
