import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Checkout() {
    return (
        <section className="flex w-[95%] m-auto items-center gap-5 ">
            <div className="w-[70%] !my-7 p-3 bg-white rounded-sm">
                <h3 className="text-[17px] py-3 font-[600]">
                    Billing Details
                </h3>
                <form action="" className='flex items-center  justify-evenly w-full gap-2'>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" className='!w-[50%]' />
                    <TextField id="outlined-basic" label="Email" variant="outlined" className='!w-[50%]' />
                </form>
                <h4 className='my-5 pl-[1px] text-[14px] text-gray-500 font-[600]'>
                    Street address*
                </h4>
                <form action="" className='flex items-center flex-col justify-evenly w-full gap-5'>
                    <TextField id="outlined-basic" label="House No. and Street Name" variant="outlined" className='!w-[100%]' />
                    <TextField id="outlined-basic" label="Apartment, suite, unit, etc (optionl)" variant="outlined" className='!w-[100%]' />
                    <div className='flex items-center justify-evenly w-full gap-5'>
                        <TextField id="outlined-basic" label="Town / City*" variant="outlined" className='!w-[50%]' />
                        <TextField id="outlined-basic" label="State / Country" variant="outlined" className='!w-[50%]' />
                    </div>
                </form>
                <h4 className='my-5 pl-[1px] text-[14px] text-gray-500 font-[600]'>
                    Postcode / Zip*
                </h4>
                <form action="" className='flex items-center flex-col justify-evenly w-full gap-5'>
                    <TextField id="outlined-basic" label="Zip Code" variant="outlined" className='!w-[100%]' />
                    <div className='flex items-center justify-evenly w-full gap-5'>
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" className='!w-[50%]' />
                        <TextField id="outlined-basic" label="Email" variant="outlined" className='!w-[50%]' />
                    </div>
                </form>
            </div>
            <div className="w-[30%] !my-7 p-3 bg-white rounded-sm">
                <h3 className="text-[17px] pt-3 pb-4 font-[600] border-b border-gray-300">
                    Your Order
                </h3>
                <h3 className='py-3 text-[13px] font-[500] border-b border-gray-300'>
                    Product
                </h3>
                <div className='w-full flex p-2 h-[250px] flex-col items-center gap-2 checkoutitems over-hidden overflow-x-hidden overflow-y-scroll bg-[#f8f6f6]'>
                    <div className='w-full bg-white flex items-center rounded-md gap-2 overflow-hidden'>
                        <div className='w-[30%] object-cover'>
                            <img src="https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg" alt="checkout product" />
                        </div>
                        <div className='w-[70%] p-2'>
                            <h3 className='text-[13px] mt-3 font-[700]'>
                                Cropped Satin Bomber Jacket
                            </h3>
                            <div className='w-full flex p-3 items-center justify-between'>
                                <h3 className='text-[13px] pt-3 font-[500] text-gray-600'>
                                    Qty: <span className='text-[#ff5252] font-[600]'>1</span>
                                </h3>
                                <h3 className='text-[14px] pt-3 font-[500] text-gray-600'>
                                    $130
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[90%] m-auto pt-3'>

                    <Button className='!w-full button-org !h-[50px] !text-[16px]'>
                        Checkout
                    </Button>
                </div>

            </div>
        </section>
    )
}
export default Checkout;