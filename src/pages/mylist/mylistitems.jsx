import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { LuDelete } from "react-icons/lu";


function Mylistitems() {
    

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


                    <h3 className='flex pt-3 items-center justify-between w-[220px] text-[12px] font-[500]'>
                        $58.00 <span className='line-through text-gray-400'>$58.00</span>
                        <span className='text-[#ff5252] font-[600]'>50% off</span>
                    </h3>
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

export default Mylistitems