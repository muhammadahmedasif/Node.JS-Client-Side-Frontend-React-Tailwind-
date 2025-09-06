import { BsUpload } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import { SlLogout } from "react-icons/sl";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router";
import TextField from '@mui/material/TextField';



function MyAccount() {
    return (
        <section>
            <div className="container flex gap-8">
                <div className="w-[20%] bg-white rounded-lg my-10">
                    <div className="flex items-center flex-col justify-center py-7">
                        <div className="overflow-hidden rounded-full h-[110px] w-[110px] cursor-pointer relative">
                            <img
                                src="https://thumbs.dreamstime.com/b/portrait-cheerful-smiling-young-man-folded-arms-joyful-handsome-men-crossed-hands-studio-shot-isolated-gray-195089624.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] w-full h-full opacity-0 hover:opacity-100 hover:z-50 flex items-center justify-center">
                                <BsUpload className="text-white text-[20px]" size={24} strokeWidth={0.5} />
                                <input
                                    type="file"
                                    accept="image/"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                            </div>
                        </div>
                        <h3 className="text-[18px] capitalize font-[600] mt-5">
                            Jhone Duke
                        </h3>
                        <h3 className="text-[13px] w-[97%] overflow-hidden m-auto flex items-center justify-center lowercase font-[600] text-gray-600 px-2 break-all">
                            muhammadahmedasif13@gmail.com
                        </h3>
                    </div>
                    <ul className="list-none bg-[#f8f6f6] pt-3 myaccounttabs">
                        <li className="w-full list-none py-1">
                            <NavLink
                                exact={true}
                                to="/myaccount"
                                activeClassName="isActive">
                                <Button className="!flex !items-center !justify-start !text-left gap-5 !p-3 !text-black capitalize !w-full"><IoPersonOutline className="text-[20px]" />My Profile</Button>
                            </NavLink>
                        </li>
                        <li className="w-full list-none py-1">
                            <NavLink
                                exact={true}
                                to="/mylist"
                                activeClassName="isActive">
                                <Button className="!flex !items-center !justify-start !text-left gap-5 !p-3 !text-black capitalize !w-full"><IoIosHeartEmpty className="text-[20px]" />My List
                                </Button>
                            </NavLink>
                        </li>
                        <li className="w-full list-none py-1">
                            <NavLink
                                exact={true}
                                to="/myorders"
                                activeClassName="isActive">
                                <Button className="!flex !items-center !justify-start !text-left gap-5 !p-3 !text-black capitalize !w-full"><IoBagCheckOutline className="text-[20px]" />My Orders
                                </Button>
                            </NavLink>
                        </li>
                        <li className="w-full list-none py-1">
                            <NavLink
                                exact={true}
                                to="/logout"
                                activeClassName="isActive">
                                <Button className="!flex !items-center !justify-start !text-left gap-5 !p-3 !text-black capitalize !w-full"><SlLogout className="text-[20px]" />Logout
                                </Button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="w-[80%] bg-white rounded-lg my-10 flex items-center">
                    <div className="flex items-center flex-col px-4 w-full py-7">
                        <h3 className="text-[20px] font-[600] pb-5 flex justify-start w-full mb-4 border-b border-gray-300">
                            My Profile
                        </h3>
                        <form action="" className="w-full flex items-center flex-col">
                            <div className="w-full flex items-center pt-10 justify-between gap-4">
                                <TextField id="outlined-basic" label="Full Name" variant="outlined" className="w-[50%]" />
                                <TextField id="outlined-basic" label="Phone Number" variant="outlined" className="w-[50%]" />
                            </div>
                            <div className="w-full flex items-center pt-10 justify-between gap-4">
                                <TextField id="outlined-basic" label="Full Name" variant="outlined" className="w-full" />
                            </div>
                            <div className="w-full flex items-center justify-evenly h-[90px] pt-10">
                                <Button className="button-org !w-[40%] !text-[18px] !h-full">
                                    Save
                                </Button>
                                <Button className="!bg-white hover:!bg-[#ff5252] hover:!text-white !border !border-[#ff5252] !text-[#ff5252] !w-[40%] !text-[18px] !h-full">
                                    Cancel
                                </Button>

                            </div>

                        </form>


                    </div>

                </div>

            </div>
        </section>
    )
}

export default MyAccount;