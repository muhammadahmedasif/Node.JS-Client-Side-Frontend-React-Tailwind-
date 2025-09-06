import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";


function Register() {

    const [showpassword, setshowpassword] = useState(false)

    return (
        <>
            <div className="w-[40%] px-10 py-13 rounded-[10px] my-10 mx-auto bg-[rgba(207,203,203,0.3)] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
                <div className='w-full flex items-center gap-5 flex-col '>
                    <h3 className='text-[20px] mb-5 font-[600] text-black'>
                        Register with a new account
                    </h3>
                    <TextField id="outlined-basic" type='text' label="Full Name" variant="outlined" className='w-[70%] m-auto' />
                    <TextField id="outlined-basic" type='email' label="Email" variant="outlined" className='w-[70%] m-auto ' />
                    <div className='w-[70%] m-auto relative flex items-center'>
                        <TextField id="outlined-basic" type={`${showpassword === true ? 'text' : 'password'}`} label="Password" variant="outlined" className='w-full ' />
                        <Button className={`!absolute !w-[40px] h-[40px] !text-black hover:!text-[#ff5252] !rounded-full !text-[18px] !min-w-[40px] ${showpassword === false ? 'opacity-100 z-50' : 'opacity-0 z-0'} right-3 top-1/2 -translate-y-1/2`} onClick={() => setshowpassword(!showpassword)}>
                            <GoEye />
                        </Button>
                        <Button className={`!absolute !w-[40px] h-[40px] !text-black hover:!text-[#ff5252] !rounded-full !text-[18px] !min-w-[40px] ${showpassword === true ? 'opacity-100 z-50' : 'opacity-0 z-0'} right-3 top-1/2 -translate-y-1/2`} onClick={() => setshowpassword(!showpassword)}>
                            <GoEyeClosed />
                        </Button>
                    </div>
                     <h3 className='mt-5 text-[13px]'>
                        Already have an account?
                        <Link to={'/login'} className='pl-1 link font-[600] cursor-pointer'>Sign in</Link>
                    </h3>
                    <Button className='button-org !w-[70%] !h-[50px]'>Register</Button>
                    <h3 className='text-[13px]'>
                        Or continue with social account
                    </h3>
                    <Button className='!bg-[rgba(207,202,188,0.61)] !text-black !w-[70%] gap-1 !font-[600] !text-[14px] !h-[50px] hover:!bg-[rgba(207,202,188,0.8)]'><FcGoogle className='!text-[20px]' /> Continue with google</Button>
                </div>
            </div>
        </>
    )
}

export default Register