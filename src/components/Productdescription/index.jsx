import { useState } from 'react';
import { Button } from '@mui/material';
import { TiTick } from "react-icons/ti";
import QuantityBox from '../../components/quantitybox';
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { PiHandCoinsBold } from "react-icons/pi";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

function ProductDescription() {

        const [size, setsize] = useState('Small')
        const [pickedcolor, setpickedcolor] = useState('Black')

    return(
        <div className='details overflow-hidden pt-4 h-full w-[50%] pl-10'>
        <div className='flex ratingwrapper gap-3'>
            <Stack spacing={1}>
                <Rating size='small' name="rating" defaultValue={2} readOnly className='!text-gray-400' />
            </Stack>

            <span className='text-[14px]'>Reviews (15)</span>
        </div>
        <div className='border-b pb-3 pt-3 border-gray-300'>
            <h1 className='text-[20px] font-[600]'>Cropped Satin Bomber Jacket</h1>
            <p className='text-[16px] font-500 text-gray-500 pt-4'>Established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
        </div>
        <div>
            <h2 className='text-[16px] pt-4 font-[600]'>
                Brand: <span className='link font-[400]'> Pro Tech Gear</span>
            </h2>
            <h2 className='text-[16px] pt-3 font-[600]'>
                Condition: <span className='text-gray-500 font-[400]'>  Refurbished</span>
            </h2>
            <h2 className='text-[16px] pt-3 font-[600]'>
                Reference:  <span className='text-gray-500 font-[400]'> Product5</span>
            </h2>
            <h2 className='text-[16px] pt-3 font-[600]'>
                Available In Stock:  <span className='text-green-600 font-[500]'>  141 Items</span>
            </h2>
            <h2 className='text-[16px] pt-3 font-[600]'>
                Hurry up! only  <span className='text-red-600 font-[500]'>  141 Items</span> left in stock!
            </h2>
            <div className='pt-3'>
                <div>
                    <h2 className='text-[16px] font-[600]'>
                        Size: <span>{size}</span>
                    </h2>
                    <div className='flex pt-3 gap-2'>
                        <Button onClick={() => setsize('Small')} className={`!border ${size === 'Small' ? '!text-white !bg-[#ff5252]' : "!text-black !bg-white"} !min-w-[20px] !border-gray-300 hover:!bg-[#ff5252] hover:!text-white`}>Small</Button>
                        <Button onClick={() => setsize('Large')} className={`!border ${size === 'Large' ? '!text-white !bg-[#ff5252]' : "!text-black !bg-white"} !min-w-[20px] !border-gray-300 hover:!bg-[#ff5252] hover:!text-white`}>Large</Button>
                        <Button onClick={() => setsize('XL')} className={`!border ${size === 'XL' ? '!text-white !bg-[#ff5252]' : "!text-black !bg-white"} !min-w-[20px] !border-gray-300 hover:!bg-[#ff5252] hover:!text-white`}>XL</Button>
                        <Button onClick={() => setsize('XXL')} className={`!border ${size === 'XXL' ? '!text-white !bg-[#ff5252]' : "!text-black !bg-white"} !min-w-[20px] !border-gray-300 hover:!bg-[#ff5252] hover:!text-white`}>XXL</Button>
                    </div>
                </div>
                <div className='pt-3'>
                    <h2 className='text-[16px] font-[600]'>
                        Color: <span>{pickedcolor}</span>
                    </h2>
                    <div className='flex pt-3 gap-3'>
                        <div onClick={() => setpickedcolor('Black')} className={`w-[30px] h-[30px] bg-black ${pickedcolor === 'Black' ? 'ring-gray-400 ring-2 ring-offset-2 scale-90' : ''} hover:ring-gray-400 hover:ring-2 hover:ring-offset-2 rounded-full flex items-center justify-center cursor-pointer text-white hover:scale-90 relative`}><TiTick className={`${pickedcolor === 'Black' ? 'opacity-100' : 'opacity-0'} text-[20px] absolute`} /></div>
                        <div onClick={() => setpickedcolor('Brown')} className={`w-[30px] h-[30px] bg-[rgba(77,37,21,1)] ${pickedcolor === 'Brown' ? 'ring-gray-400 ring-2 ring-offset-2 scale-90' : ''} hover:ring-gray-400 hover:ring-2 hover:ring-offset-2 rounded-full  flex items-center cursor-pointer justify-center text-white relative hover:scale-90 relative`}><TiTick className={`${pickedcolor === 'Brown' ? 'opacity-100' : 'opacity-0'} text-[20px] absolute`} /></div>
                    </div>
                </div>
            </div>
            <h2 className='text-[20px] pt-3 font-[600] text-[#ff5252]'>
                $94.00
            </h2>
            <h2 className='text-[14px] font-[400] text-gray-400'>
                Free Shipping (Est. Delivery Time 2-3 Days)
            </h2>

            <div className='pt-3'>
                <div className='quantitywrapper w-full'>
                    <QuantityBox stock={'100'} />
                </div>
            </div>
            <div className='flex items-center gap-3 pt-5'>
                <Link to={'https://www.facebook.com/'}>
                    <Button className='hover:!bg-blue-900 !min-w-[60px] !transition-all duration-400 opacity-75 !border !text-blue-900 !rounded-none !border-blue-900 !w-[60px] hover:!text-white'><GrFacebookOption className='!text-[20px]' /></Button>
                </Link>
                <Link to={'https://x.com/'}>
                    <Button className='hover:!bg-black !min-w-[60px] !transition-all duration-400 !border !text-black !rounded-none !border-black !w-[60px] hover:!text-white'><RiTwitterXLine className='!text-[20px]' /></Button>
                </Link>
                <Link to={'https://www.pinterest.com/'}>
                    <Button className='hover:!bg-red-600 !min-w-[60px] !transition-all duration-400 !border !text-red-600 !rounded-none !border-red-600 !w-[60px] hover:!text-white'><FaPinterest className='!text-[20px]' /></Button>
                </Link>
            </div>
            <div className='mt-4 gap-2 flex flex-col items-center'>
                <div className='w-full h-[80px] bg-[#f8f6f6]'>
                    <div className='w-full px-6 h-full flex'>
                        <div className='mr-4 pt-4'>
                            <MdLock className='!text-[30px] text-[rgba(244,104,4,0.66)] ' />
                        </div>
                        <div className='w-full h-full flex items-center'>
                            <h3 className='font-[500] text-[15px]'>Security policy
                                <span className='block font-[400]'>(edit with the Customer Reassurance module)</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[80px] bg-[#f8f6f6]'>
                    <div className='w-full px-6 h-full flex'>
                        <div className='mr-4 pt-4'>
                            <FaTruckFast className='!text-[30px] text-[rgba(244,104,4,0.66)] ' />
                        </div>
                        <div className='w-full h-full flex items-center'>
                            <h3 className='font-[500] text-[15px]'>Delivery policy
                                <span className='block font-[400]'>(edit with the Customer Reassurance module)</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[80px] bg-[#f8f6f6]'>
                    <div className='w-full px-6 h-full flex'>
                        <div className='mr-4 pt-4'>
                            <PiHandCoinsBold className='!text-[30px] text-[rgba(244,104,4,0.66)] ' />
                        </div>
                        <div className='w-full h-full flex items-center'>
                            <h3 className='font-[500] text-[15px]'>Return policy
                                <span className='block font-[400]'>(edit with the Customer Reassurance module)</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProductDescription