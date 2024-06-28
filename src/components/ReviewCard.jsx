import React from 'react'
import PropTypes from 'prop-types' 

function ReviewCard(porps) {
  return (
    <div className="review-box w-full h-auto md:w-[300px] md:h-[400px] px-12 md:px-0  py-4 lg:h-[500px] lg:w-[300px]  text-white flex flex-col justify-between items-center font-assistant ">
        <div className="my-8">
                <img className="w-full h-36 lg:h-[220px]" src={porps.image} alt="Ellipse1" />
        </div>
        <div className="para w-full h-auto md:h-[170px]  lg:h-[300px] bg-white text-black rounded-lg lg:mt-8 p-5 text-center ">
            <p>{porps.text}</p>
        </div>
    </div>
  )
}

export default ReviewCard

ReviewCard.propTypes = {
    image : PropTypes.string,
    text: PropTypes.string
  }