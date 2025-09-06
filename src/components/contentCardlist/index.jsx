import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { Button } from '@mui/material';
import { Mycontext } from '../../App';


function ContentCardList(props) {

    const context = useContext(Mycontext)
    

    return (
        <div className="border-1 contentcard border-gray-300 h-[290px] w-full flex px-2 py-4 rounded-[10px]">

            <div className="mt-4 pl-4 justify-start flex relative group overflow-hidden w-[27%]">
                <img
                    src={props.image}
                    alt="Content Image"
                    className="h-[220px] relative w-auto group-hover:opacity-0 opacity-100"
                />
                <img
                    src={props.image2}
                    alt="Content Image"
                    className="h-[220px] w-auto absolute group-hover:opacity-100 opacity-0 transition-all duration-900 hover:scale-105"
                />
                <span className="absolute top-[20px] translate-y-[100px] transition-all hover:scale-130 duration-600 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 left-[10px] bg-red-500 text-[10px] text-white rounded-[100%] px-1 py-1.5 z-[100]">
                    {props.discount}%
                </span>

                <div className="
                                absolute right-[5px] z-[50]
                                -translate-y-[100px] group-hover:translate-y-2
                                opacity-0 group-hover:opacity-100
                                transition-all duration-500
                                flex flex-col gap-2
                ">
                    <IoIosHeartEmpty className='rounded-[20px] p-2 text-[33px] border border-black hover:scale-130 transition-transform duration-300 hover:border-white hover:text-white hover:bg-red-500' />
                    <IoIosGitCompare className='rounded-[20px] p-2 text-[33px] border border-black hover:scale-130 transition-transform duration-300 hover:border-white hover:text-white hover:bg-red-500' />
                    <MdOutlineZoomOutMap className='rounded-[20px] p-2 text-[33px] border border-black hover:scale-130 transition-transform duration-300 hover:border-white hover:text-white hover:bg-red-500' onClick={()=>context.setopenproductdetailsmodal(true)} />
                </div>

            </div>
            <div className='pl-10 w-[73%] my-3'>
                <Link to={"/"}>
                    <p className="font-[500] hover:text-blue-800 text-gray-400 text-[16px] leading-none">{props.brand}</p>
                </Link>
                <Link to={"/"}>
                    <p className="font-[500] text-[15px] pt-3 leading-none link">{props.description}</p>
                </Link>

                <p className='text-[13px] pt-2 pr-1'>
                    Elevate your style with Sapphire where premium fabrics meet timeless design. Crafted for comfort and confidence, our collections blend modern trends with effortless sophistication. Discover your signature look today
                </p>


                <div className='py-2 flex items-center'>
                    <Stack spacing={1}>
                        <Rating name="medium" readOnly defaultValue={4} />
                    </Stack>
                </div>

                <div className='flex gap-4'>
                    <span className='line-through text-[15px] font-[500] text-gray-500'>{props.old}</span>
                    <span className='text-[15px] font-[500]'>{props.new}</span>
                </div>
                <Button className='button-org !mt-3'>Add To Cart</Button>
            </div>
        </div>
    )
}

export default ContentCardList;