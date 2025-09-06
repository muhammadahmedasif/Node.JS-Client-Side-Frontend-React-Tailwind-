import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import QuantityBoxCart from '../../components/quantityboxcart';
import { useState } from 'react';

function CartItems() {
    const [sizeArrowUp, setSizeArrowUp] = useState(false);
    const [selectedSize, setSelectedSize] = useState('S');
    const [sizeMenuAnchor, setSizeMenuAnchor] = useState(null);
    const sizeMenuOpen = Boolean(sizeMenuAnchor);


    const handleSizeClick = (event) => {
        if (sizeMenuOpen) {
            handleSizeClose();
        } else {
            setSizeMenuAnchor(event.currentTarget);
            setSizeArrowUp(true);
        }
    };


    const handleSizeClose = (item) => {
        if (item) {
            setSelectedSize(item);
        }
        setSizeMenuAnchor(null);
        setSizeArrowUp(false);
    };

    return (
        <div className="flex items-center shadow-lg bg-white border border-gray-100 rounded-md p-2 w-full relative">

            <div className="w-[15%]">
                <img src="https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg" alt="cart item" />
            </div>


            <div className="w-[85%] flex items-center justify-between pl-5 pr-2">
                <div>
                    <h3 className="text-[12px] pt-1 text-gray-500 font-[600]">Sapphire</h3>
                    <h3 className="text-[14px] pt-1 text-black font-[600]">
                        Brown old money style T-shirt
                    </h3>


                    <div className='flex items-center pt-3 justify-between'>

                        <Button
                            className='!min-w-[95px] !text-[12px] gap-2 !border !border-black !bg-[rgba(0,0,0,0.2)] !w-[95px] h-[26px] !text-black !rounded-md'
                        >
                            Size
                            <div
                                className='relative w-[50%] border-l pl-2 flex border-black'
                                id="size-button"
                                aria-controls={sizeMenuOpen ? 'size-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={sizeMenuOpen ? 'true' : undefined}
                                onClick={handleSizeClick}
                            >
                                <span>
                                    {selectedSize}
                                    <Menu
                                        id="size-menu"
                                        anchorEl={sizeMenuAnchor}
                                        open={sizeMenuOpen}
                                        onClose={() => handleSizeClose()}
                                        MenuListProps={{
                                            'aria-labelledby': 'size-button',
                                        }}
                                        className='menuitems'
                                    >
                                        {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                            <MenuItem
                                                key={size}
                                                onClick={() => handleSizeClose(size)}
                                                className='!text-[12px] hover:!bg-[#ff5252] hover:!text-white hover:!scale-107'
                                            >
                                                {size}
                                            </MenuItem>
                                        ))}
                                    </Menu>


                                    <FaAngleDown className={`text-[12px] absolute top-1/2 -right-1 ${!sizeArrowUp ? 'opacity-100 -translate-y-1/2' : 'opacity-0 -translate-y-full'} transition-all duration-300 ease-in-out`} />
                                    <FaAngleUp className={`text-[12px] absolute top-1/2 -right-1 ${sizeArrowUp ? 'opacity-100 -translate-y-1/2' : 'opacity-0 translate-y-full'} transition-all duration-300 ease-in-out`} />
                                </span>
                            </div>
                        </Button>
                    </div>


                    <h3 className='flex pt-3 items-center justify-between w-[220px] text-[12px] font-[500]'>
                        $58.00 <span className='line-through text-gray-400'>$58.00</span>
                        <span className='text-[#ff5252] font-[600]'>50% off</span>
                    </h3>
                </div>
                <div className='flex items-center justify-center'>
                    <QuantityBoxCart stock={100} />
                </div>


                <div>
                    <Stack spacing={1}>
                        <Rating size='small' name="rating" defaultValue={4} readOnly />
                    </Stack>
                </div>
            </div>


            <Button className='hover:!bg-[#f1f1f1] !text-[18px] !min-w-[30px] !w-[30px] !h-[30px] !absolute top-3 right-3 !rounded-full !text-gray-600'>
                <LuDelete />
            </Button>
        </div>
    )
}

export default CartItems