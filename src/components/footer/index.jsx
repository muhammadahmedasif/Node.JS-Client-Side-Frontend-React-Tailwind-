import { LiaTruckSolid } from "react-icons/lia";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { PiGiftLight } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Footer() {

    return (
        <>
            <footer className="mt-3 bg-white mb-10 py-10">
                <div className="flex items-center gap-10 justify-evenly pt-10 container">
                    <div className="group flex justify-center items-center flex-col">
                        <LiaTruckSolid className="text-[40px] trnsition-all  duration-500 group-hover:text-[#ff5252] group-hover:-translate-y-3" />
                        <p className="text-[14px] pt-4 font-[600]" >
                            Free Shipping
                        </p>
                        <p className="text-[13px] pt-2 text-gray-400 font-[500]">
                            For all orders over $100
                        </p>
                    </div>
                    <div className="group flex justify-center items-center flex-col">
                        <BsArrowCounterclockwise className="text-[40px] trnsition-all duration-500 group-hover:text-[#ff5252] group-hover:-translate-y-3" />
                        <p className="text-[14px] pt-4 font-[600]" >
                            30 Days Returns
                        </p>
                        <p className="text-[13px] pt-2 text-gray-400 font-[500]">
                            For an Exchange Product
                        </p>
                    </div>
                    <div className="group flex justify-center items-center flex-col">
                        <IoWalletOutline className="text-[40px] trnsition-all duration-500 group-hover:text-[#ff5252] group-hover:-translate-y-3" />
                        <p className="text-[14px] pt-4 font-[600]" >
                            Secured Payments
                        </p>
                        <p className="text-[13px] pt-2 text-gray-400 font-[500]">
                            Payment Cards Accepted
                        </p>
                    </div>
                    <div className="group flex justify-center items-center flex-col">
                        <PiGiftLight className="text-[40px] trnsition-all  duration-500 group-hover:text-[#ff5252] group-hover:-translate-y-3" />
                        <p className="text-[14px] pt-4 font-[600]" >
                            Special Gifts
                        </p>
                        <p className="text-[13px] pt-2 text-gray-400 font-[500]">
                            Our First Product order
                        </p>
                    </div>
                    <div className="group flex justify-center items-center flex-col">
                        <TfiHeadphoneAlt className="text-[40px] trnsition-all  duration-500 group-hover:text-[#ff5252] group-hover:-translate-y-3" />
                        <p className="text-[14px] pt-4 font-[600]" >
                            Support 24/7
                        </p>
                        <p className="text-[13px] pt-2 text-gray-400 font-[500]">
                            Contact us  Anytime
                        </p>
                    </div>

                </div>

                <div className="mt-20 border-t-2 pt-12 border-gray-300">
                    <div className="container flex justify-evenly">
                        <div className="col1 w-[25%] border-r-1 border-gray-300">
                            <h2 className="text-[20px] font-[700] mb-5">
                                Contact Us
                            </h2>
                            <p className="text-[14px] font-[500] text-gray-500">
                                ClassyShop-Mega Super Store
                                <p className="w-full text-gray-500">
                                    507-Union Trade Center France
                                </p>
                            </p>
                            <a href="mailto:sales@yourcompany.com" className="py-2 link block font-[600] text-gray-500">
                                sales@yourcompany.com
                            </a>
                            <p className="w-full text-[20px] font-[600] text-[#ff5252]">
                                (+92) 3078525 478
                            </p>
                            <div className="pt-4 flex items-center">
                                <HiOutlineChatAlt2 className="text-[60px] text-[#ff5252]" /> <p className=" text-[18px] pl-4 font-[600]">Online Chat<br />Get Expert Help</p>
                            </div>
                        </div>
                        <div className="col2 flex  justify-evenly w-[45%] pl-8 pr-4">
                            <div className="w-[50%]">
                                <h2 className="text-[20px] font-[700] flex mb-5">products</h2>

                                <div className="text-[14px] font-[500] text-gray-500 ">
                                    <ul className="flex flex-col gap-1 list ">
                                        <li className="list-none hover:text-[#ff5252] hover:translate-x-2 transition-all duration-200"> <Link to={"/"}> Prices Drop </Link> </li>
                                        <li className="list-none hover:text-[#ff5252] hover:translate-x-2 transition-all duration-200"> <Link to={"/"}> New Products </Link> </li>
                                        <li className="list-none hover:text-[#ff5252] hover:translate-x-2 transition-all duration-200"> <Link to={"/"}> Best Sales </Link> </li>
                                        <li className="list-none hover:text-[#ff5252] hover:translate-x-2 transition-all duration-200"> <Link to={"/"}> Contact Us </Link> </li>
                                        <li className="list-none hover:text-[#ff5252] hover:translate-x-2 transition-all duration-200"> <Link to={"/"}> Sitemap </Link> </li>
                                        <li className="list-none hover:text-[#ff5252] hover:translate-x-2 transition-all duration-200"> <Link to={"/"}> Stores </Link> </li>
                                    </ul>
                                </div>
                            </div>
                             <div className="w-[50%]">
                                <h2 className="text-[20px] font-[700] flex mb-5">Our Company</h2>

                                <div className="text-[14px] font-[500] text-gray-500 ">
                                    <ul className="flex flex-col gap-1 list ">
                                        <li className="list-none hover:text-[#ff5252] hover:translate-x-2 transition-all duration-200"> <Link to={"/"}> Delivery </Link> </li>
                                        <li className="list-none hover:text-[#ff5252] hover:translate-x-2 transition-all duration-200"> <Link to={"/"}> Legal Notice </Link> </li>
                                        <li className="list-none hover:text-[#ff5252] hover:translate-x-2 transition-all duration-200"> <Link to={"/"}> Terms and Conditions of Use </Link> </li>
                                        <li className="list-none hover:text-[#ff5252] hover:translate-x-2 transition-all duration-200"> <Link to={"/"}> About Us </Link> </li>
                                        <li className="list-none hover:text-[#ff5252] hover:translate-x-2 transition-all duration-200"> <Link to={"/"}> Secure Payment </Link> </li>
                                        <li className="list-none hover:text-[#ff5252] hover:translate-x-2 transition-all duration-200"> <Link to={"/"}> Login </Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col3 w-[30%]">
                            <h2 className="text-[20px] font-[700] mb-5">Subscribe To Newsletter</h2>
                            <p className="text-gray-500 text-[14px]">Subscribe to our latest newsletter to get</p>
                            <p className="text-gray-500 text-[14px]">news about special discounts</p>
                            <form className="pt-4">
                                <input type="text" placeholder="Your Email Address" className="bg-white border border-gray-300 w-[81%] flex justify-center focus:border-[rgba(0,0,0,0.4)] outline-none h-[45px] pl-3 pr-3 rounded-[5px]"/>
                                <Button className="!bg-[#ff5252] !hover:bg-red-500 !text-white !py-4 !px-7 !text-[15px] !mt-2">SUBSCRIBE</Button>
                                <FormControlLabel control={<Checkbox />} label="I agree to the terms aand conditions and the privacy policy"  className="!mt-3 text-gray-500"/>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;

