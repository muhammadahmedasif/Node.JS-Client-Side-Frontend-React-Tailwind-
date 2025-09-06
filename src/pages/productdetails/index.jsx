import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/productzoom';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Products from "../../components/products";
import TextField from '@mui/material/TextField';
import ProductDescription from '../../components/Productdescription';


function ProductDetails() {
    const [showcontainer, setshowcontainer] = useState('description')

    return (

        <>
            <div className="container">
                <div role="presentation" className="mb-4 mt-3">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/" className="link text-black !text-[14px] transition-all">
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/productslisting"
                            className="link text-black !text-[14px] transition-all"
                        >
                            Fashion
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            className="!text-[14px] !cursor-text transition-all"
                        >
                            Cropped Satin Bomber Jacket
                        </Link>
                    </Breadcrumbs>

                </div>
            </div>
            <section className='bg-white py-7'>
                <div className='container gap-4 flex h-[542px]'>
                    <div className='productzoom w-[50%] h-full flex items-center'>
                        <ProductZoom slides={3} distance={23} images={['https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg', 'https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg', 'https://i.pinimg.com/1200x/b7/34/80/b734804e1a8c6fd36279090b44d90324.jpg', 'https://i.pinimg.com/736x/8d/5e/95/8d5e951cc6951c61ad8c819efc7169d5.jpg', 'https://img.fantaskycdn.com/f100671d4d76264f245af4e078504c8a_750x.jpeg', 'https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg']} />
                    </div>
                   
                        <ProductDescription />
                </div>
            </section>

            <section className='mt-5'>
                <div className='flex container gap-7'>
                    <h3 className={`link font-[600] ${showcontainer === 'description' ? 'text-[#ff5252]' : 'text-black'} p-3 cursor-pointer text-[18px]`} onClick={(() => setshowcontainer('description'))}>
                        Description
                    </h3>
                    <h3 className={`link font-[600] ${showcontainer === 'details' ? 'text-[#ff5252] ' : 'text-black'} p-3 cursor-pointer text-[18px]`} onClick={(() => setshowcontainer('details'))}>
                        Product Details
                    </h3>
                </div>

                <div className={`container ${showcontainer === 'description' ? 'min-h-[405px] transition-all duration-400' : 'min-h-[485px]  transition-all duration-400'} bg-white border border-gray-300 relative rounded-md py-8 px-5 mt-5`}>
                    {
                        <div className={`absolute w-full ${showcontainer === 'description' ? 'translate-x-0 opacity-100' : '-transform-x-full opacity-0'} transition-all ease-in-out duration-500`}>
                            <p className='text-[14px] font-[400] text-gray-500'>The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office.</p>
                            <p className='text-[14px] font-[400] text-gray-500'>Painted wooden frame with passe-partout for more depth.</p>
                            <h3 className='text-[15px] pt-3 font-[600]'>Lightweight Design</h3>

                            <p className='text-[14px] font-[400] pt-3 text-gray-500'>Designed with a super light geometric case, the Versa family watches are slim, casual and comfortable enough to wear all day and night. Switch up your look</p>
                            <p className='text-[14px] font-[400] text-gray-500'>with classic, leather, metal and woven accessory bands. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <h3 className='text-[15px] pt-3 font-[600]'>Free Shipping & Return</h3>

                            <p className='text-[14px] font-[400] pt-3 text-gray-500'>We offer free shipping for products on orders above 50$ and offer free delivery for all orders in US.</p>
                            <h3 className='text-[15px] pt-3 font-[600]'>Money Back Guarantee</h3>

                            <p className='text-[14px] font-[400] pt-3 text-gray-500'>We guarantee our products and you could get back all of your money anytime you want in 30 days.</p>
                            <h3 className='text-[15px] pt-3 font-[600]'>Online Support</h3>

                            <p className='text-[14px] font-[400] pt-3 text-gray-500'>You will get 24 hour support with this purchase product and you can return it within 30 days for an exchange.</p>
                        </div>
                    }

                    {
                        <div className={`absolute w-full ${showcontainer === 'details' ? 'translate-x-0 opacity-100' : '-transform-x-full opacity-0'} transition-all ease-in-out duration-500`}>
                            <div className='border border-gray-300 p-2 ml-3 opacity-75 w-[170px] rounded-md'>
                                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/m/8.jpg" alt="MIMI Company" className='w-[160px] opacity-75 h-[80px]' />
                            </div>

                            <div className='mt-5 pl-3'>
                                <h3 className='text-[14px] font-[600]'>
                                    Reference <span className='text-[14px] text-gray-400 pl-3 font-[500]'> Product5</span>
                                </h3>
                                <h3 className='text-[14px] font-[600] pt-2'>
                                    Condition <span className='text-[14px] text-gray-400 pl-3 font-[500]'>  Refurbished</span>
                                </h3>
                                <h3 className='text-[14px] font-[600] pt-2'>
                                    In stock <span className='text-[14px] text-green-500 pl-3 font-[500]'> 141 Items</span>
                                </h3>
                                <h3 className='text-[14px] font-[600] pt-2'>
                                    Data sheet
                                </h3>
                                <div className='detailstable mt-3 w-[98%]'>
                                    <table className='w-[97%] text-left text-[15px] bg-[rgba(181,181,181,0.3)]'>
                                        <tr className='bg-[rgba(181,181,181,0.42)]'>
                                            <th className='font-[600] px-4 py-4 border-white border-4'>Composition</th>
                                            <td className='px-4 py-4 border-white border-4'>Ceramic</td>
                                        </tr>
                                        <tr>
                                            <th className='font-[600] px-4 py-4 border-white border-4'>Property</th>
                                            <td className='px-4 py-4 border-white border-4 '>Long sleeves</td>
                                        </tr>
                                        <tr className='bg-[rgba(181,181,181,0.42)]'>
                                            <th className='font-[600] px-4 py-4 border-white border-4'>Style</th>
                                            <td className='px-4 py-4 border-white border-4'>Classic</td>
                                        </tr>
                                    </table>

                                </div>
                            </div>
                        </div>
                    }

                </div>
            </section>

            <div className="bg-white py-10 mb-7 mt-7">
                <div className="container px-6 pb-2">
                    <p className="text-[20px] font-[600]">
                        You might also like
                    </p>
                </div>
                <div className=" justify-center flex w-full items-center">
                    <Products item={"5"} />
                </div>
            </div>


            <section className='bg-white'>
                <div className='container py-10 px-6'>
                    <h3 className='text-[20px] font-[600]'>
                        Reviews
                    </h3>
                    <div className='mt-7 flex items-center flex-col border pt-7 border-gray-200 rounded-lg shadow-md'>
                        <div className='reviewcontainer w-full h-[300px] min-h-[200px] overflow-y-scroll px-5'>
                            <div className='flex items-center border-b border-gray-300 pb-7'>
                                <img src="https://t3.ftcdn.net/jpg/03/33/97/58/360_F_333975812_9ihpONGUuPzvsNhAp2ef89Fru79IcOkb.jpg" alt="profile" className='w-[80px] h-[70px] rounded-full ' />
                                <div className='text-[14px] font-[500] px-5 w-full'>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h3 className='font-[600]'>Jhon Doe</h3>
                                            <h3 className='text-gray-500'>August 5th, 2025</h3>
                                        </div>
                                        <div>
                                            <Stack spacing={1}>
                                                <Rating size='small' name="rating" defaultValue={4} readOnly />
                                            </Stack>
                                        </div>
                                    </div>
                                    <p className='pt-3 '>Nice Product! 👍👌</p>
                                </div>
                            </div>
                            <div className='flex items-center border-b border-gray-300 py-7'>
                                <img src="/tehreem.jpg" alt="profile" className='w-[80px] h-[75px] rounded-full ' />
                                <div className='text-[14px] font-[500] px-5 w-full'>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h3 className='font-[600]'>Tehreem</h3>
                                            <h3 className='text-gray-500'>August 5th, 2025</h3>
                                        </div>
                                        <div>
                                            <Stack spacing={1}>
                                                <Rating size='small' name="rating" defaultValue={5} readOnly />
                                            </Stack>
                                        </div>
                                    </div>
                                    <p className='pt-3 '>Got Wet!🥵🥵💦💦</p>
                                </div>
                            </div>
                            <div className='flex items-center border-b border-gray-300 py-7'>
                                <img src="/zeeshan.jpg" alt="profile" className='w-[80px] h-[70px] rounded-full ' />
                                <div className='text-[14px] font-[500] px-5 w-full'>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h3 className='font-[600]'>Rao Zeeshan Ali</h3>
                                            <h3 className='text-gray-500'>August 5th, 2025</h3>
                                        </div>
                                        <div>
                                            <Stack spacing={1}>
                                                <Rating size='small' name="rating" defaultValue={4} readOnly />
                                            </Stack>
                                        </div>
                                    </div>
                                    <p className='pt-3 '>Most awaited review❤️</p>
                                </div>
                            </div>
                            <div className='flex items-center border-b border-gray-300 py-7'>
                                <img src="https://t3.ftcdn.net/jpg/03/33/97/58/360_F_333975812_9ihpONGUuPzvsNhAp2ef89Fru79IcOkb.jpg" alt="profile" className='w-[80px] h-[70px] rounded-full ' />
                                <div className='text-[14px] font-[500] px-5 w-full'>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h3 className='font-[600]'>Jhon Doe</h3>
                                            <h3 className='text-gray-500'>August 5th, 2025</h3>
                                        </div>
                                        <div>
                                            <Stack spacing={1}>
                                                <Rating size='small' name="rating" defaultValue={4} readOnly />
                                            </Stack>
                                        </div>
                                    </div>
                                    <p className='pt-3 '>Nice Product! 👍👌</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full overflow-hidden mt-7 py-3 px-5 bg-[rgb(224,224,224)] h-[155px] rounded-lg'>
                            <h3 className='font-[500] text-[16px] pb-3'>Add a Review</h3>
                            <div className='reviewarea'>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Add a Review"
                                    multiline
                                    rows={3}
                                    fullWidth
                                    sx={{
                                        backgroundColor: 'white',   // background color
                                        borderRadius: '10px',       // rounded corners
                                        width: '100%',             // full width or set to '300px'
                                        height: '100px',           // fixed height          
                                        '& .MuiInputBase-root': {
                                            height: '100%',          // make input wrapper match height
                                            alignItems: 'flex-start' // align text to top
                                        },
                                        '& .MuiInputBase-inputMultiline': {
                                            height: '100%',          // textarea height
                                            overflowY: 'auto',       // scrollable if content is long
                                        }
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}


export default ProductDetails;