import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

function Menufun() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState('Relevance'); // default selected text

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
    if (item) {
      setSelectedItem(item);  // update the displayed text
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='!items-center !py-1 !px-2 !justify-start flex !border-1 !border-[rgba(52,50,50,0.6)] !bg-white !w-[200px] !min-w-[200px] !text-[12px] !font-[600] !text-[rgba(52,50,50,0.6)]'
      >
        {selectedItem}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()} // just close without changing
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
        className=' menuitems '
      >
        <MenuItem onClick={() => handleClose('Relevance')} className='!text-[12px] hover:!bg-[#ff5252] hover:!text-white hover:!scale-107 hover:!translate-x-1' >Relevance</MenuItem>
        <MenuItem onClick={() => handleClose('Sales, highest to lowest')} className='!text-[12px] hover:!bg-[#ff5252] hover:!text-white hover:!scale-107 hover:!translate-x-1'>Sales, highest to lowest</MenuItem>
        <MenuItem onClick={() => handleClose('Name, A to Z')} className='!text-[12px] hover:!bg-[#ff5252] hover:!text-white hover:!scale-107 hover:!translate-x-1'>Name, A to Z</MenuItem>
        <MenuItem onClick={() => handleClose('Name, Z to A')} className='!text-[12px] hover:!bg-[#ff5252] hover:!text-white hover:!scale-107 hover:!translate-x-1'>Name, Z to A</MenuItem>
        <MenuItem onClick={() => handleClose('Price, low to high')} className='!text-[12px] hover:!bg-[#ff5252] hover:!text-white hover:!scale-107 hover:!translate-x-1'>Price, low to high</MenuItem>
        <MenuItem onClick={() => handleClose('Price, high to low')} className='!text-[12px] hover:!bg-[#ff5252] hover:!text-white hover:!scale-107 hover:!translate-x-1'>Price, high to low</MenuItem>
      </Menu>
    </div>
  );
}

export default Menufun;
