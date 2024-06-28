// Card.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SportsModal from '../components/SportModal.jsx';
import MenuComponent from './MenuComponent';

const Card = ({ image, title, id, description, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="block h-[400px] w-[310px] md:w-[332px]">
        <div className="relative rounded-[13px] border-none h-[400px] w-[310px] md:w-[332px] inline-block overflow-hidden hover:cursor-pointer">
          <img className="w-full h-[291px] object-cover object-center rounded-[13px] " src={image} alt={title}  onClick={handleCardClick}/>
          <div className="flex p-2 h-auto " >
            <span className="font-assistant text-[22px] font-medium text-white ">{title}</span>
            <img onClick={handleClick}   className="ml-[10px] w-[30px] h-[30px] font-thin pt-2 "  src="src/assets/down_arrow.svg" />
          </div>
        </div>
      </div>

      {/* Modal */}
      <SportsModal isOpen={isModalOpen} onClose={handleCloseModal} sport={{ id, image, title, description }} />

      <MenuComponent anchorEl={anchorEl} open={open} onClose={handleClose} />
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func, // Optional click handler
};

export default Card;