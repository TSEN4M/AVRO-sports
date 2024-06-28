import React from 'react'
import PropTypes from 'prop-types'



function About(props) {
  return (
    <div class="relative w-[300px] h-[450px] lg:m-10 bg-[#0c0e11] text-white m-4  border-r border-b  border-r-white border-b-white border-l-[10px] border-t-[5px] border-l-[#ccff00] border-t-[#ccff00]">


    <div className="absolute top-[-20px] left-[-20px] z-[-1] bg-[#ccff00]"></div>
      <div class="relative text-center">
          <h2 className="font-assistant text-4xl px-5 py-4  font-extrabold tracking-wide">{props.title}</h2><hr></hr>
          <p className="px-12 pt-12 pb-0 font-assistant tracking-wide text-xl leading-relaxed ">{props.paragraph}</p>
      </div>
  </div>
  )
}

export default About
About.propTypes = {
  image : PropTypes.string,
  title : PropTypes.string,
}