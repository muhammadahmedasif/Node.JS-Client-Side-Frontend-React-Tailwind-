import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography'; // optional, looks nicer

function valuetext(value) {
  return `$${value}`;
}

function RangeSlider() {
  const [value, setValue] = React.useState([1000, 30000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={50000}
      />
      <Typography variant="body2">
       <div className='w-full flex !justify-between'> 
        <span className='text-[12px] font-[700]'>From: <span className='text-[13px] font-[900] text-red-700'>${value[0]}</span></span>
        <span className='text-[12px] font-[700]'>To: <span className='text-[13px] font-[900] text-green-700'>${value[1]}</span></span>
       </div>
      </Typography>
    </Box>
  );
}

export default RangeSlider;
