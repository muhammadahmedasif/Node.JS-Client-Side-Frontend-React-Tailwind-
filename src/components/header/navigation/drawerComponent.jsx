import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import { useState } from 'react';



function SliderBar(props) {


    const toggleDrawer = (newOpen) => () => {
        props.setopendrawer(newOpen);
    };

    const [submenustate, setsubmenustate] = useState({});

    const opensubmenu = (index) => {
        setsubmenustate(prev => ({...prev,[index]:!prev[index]}))
    };

    const [innersubmenustate, setinnersubmenustate] = useState({});

    const openinnersubmenu = (index) => {
        setinnersubmenustate(prev => ({...prev,[index]: !prev[index]}));
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <div className='flex items-center'>

            <h3 className='text-[14px] flex items-center justify-start w-full font-[900] p-2'>Shop By Catagories</h3>
            <Button className="!text-[20px] cursor-pointer flex items-center !text-black !rounded-full !w-[30px] !h-[30px] !p-1 !right-[8px] !min-w-[30px] link text-gray-900 " onClick={toggleDrawer(false)}><IoCloseSharp/></Button>
            </div>
            <div className='scroll'>
                <ul className='w-full'>
                    
                    <li className='list-none flex items-center flex-col relative'>

                        <Link to={"/"} className='w-full'>
                            <Button className='w-full !justify-start !capitalize !text-[rgba(0,0,0,0.9)]'>
                                Fashion
                            </Button>
                        </Link>
                        {
                            submenustate[0] ? <FaRegMinusSquare className='link absolute right-[15px] top-[10px] cursor-pointer' onClick={() => opensubmenu(0)} />
                                :
                                <FaRegPlusSquare className='link absolute right-[15px] top-[10px] cursor-pointer' onClick={() => opensubmenu(0)} />

                        }

                        {
                            submenustate[0] && (<ul className='submenu w-full pl-2'>
                                <li className='list-none flex items-center relative flex-col'>
                                    <Link to={"/"} className='w-full'>
                                        <Button className='w-full !justify-start !capitalize !text-[rgba(0,0,0,0.9)]'>
                                            Apparel
                                        </Button>
                                    </Link>
                                    {
                                        innersubmenustate[0] ? <FaRegMinusSquare className='link absolute right-[15px] top-[10px] cursor-pointer' onClick={() => openinnersubmenu(0)} />
                                        :
                                        <FaRegPlusSquare className='link absolute right-[15px] top-[10px] cursor-pointer' onClick={() => openinnersubmenu(0)} />

                                    }

                                    {
                                        innersubmenustate[0] && (
                                            <ul className='inner_submenu w-full pl-4 text-[12px] font-[400]'>
                                                <li className='list-none flex items-center'>
                                                    <Link to={"/"} className=' mb-1 link w-full !justify-start !capitalize transition'>
                                                        Smart tablet
                                                    </Link>
                                                </li>
                                                <li className='list-none flex items-center'>
                                                    <Link to={"/"} className=' mb-1 link w-full !justify-start !capitalize transition'>
                                                        Crepe T-Shirt
                                                    </Link>
                                                </li>
                                                <li className='list-none flex items-center'>
                                                    <Link to={"/"} className=' mb-1 link w-full !justify-start !capitalize transition'>
                                                        Leather Watch
                                                    </Link>
                                                </li>
                                                <li className='list-none flex items-center'>
                                                    <Link to={"/"} className=' mb-1 link w-full !justify-start !capitalize transition'>
                                                        Rolling Diamond
                                                    </Link>
                                                </li>
                                            </ul>
                                        )}

                                </li>
                            </ul>
                        )}

                    </li>


                     <li className='list-none flex items-center flex-col relative'>

                        <Link to={"/"} className='w-full'>
                            <Button className='w-full !justify-start !capitalize !text-[rgba(0,0,0,0.9)]'>
                                Beauty
                            </Button>
                        </Link>
                        {
                            submenustate [1] ? <FaRegMinusSquare className='link absolute right-[15px] top-[10px] cursor-pointer' onClick={() => opensubmenu(1)} />
                                :
                                <FaRegPlusSquare className='link absolute right-[15px] top-[10px] cursor-pointer' onClick={() => opensubmenu(1)} />

                        }

                        {
                            submenustate [1] && (<ul className='submenu w-full pl-2'>
                                <li className='list-none flex items-center relative flex-col'>
                                    <Link to={"/"} className='w-full'>
                                        <Button className='w-full !justify-start !capitalize !text-[rgba(0,0,0,0.9)]'>
                                            Apparel
                                        </Button>
                                    </Link>
                                    {
                                        innersubmenustate [1] ? <FaRegMinusSquare className='link absolute right-[15px] top-[10px] cursor-pointer' onClick={() => openinnersubmenu(1)} />
                                        :
                                        <FaRegPlusSquare className='link absolute right-[15px] top-[10px] cursor-pointer' onClick={() => openinnersubmenu(1)} />

                                    }

                                    {
                                        innersubmenustate [1] && (
                                            <ul className='inner_submenu text-[12px] w-full pl-4 font-[400]'>
                                                <li className='list-none flex items-center'>
                                                    <Link to={"/"} className=' mb-1 link w-full !justify-start !capitalize transition'>
                                                        Smart tablet
                                                    </Link>
                                                </li>
                                                <li className='list-none flex items-center'>
                                                    <Link to={"/"} className=' mb-1 link w-full !justify-start !capitalize transition'>
                                                        Crepe T-Shirt
                                                    </Link>
                                                </li>
                                                <li className='list-none flex items-center'>
                                                    <Link to={"/"} className=' mb-1 link w-full !justify-start !capitalize transition'>
                                                        Leather Watch
                                                    </Link>
                                                </li>
                                                <li className='list-none flex items-center'>
                                                    <Link to={"/"} className=' mb-1 link w-full !justify-start !capitalize transition'>
                                                        Rolling Diamond
                                                    </Link>
                                                </li>
                                            </ul>
                                        )}

                                </li>
                            </ul>
                        )}

                    </li>


                </ul>
            </div>
        </Box>
    );

    return (
        <>
            <Drawer open={props.opendrawer} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>

        </>
    )
}

export default SliderBar;