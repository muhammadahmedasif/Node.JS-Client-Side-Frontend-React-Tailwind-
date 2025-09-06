import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from 'react';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { Mycontext } from '../../App';


function ConfirmPassword() {

    const context = useContext(Mycontext)

    const [showpassword, setshowpassword] = useState(false);
    const [showpassword2, setshowpassword2] = useState(false);
    
    const nevigate = useNavigate();

    return (
        <>
            <div className="w-[40%] px-10 py-13 rounded-[10px] my-10 mx-auto bg-[rgba(207,203,203,0.3)] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
                <div className='w-full flex items-center gap-5 flex-col '>
                    <h3 className='text-[20px] font-[600] mb-5 text-black'>
                       Forgot Password
                    </h3>
                    <div className='w-[70%] m-auto relative flex items-center'>
                        <TextField id="outlined-basic" type={`${showpassword === true ? 'text' : 'password'}`} label="Enter New Password" variant="outlined" className='w-full' />
                        <Button className={`!absolute !w-[40px] h-[40px] !text-black hover:!text-[#ff5252] !rounded-full !text-[18px] !min-w-[40px] ${showpassword === false ? 'opacity-100 z-50' : 'opacity-0 z-0'} right-3 top-1/2 -translate-y-1/2`} onClick={() => setshowpassword(!showpassword)}>
                            <GoEye />
                        </Button>
                        <Button className={`!absolute !w-[40px] h-[40px] !text-black hover:!text-[#ff5252] !rounded-full !text-[18px] !min-w-[40px] ${showpassword === true ? 'opacity-100 z-50' : 'opacity-0 z-0'} right-3 top-1/2 -translate-y-1/2`} onClick={() => setshowpassword(!showpassword)}>
                            <GoEyeClosed />
                        </Button>
                    </div>
                    <div className='w-[70%] m-auto relative flex items-center'>
                        <TextField id="outlined-basic" type={`${showpassword2 === true ? 'text' : 'password'}`} label="Confirm Password" variant="outlined" className='w-full' />
                        <Button className={`!absolute !w-[40px] h-[40px] !text-black hover:!text-[#ff5252] !rounded-full !text-[18px] !min-w-[40px] ${showpassword2 === false ? 'opacity-100 z-50' : 'opacity-0 z-0'} right-3 top-1/2 -translate-y-1/2`} onClick={() => setshowpassword(!showpassword2)}>
                            <GoEye />
                        </Button>
                        <Button className={`!absolute !w-[40px] h-[40px] !text-black hover:!text-[#ff5252] !rounded-full !text-[18px] !min-w-[40px] ${showpassword2 === true ? 'opacity-100 z-50' : 'opacity-0 z-0'} right-3 top-1/2 -translate-y-1/2`} onClick={() => setshowpassword(!showpassword2)}>
                            <GoEyeClosed />
                        </Button>
                    </div>
                </div>
                <div className='w-full flex items-center mt-5 gap-5 flex-col '>

                    <Button className='button-org !w-[70%] !h-[50px]'>Confirm</Button>
                    <h3 className='text-[13px]'>
                        Not Registered?
                        <Link to={'/register'} className='pl-1 link font-[600] cursor-pointer'>Sign up</Link>
                    </h3>
                    <h3 className='text-[13px]'>
                        Or continue with social account
                    </h3>
                    <Button className='!bg-[rgba(207,202,188,0.61)] !text-black !w-[70%] gap-1 !font-[600] !text-[14px] !h-[50px] hover:!bg-[rgba(207,202,188,0.8)]'><FcGoogle className='!text-[20px]' /> Continue with google</Button>
                </div>
            </div>
        </>
    )
}

export default ConfirmPassword