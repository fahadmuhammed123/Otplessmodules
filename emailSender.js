// emailSender.js

const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Change this to your email service provider
    auth: {
        user: 'your_email@gmail.com', // Your email address
        pass: 'your_password' // Your email password
    }
});

// Function to send OTP via email
function sendOTP(email, otp) {
    const mailOptions = {
        from: 'your_email@gmail.com', // Sender email address
        to: email, // Recipient email address
        subject: 'Your OTP (One-Time Password)', // Email subject
        text: `Your OTP is: ${otp}` // Email body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = sendOTP;
