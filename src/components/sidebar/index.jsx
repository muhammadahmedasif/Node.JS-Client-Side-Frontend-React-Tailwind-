import { Collapse } from 'react-collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from '../rangeslider';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



function SideBar() {

    function setcollapse() {
        setisopenesdcollapse(!isopenesdcollapse);
    }

    const [isopenesdcollapse, setisopenesdcollapse] = useState(true)

    return (
        <>
            <aside className="w-full checkboxes border border-gray-300 rounded-sm px-3 py-3">
                <div className="box w-full">
                    <h3 className='text-[16px] font-[600] mb-3 flex items-center w-full pr-2 link' onClick={setcollapse}>Shop by Catagory <span className='!ml-auto'>{isopenesdcollapse ? <FaAngleUp className='link' /> : <FaAngleDown className='link' />}</span></h3>
                    <Collapse isOpened={isopenesdcollapse}>
                        <div className='flex catitems items-center flex-col'>
                            <FormControlLabel control={<Checkbox size='medium' />} label="Fashion" className='w-full pl-5 link' />
                            <FormControlLabel control={<Checkbox size='medium' />} label="Fashion" className='w-full pl-5 link' />
                            <FormControlLabel control={<Checkbox size='medium' />} label="Fashion" className='w-full pl-5 link' />
                            <FormControlLabel control={<Checkbox size='medium' />} label="Fashion" className='w-full pl-5 link' />
                            <FormControlLabel control={<Checkbox size='medium' />} label="Fashion" className='w-full pl-5 link' />
                            <FormControlLabel control={<Checkbox size='medium' />} label="Fashion" className='w-full pl-5 link' />
                            <FormControlLabel control={<Checkbox size='medium' />} label="Fashion" className='w-full pl-5 link' />
                            <FormControlLabel control={<Checkbox size='medium' />} label="Fashion" className='w-full pl-5 link' />
                            <FormControlLabel control={<Checkbox size='medium' />} label="Fashion" className='w-full pl-5 link' />
                            <FormControlLabel control={<Checkbox size='medium' />} label="Fashion" className='w-full pl-5 link' />
                            <FormControlLabel control={<Checkbox size='medium' />} label="Fashion" className='w-full pl-5 link' />
                        </div>
                    </Collapse>
                </div>
                <div className="box w-full mt-3">
                    <h3 className='text-[16px] font-[600] mb-3 flex items-center w-full pr-2 link'>Availability</h3>
                    <div className='flex items-center flex-col'>
                        <FormControlLabel control={<Checkbox size='medium' />} label="Avalable(12)" className='w-full pl-5 link' />
                        <FormControlLabel control={<Checkbox size='medium' />} label="In Stock(9)" className='w-full pl-5 link' />
                        <FormControlLabel control={<Checkbox size='medium' />} label="Not Available(5)" className='w-full pl-5 link' />
                    </div>
                </div>
                <div className="box w-full mt-3">
                    <h3 className='text-[16px] font-[600] mb-3 flex items-center w-full pr-2 link'>Size</h3>
                    <div className='flex items-center flex-col'>
                        <FormControlLabel control={<Checkbox size='medium' />} label="XX-Small" className='w-full pl-5 link' />
                        <FormControlLabel control={<Checkbox size='medium' />} label="X-Small" className='w-full pl-5 link' />
                        <FormControlLabel control={<Checkbox size='medium' />} label="Small" className='w-full pl-5 link' />
                        <FormControlLabel control={<Checkbox size='medium' />} label="Medium" className='w-full pl-5 link' />
                        <FormControlLabel control={<Checkbox size='medium' />} label="Large" className='w-full pl-5 link' />
                        <FormControlLabel control={<Checkbox size='medium' />} label="X-Large" className='w-full pl-5 link' />
                        <FormControlLabel control={<Checkbox size='medium' />} label="XX-Large" className='w-full pl-5 link' />
                    </div>
                </div>
                <div className="box w-full flex items-center flex-col mt-3">
                    <h3 className='text-[16px] font-[600] mb-3 flex items-center w-full pr-2 link'>Filter by Price</h3>
                    <div className="w-full flex items-center justify-center">
                        <RangeSlider />
                    </div>
                </div>
                <div className="box w-full flex items-center flex-col mt-3">
                    <h3 className='text-[16px] font-[600] mb-3 flex items-center w-full pr-2 link'>Filter by Rating</h3>
                    <div className="w-full flex items-center justify-center">
                        <Stack spacing={1}>
                            <Rating name="size-medium" defaultValue={1} readOnly  />
                            <Rating name="size-medium" defaultValue={2} readOnly  />
                            <Rating name="size-medium" defaultValue={3} readOnly  />
                            <Rating name="size-medium" defaultValue={4} readOnly  />
                            <Rating name="size-medium" defaultValue={5} readOnly  />
                        </Stack>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideBar