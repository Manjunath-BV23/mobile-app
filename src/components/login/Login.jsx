import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = () =>{

    
    const [phone, setPhone] = useState('');
    const [enteredPin, setEnteredPin] = useState('');
    const [message, setMessage] = useState('');
    const [step1, setStep1] = useState(true);
    const [correctPin, setCorrectPin] = useState("123456");

    const navigate = useNavigate(); 
    
    const handlePhoneChange = (event) => {
        const newPhone = event.target.value;
        setPhone(newPhone);
      };
    const handlePinChange = (event) => {
      const newPin = event.target.value;
      setEnteredPin(newPin);
    };

    const sendOtp = () => {
        axios.post(`https://staging.fastor.in/v1/pwa/user/register`, {
            phone: phone,
            dial_code: "+91"
            })
            .then(res => {
                return "123456"
            })
            setStep1(false)
        
    };

    const handleVerifyOtpClick = async () => {
        axios.post(`https://staging.fastor.in/v1/pwa/user/login`, {
            phone: phone,
            otp: correctPin,
            dial_code:"+91"
          })
            .then(res => {
                navigate("/products")
        })
        
      };


    return(
        <div>
            {
                step1 ? <div className="step-1">
                            <h2>Enter Your Mobile Number</h2>
                            <p>We will send you the 4 digit verification code</p>
                            <form action="">
                                <input type="tel"  required placeholder="Enter your phone number" onChange={handlePhoneChange}/>
                                <br />
                                <button onClick={sendOtp}>Send Code</button>
                            </form>
                        </div>:
                        <div className="step-2">
                        <h2>OTP Verification</h2>
                        <p>Enter the verification code we just sent on your Mobile Number.</p>
                        <input
                            type="password"
                            maxLength={6}
                            value={enteredPin}
                            onChange={handlePinChange}
                        />
                        <br />
                        <button onClick={handleVerifyOtpClick}>Verify</button>
                        <p>{message}</p>
                        <p>Didn't received code? Resend</p>
                    </div>
            }
            

            

        </div>
    )
}