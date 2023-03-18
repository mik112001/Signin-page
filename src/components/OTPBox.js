import React, { useState } from "react";

const OTPBox = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>

            <div page="otpBox" />

            <div className="row">
                <div className="col text-center">
                    <h1>Enter the verification <br />code to continue</h1>
                    <p>We sent to <a style={{color:"#0858F7"}}>hellouser@heads.design</a>. If you<br /> don’t see it, check your spam.</p>

                    {otp.map((data, index) => {
                        return (
                            <input
                                style={{width:"48px",height:"56px",borderRadius:"12px",border:"1px solid blue",margin:"2px"}}
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="0.5"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                </div>
            </div>
        </>
    );
};

export default OTPBox;