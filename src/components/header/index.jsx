import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Search from "../search";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { GiShoppingCart } from "react-icons/gi";
import { IoIosGitCompare } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./navigation";
import { useContext } from "react";
import { Mycontext } from "../../App";
import { Button } from "@mui/material";
import { IoPersonOutline } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { SlLogout } from "react-icons/sl";
import { IoBagCheckOutline } from "react-icons/io5";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = () => {
    const context = useContext(Mycontext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className="bg-white">

            <div className="top-strip pt-3 border-t-1 border-b-1 border-gray-300">

                <div className="container">

                    <div className="flex items-center p-2 h-[40px] justify-between">

                        <div className="w-[50%] flex items-center justify-start text-left">
                            <span className="text-[12px] font-[600] ">
                                Get up to 50% off new season styles, limited time offer
                            </span>
                        </div>
                        <div className="w-[50%] flex items-center justify-end text-end">

                            <ul className="flex gap-4 justify-center">

                                <li className="list-none">
                                    <Link to={"/help-center"} className="text-[13px] link transition font-[600]"> Help Center </Link>
                                </li>

                                <li className="list-none">
                                    <Link to={"/order-tracking"} className="text-[13px] link transition font-[600]"> Order Tracking </Link>
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

            <div className="header border-b-2 border-gray-300 p-2">

                <div className="container p-2 flex items-center justify-between">

                    <div className="w-[20%] h-[50px] flex items-center justify-start">

                        <Link to={"/"}><img className=" w-full pr-3 object-fit" src="logo.jpg" alt="Classy Megastore" /></Link>

                    </div>

                    <div className="w-[50%] flex items-center p-2 justify-center">

                        <Search />

                    </div>

                    <div className="w-[30%] h-[50px] p-2 flex items-center justify-end">

                        <ul className="flex w-full items-center gap-2 justify-between">

                            {
                                context.isloggedin === false ?

                                    <li className="text-[13px] text-gray-500 list-none justify-center items-center link flex gap-2 w-[50%] font-[600] list-none ">

                                        <Link className="link transition" to={"/login"}>Login</Link> &nbsp;|&nbsp;
                                        <Link className="link transition" to={"/register"}>Register</Link>

                                    </li>
                                    :
                                    < >
                                        <Button className="w-full w-[50%] flex gap-2 items-center justify-between !text-black !leading-3"
                                            onClick={handleClick}>
                                            
                                                <div className="w-[20px] flex items-center justify-center h-[20px] !min-w-[20px] !text-gray-400">
                                                    <IoPersonOutline />
                                                </div>
                                                <div className="w-auto capitalize flex text-left justify-start flex-col items-start pl-2 !text-gray-400 overflow-hidden">
                                                    <h3 className="text-[13px]">Ahmed</h3>
                                                    <h3 className="text-[10px] lowercase">muhammadahmedasif13@gmail.com</h3>
                                                </div>
                                        </Button>
                                                <Menu
                                                    anchorEl={anchorEl}
                                                    id="account-menu"
                                                    open={open}
                                                    onClose={handleClose}
                                                    slotProps={{
                                                        paper: {
                                                            elevation: 0,
                                                            sx: {
                                                                overflow: 'visible',
                                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                                mt: 1.5,
                                                                '& .MuiAvatar-root': {
                                                                    width: 30,
                                                                    height: 22,
                                                                    ml: -0.5,
                                                                    mr: 1,
                                                                },
                                                                '&::before': {
                                                                    content: '""',
                                                                    display: 'block',
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    right: 14,
                                                                    width: 10,
                                                                    height: 10,
                                                                    bgcolor: 'background.paper',
                                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                                    zIndex: 0,
                                                                },
                                                            },
                                                        },
                                                    }}
                                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                                >
                                                    <MenuItem className="gap-3 !py-2 !text-[12px] flex" onClick={()=>{navigate('/myaccount'); handleClose()}}>
                                                        <IoPersonOutline className="flex text-[16px]"/> My account
                                                    </MenuItem>
                                                    <MenuItem className="gap-3 !py-2 !text-[12px] flex" onClick={()=>{navigate('/myorders'); handleClose()}}>
                                                        <IoBagCheckOutline className="flex text-[16px]"/>Orders 
                                                    </MenuItem>
                                                    <MenuItem className="gap-3 !py-2 !text-[12px] flex" onClick={()=>{navigate('/mylist'); handleClose()}}>
                                                        <IoIosHeartEmpty className="flex text-[16px]"/> My List
                                                    </MenuItem>
                                                    <MenuItem className="gap-3 !py-2 !text-[12px] flex" onClick={handleClose}>
                                                        <SlLogout className="flex text-[16px]"/>Logout 
                                                    </MenuItem>
                                                </Menu>
                                    </>
                            }



                            <li className="list-none items-center w-[50%] justify-center link flex gap-2">

                                <Tooltip title="Compare">
                                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !text-black">
                                        <IconButton aria-label="compare" className="hover:!text-[#ff5252]">
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <IoIosGitCompare className="link text-[18px]" />
                                            </StyledBadge>
                                        </IconButton>
                                    </Button>
                                </Tooltip>

                                <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !text-black">
                                    <Tooltip title="Wishlist">
                                        <IconButton aria-label="wishlist" className="hover:!text-[#ff5252]">
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <IoIosHeartEmpty className="text-[18px]" />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </Button>

                                <Button
                                    className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !text-black"
                                    onClick={() => context.setopencart(true)}
                                >
                                    <Tooltip title="Cart">
                                        <IconButton aria-label="cart" className="hover:!text-[#ff5252]">
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <GiShoppingCart className="text-[18px]" />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Navigation />
        </header>
    )
}

export default Header;