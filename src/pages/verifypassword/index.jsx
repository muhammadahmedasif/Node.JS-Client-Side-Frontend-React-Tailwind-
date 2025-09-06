import OTPBox from "../../components/otpbox";

function VerifyPassword() {
    return (
        <div className="w-[40%] px-10 py-13 rounded-[10px] my-10 mx-auto bg-[rgba(207,203,203,0.3)] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
            <div className='w-full flex items-center gap-5 flex-col '>
                <img src="/shield.png" alt="shield icon" className="w-[90px] h-[90px] mt-2"/>
                <h3 className='text-[22px] font-[700] mb-5 text-black'>
                    Verify OTP
                </h3>

                <OTPBox />
            </div>
        </div>
    )
}

export default VerifyPassword