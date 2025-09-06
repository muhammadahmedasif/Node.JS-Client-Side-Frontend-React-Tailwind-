import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import SliderBar from './drawerComponent';
import { useState } from 'react';
import "./index.css"

function Navigation() {
    const [opendrawer, setopendrawer] = useState(false);

    const openDrawer = () => {
        setopendrawer(true);
    }           

    return (
        <>
            <nav>
                <div className="container flex items-center">

                    <div className='flex-[2] basis-0'>

                        <Button className='!text-black gap-7' onClick={openDrawer}><RiMenu2Fill className='text-[18px] ' /><span className='text-[12px]'>Shop By Catagories</span><TfiAngleDown className='text-[13px]' /></Button>

                    </div>
                    <span className='text-gray-400'>|</span>
                    <div className='flex-[5] basis-0'>

                        <ul className='flex items-center justify-center nav flex-wrap gap-2'>

                            <li className='list-none'>

                                <Link to={"/"}>
                                    <Button className='!text-[12px] !p-1 !min-w-0'>
                                        Home
                                    </Button>
                                </Link>

                            </li>

                            <li className='list-none relative'>

                                <Link to={"/"}>
                                    <Button className='!text-[12px] !p-1 !min-w-0'>
                                        Fashion
                                    </Button>
                                </Link>

                                <div className='submenu transition-all absolute top-[120%] left-[0%] shadow-md bg-white w-full min-w-[100px] opacity-0'>
                                    <ul>
                                        <li className='w-full relative list-none'>
                                            <Link to={"/"}>
                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                    Men
                                                </Button>
                                                <div className='submenu transition-all absolute top-[0%] left-[130%] shadow-md bg-white w-full min-w-[100px] opacity-0'>
                                                    <ul>
                                                        <li className='w-full list-none'>
                                                            <Link to={"/"}>
                                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                                    Shorts
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className='w-full list-none'>
                                                            <Link to={"/"}>
                                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                                    Shoes
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className='w-full list-none'>
                                                            <Link to={"/"}>
                                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                                    Trousers
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className='w-full list-none'>
                                                            <Link to={"/"}>
                                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                                    Shirts
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className='w-full list-none'>
                                                            <Link to={"/"}>
                                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                                    Pants
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className='w-full list-none'>
                                            <Link to={"/"}>
                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                    Women
                                                </Button>
                                                <div className='submenu transition-all absolute top-[0%] left-[130%] shadow-md bg-white w-full min-w-[100px] opacity-0'>
                                                    <ul>
                                                        <li className='w-full list-none'>
                                                            <Link to={"/"}>
                                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                                    Shorts
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className='w-full list-none'>
                                                            <Link to={"/"}>
                                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                                    Shoes
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className='w-full list-none'>
                                                            <Link to={"/"}>
                                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                                    Trousers
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className='w-full list-none'>
                                                            <Link to={"/"}>
                                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                                    Shirts
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className='w-full list-none'>
                                                            <Link to={"/"}>
                                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                                    Pants
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className='w-full list-none'>
                                            <Link to={"/"}>
                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                    Kids
                                                </Button>
                                            </Link>
                                        </li>

                                        <li className='w-full list-none'>
                                            <Link to={"/"}>
                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                    Boys
                                                </Button>
                                            </Link>
                                        </li>

                                        <li className='w-full list-none'>
                                            <Link to={"/"}>
                                                <Button className='w-full !justify-start !text-left capitalize'>
                                                    Girls
                                                </Button>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>

                            </li>

                            <li className='list-none '>

                                <Link to={"/"}>
                                    <Button className='!text-[12px] !p-1 !min-w-0'>
                                        Electronics
                                    </Button>
                                </Link>

                            </li>

                            <li className='list-none '>

                                <Link to={"/"}>
                                    <Button className='!text-[12px] !p-1 !min-w-0'>
                                        Bags
                                    </Button>
                                </Link>

                            </li>

                            <li className='list-none '>

                                <Link to={"/"}>
                                    <Button className='!text-[12px] !p-1 !min-w-0'>
                                        Footwear
                                    </Button>
                                </Link>

                            </li>

                            <li className='list-none '>

                                <Link to={"/"}>
                                    <Button className='!text-[12px] !p-1 !min-w-0'>
                                        Groceries
                                    </Button>
                                </Link>

                            </li>

                            <li className='list-none '>

                                <Link to={"/"}>
                                    <Button className='!text-[12px] !p-1 !min-w-0'>
                                        Beauty
                                    </Button>
                                </Link>

                            </li>

                            <li className='list-none '>

                                <Link to={"/"}>
                                    <Button className='!text-[12px] !p-1 !min-w-0'>
                                        Wellness
                                    </Button>
                                </Link>

                            </li>

                            <li className='list-none '>

                                <Link to={"/"}>
                                    <Button className='!text-[12px] !p-1 !min-w-0'>
                                        Jewellery
                                    </Button>
                                </Link>

                            </li>

                        </ul>

                    </div>

                    <div className='flex-[2] basis-0'>
                        <div className='w-full flex items-center justify-center'>
                            <GoRocket className='text-[18px]' />
                            <span className='text-[12px] ml-2 text-black font-[600]'>
                                Free International Delivery
                            </span>
                        </div>
                    </div>

                </div>
            </nav>
            <SliderBar opendrawer={opendrawer} setopendrawer={setopendrawer} />
        </>
    )   
}

export default Navigation;