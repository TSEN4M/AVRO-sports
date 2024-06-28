import React from 'react'
import PropTypes from 'prop-types' 

function JoinCard(props) {
  return (
    <div class="relative w-[300px] h-auto lg:h-[400px] my-2 mx-2 bg-[#181818] border text-white border-white flex ">
        <div class="join-section-item flex flex-col justify-start items-center">
            <div class="join-section-item-icon flex-shrink-0 py-4 lg:py-8 " >
           {props.icon}
            </div>
            <div class="">
            <h3 class="join-section-item-title text-2xl font-bold">{props.title}</h3>
            <p class="join-section-item-text text-white p-4 lg:px-6 text-lg">
                {props.text}
            </p>
            </div>
        </div>
    </div>
    
  )
}

export default JoinCard

JoinCard.propTypes = {
    icon : PropTypes.string,
    title : PropTypes.string,
    text: PropTypes.string
  }