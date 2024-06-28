import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxwidth: 1200,
  width:'90%',
  height: 700,
  maxheight: '95%',
  bgcolor: 'black',
  
};

const SportsModal = ({ isOpen, onClose, sport }) => {
  if (!isOpen) return null;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>


      <div className='p-4'>
        <div className="flex justify-between sm:justify-center items-center">
          <div className="sm:ml-[20vw] ">
            <img src="src/assets/logo_white.png" alt="The Playground logo" className="w-24 sm:w-36" />
          </div>
          <div className="sm:ml-[20vw]  md:pr-0">
            <button className="bg-[#ccff00] text-black px-4 py-2 border-none cursor-pointer text-center rounded-none">
              <span className="font-assistant-semibold text-[16px] sm:text-[20px] font-bold">SIGN IN</span>
            </button>
          </div>
      </div>

<div className="flex flex-col md:flex-row md:justify-center md:gap-4">
  <div className=" md:pl-12b h-[260px] w-full md:w-[40%] md:h-[400px] overflow-hidden">
    <img src={sport.image} alt={sport.title} className="p-4 w-full h-full object-cover object-center rounded-lg mb-4" />
  </div>
  <div className=" w-full mx-4 text-white md:w-[40%]">
    <div>
      <h2 className='font-assistant font-bold uppercase text-3xl text-[#ccff00] '>{sport.title}</h2>
      <p className='mt-6'>{sport.description}</p>
    </div>
    <div>
      <h2 className='text-[#ccff00] text-xl'>Available locations in your area</h2>
      <div className='flex flex-wrap justify-evenly mt-4'>
        <button className=" text-white px-6 py-2 border border-white cursor-pointer text-center rounded-none hover:bg-[#ccff00] hover:text-black hover:border-none">Button 1</button>
        <button className=" text-white px-6 py-2 border border-white cursor-pointer text-center rounded-none hover:bg-[#ccff00] hover:text-black hover:border-none"> Button 2</button>
      </div>
      <h2 className='font-assistant font-bold  text-2xl text-[#ccff00] mt-4'>Time slots</h2>
      <div className='flex flex-wrap justify-evenly mt-4'>
        <button className=" text-white px-6 py-2 border border-white cursor-pointer text-center rounded-none hover:bg-[#ccff00] hover:text-black hover:border-none">Button 3</button>
        <button className=" text-white px-6 py-2 border border-white cursor-pointer text-center rounded-none hover:bg-[#ccff00] hover:text-black hover:border-none">Button 4</button>
      </div>
    </div>
  </div>
</div>

      
      </div>
        
      </Box>
    </Modal>
  );
};

SportsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  sport: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default SportsModal;
