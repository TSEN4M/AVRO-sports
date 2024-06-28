
import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import BookMyTrialModal from './BookMyTrialModal';

const MenuComponent = ({ anchorEl, open, onClose }) => {
  const [showBookMyTrialModal, setShowBookMyTrialModal] = React.useState(false);

  const handleBookMyTrialClick = () => {
     // Close the menu
    setShowBookMyTrialModal(true); // Open the modal
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: '#ccff00',
        },
      }}
      sx={{
        '&.MuiMenuItem-root': {
          fontSize: 18, // change text size to 18px
          fontFamily: 'assistant', // change font to Arial
          fontWeight: 600
        },
      }}
    >
      <MenuItem className="bg-[#ccff00] " onClick={handleBookMyTrialClick}>
        Book a Free Trial
      </MenuItem>
      <hr className='border border-black'></hr>
      <MenuItem className="bg-[#ccff00] " onClick={onClose}>
        Book a Subscription
      </MenuItem>
      <BookMyTrialModal
        open={showBookMyTrialModal}
        onClose={() => setShowBookMyTrialModal(false)}
      />
    </Menu>
  );
};

export default MenuComponent;