import Button from '@mui/material/Button';
import CartItems from './cartitems';
import { Link } from 'react-router-dom';

function ProductCart() {

    return (
        <div className="w-full">
            <div className="w-[80%] gap-3 flex items-center my-10 m-auto">
                <div className="w-[75%] p-5 flex-col rounded-md shadow-sm">
                    <div className="mb-3 shadow-lg border border-gray-100 p-3 bg-white rounded-md">
                        <h3 className="text-[18px] font-[600]">Your Cart</h3>
                        <h3 className="text-[14px] font-[500]">
                            There are <span className="text-[#ff5252] font-[600] text-[15px]">2</span> items in your cart
                        </h3>
                    </div>
                    <div className='w-full h-[500px] overflow-hidden overflow-x-hidden flex items-center flex-col pt-3 overflow-y-scroll rounded-lg gap-3 cardpanel'>
                        <CartItems />
                        <CartItems />
                        <CartItems />
                        <CartItems />
                        <CartItems />
                        <CartItems />
                        <CartItems />
                        <CartItems />
                        <CartItems />
                    </div>
                </div>
                <div className="w-[25%] p-2 rounded-md shadow-sm">
                    <div className='rounded-md p-2 shadow-sm bg-white'>
                        <h3 className="text-[18px] py-2 border-b border-gray-300 font-[600]">Cart Totals</h3>
                        <h3 className="text-[12px] pt-4 flex items-center justify-between font-[600]">
                            Subtotal <span className="text-[#ff5252] font-[700] text-[12px]">2</span>
                        </h3>
                        <h3 className="text-[13px] pt-2  flex items-center justify-between font-[600]">
                            Shipping <span className="text-black font-[700] text-[13px]">Free</span>
                        </h3>
                        <h3 className="text-[13px] pt-2  flex items-center justify-between font-[600]">
                            Estimate for <span className="text-black font-[700] text-[13px]">United Kingdom</span>
                        </h3>
                        <h3 className="text-[14px] pt-2  flex items-center justify-between font-[600]">
                            Total <span className="text-[#ff5252] font-[700] text-[14px]">$130.00</span>
                        </h3>
                    </div>
                    <Button component = {Link} to = {'/checkout'} className='!w-full !mt-4 button-org'>Checkout</Button>
                </div>
            </div>
        </div>
    );
}

export default ProductCart;
