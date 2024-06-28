import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LocationPopup from './LocationPopup';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 1200,
  p: 4,
};

function BookYourNav() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="sm:sticky sm:top-0 sm:z-10 flex flex-col sm:flex-row justify-between items-center p-4 bg-black text-white h-auto sm:h-24">
      <div className="flex items-center mb-2 sm:mb-0">
        <img src="src/assets/logo_white.png" className="w-24 sm:w-36" alt="The Playground logo" />
      </div>
      <div className="w-full sm:w-3/5 h-[50px] bg-[#27303c66] rounded-[40px] px-2 sm:px-5 flex items-center mb-2 sm:mb-0">
        <input type="text" className="w-full md:w-[250px] h-full border-none outline-none bg-transparent text-white text-base mx-2" placeholder="Search for events, sports and activities" />
      </div>
      <div className="flex items-center mb-2 sm:mb-0 mx-2" onClick={handleOpen}>
        <span className="font-assistant-semibold text-[16px] sm:text-[20px] font-medium left-0 tracking-[0.36px] leading-normal text-center cursor-pointer">Location</span>
        <object type="image/svg+xml" className="ml-2 w-4 h-4 sm:w-5 sm:h-5 font-thin" data="src/assets/down_arrow.svg">
        </object>
      </div>
      <button className="w-full max-w-[200px] mx-2 sm:w-[160px] md:w-[120px] bg-[#ccff00] text-black px-4 py-2 border-none cursor-pointer text-center rounded-none"><span className="font-assistant-semibold text-[16px] sm:text-[20px] font-bold">SIGN IN</span></button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="location-popup-title"
        aria-describedby="location-popup-description"
      >
        <Box sx={style}>
          <LocationPopup />
        </Box>
      </Modal>
    </div>
  );
};

export default BookYourNav;
