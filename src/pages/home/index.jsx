import { FaTruckFast } from "react-icons/fa6";
import HomeSliderV2 from "../../components/HomeSliderV2";
import CatSlider from "../../components/catSlider";
import Products from "../../components/products";
import AddsBanner from "../../components/addBanner";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BannerBox from "../../components/BannerBox";
import AddsBannerv2 from "../../components/addBannerV2";
import { Link } from "react-router-dom";


function Home() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {/* <HomeSlider /> */}

            <div className="container flex gap-5 items-stretch !my-5">
                <div className="w-[75%]">
                    <HomeSliderV2 />
                </div>

                <div className='w-[25%] gap-5 flex flex-col'>
                    <BannerBox image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} info="left" description1="Samsung Gear" description2 = {"VR Camera"} price="$129.00" className="flex-1" />
                    <BannerBox image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"} info="right" description1="Marcel Dining" description2 = {"Room Chair"} price="$129.00" className="flex-1" />
                </div>
            </div>


            <CatSlider />

            <section className="bg-white mt-5 w-full">
                <div className="flex container items-center justify-between p-5">
                    <div>
                        <p className="text-[20px] font-[600]">
                            Popular Products
                        </p>
                        <p className="font-[400]">
                            Don't miss out the amaizing offers till the end of july
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label="Fashion" />
                                <Tab label="Electronics" />
                                <Tab label="Bags" />
                                <Tab label="Footwear" />
                                <Tab label="Groceries" />
                                <Tab label="Beauty" />
                                <Tab label="Wellness" />
                                <Tab label="Jewellery" />
                            </Tabs>
                        </Box>
                    </div>
                </div>
                <div className=" justify-center flex w-full items-center">
                    <Products  item={"5"} />
                </div>
            </section>

            <section className="bg-white mt-5 px-6">
                <div className="flex justify-center pt-3">
                    <div className="w-[70%] border-2 border-red-900 p-2 flex rounded-[10px] items-center justify-between">
                        <div className="flex flex-[2] basis-auto items-center justify-center">
                            <FaTruckFast className="font-[600] text-[27px]" />
                            <h3 className="font-[600] text-[20px] p-2">
                                Free Shipping
                            </h3>
                        </div>
                        |
                        <div className="flex flex-[2] basis-auto justify-center items-center">
                            <h3 className="font-[400] text-[12px]">
                                Free Delivery Now on Your First Order over $2000
                            </h3>
                        </div>
                        |
                        <div className="flex flex-[2] basis-auto justify-center items-center">
                            <h3 className="font-[600] justify-center text-[20px] p-2">
                                -Only $200
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="mt-8 overflow-hidden">
                    <div className=" justify-center flex w-full  overflow-hidden items-center">
                        <AddsBannerv2 item={4} />
                    </div>
                </div>
            </section>

            <div className="bg-white mt-7">
                <div className="container p-5">
                    <p className="text-[20px] font-[600]">
                        Featured Products
                    </p>
                </div>
                <div className=" justify-center flex w-full items-center">
                    <Products item={"5"} />
                </div>
            </div>

            <section className="bg-white p-6 mt-5">
                <div className="mt-8">
                    <div className="justify-center flex w-full items-center">
                        <AddsBanner item={2} />
                    </div>
                </div>
            </section>
        </>
    )
}


export default Home;