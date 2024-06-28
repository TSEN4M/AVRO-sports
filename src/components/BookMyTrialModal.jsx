
import { Modal, Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const BookMyTrialModal = ({ open, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data here
    console.log('Form submitted:', { firstName, lastName, phone, email });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        maxWidth: '80%',
        height: 500,
        bgcolor: '#479F78',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography id="modal-title" variant="h6" component="h2" className='text-white text-center font-assistant font-3xl font-bold'>
          Get your 5 days free trial today
        </Typography> 
        <Typography id="modal-description" sx={{ mt: 2 }} className='text-white text-center font-xl'>
        Sign up with your details to receive your 5 day free pass
        </Typography> 
        
        <form onSubmit={handleSubmit} className='mt-8 flex flex-col flex-wrap sm:justify-around sm:flex-row md:gap-4 justify-evenly items text-xl sm:text-xl sm:px-16'>
          <label className='block text-white font-assistant font-xl'>
            First Name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} className="rounded block placeholder: w-full" />
          </label>
          
          <label className='block text-white font-assistant font-xl'>
            Last Name:
            <input type="text" value={lastName} onChange={handleLastNameChange} className="rounded block placeholder: w-full" />
          </label>

          <label className='block text-white font-assistant font-xl'>
            Phone Number:
            <input type="tel" value={phone} onChange={handlePhoneChange} className="rounded block placeholder: w-full" />
          </label>

          <label className='block text-white font-assistant font-xl'>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} className="rounded block placeholder: w-full" />
          </label>
      
          <button  type="submit" className='bg-[#479F78] border border-white md:w-[300px] text-white mt-2 p-2'>
            Book Trial
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookMyTrialModal;