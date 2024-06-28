import React from 'react'
import Header from '../components/Header'
import AboutContainer from '../components/AboutContainer';
import JoinCardContainer from '../components/JoinCardContainer';
import section1img from '../assets/section-1.png';
import section2img from '../assets/section-2.png';


import ReviewCardContainer from '../components/ReviewCardContainer';


const Home = () => {
  return (
    <>
    <Header />
    <div className="w-full h-10 bg-gray-300">
    </div>

    <section className=" w-full h-[100vh] md:h-[100vh] lg:h-screen bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: `url(${section1img})` }}>
      <div className="relative inset-0 bg-black opacity-50"></div>
    <div className="flex flex-col justify-start items-center ">
      <div></div>
      <p className="text-3xl font-assistant md:text-5xl md:font-semibold lg:text-5xl  text-white text-center leading-none mt-32 mb-48 md:mb-56 lg:mt-0 lg:mb-28">
      Where every game begins<br /> welcome to</p>
      <h2 className="text-5xl font-poppins px-4  text-white font-bold leading-none md:text-7xl lg:text-7xl">AVRO SPORTS</h2>
    </div>
</section>


    <section className="w-full h-[100vh] lg:h-screen bg-cover bg-center flex flex-col items-center justify-around px-12 pt-10 text-white font-assistant font-medium lg:pt-24 lg:items-start " 
    style={{ backgroundImage: `url(${section2img})` }}>
    
      <div className="md:w-3/4 md:text-2xl font-semibold lg:w-1/2 "  >
        <p>Avro Sports, a pioneering startup, aims to transform India's sports industry by improving infrastructure and coaching. They prioritize sports education, promote youth health, encourage sports participation at all ages, and a introduce new sports for diversity</p>
      </div>
      <div className="block">
        <button className="md:w-52 md:px-8 bg-[#ccff00] text-black font-Assistant px-5  lg:ml-18 py-2 font-bold">LET'S PLAY</button>
      </div>
    </section>



    <section className="relative bg-[#0c0e11] py-2 text-center w-full h-auto overflow-hidden z-1 text-white font-assistant">
        <div className="">
          <h1 className="text-3xl font-poppins text-white font-bold pt-8 lg:text-5xl lg:pt-14">Why <span>AVRO SPORTS</span>?</h1>
        </div>
        <AboutContainer />
       
    </section>
    

    <section className="w-full h-auto bg-[#181818] pb-12">
    <div className="font-assistant text-center pt-10">
      <h2 className="font-poppins text-3xl py-6 text-white lg:text-5xl ">4 EASY WAYS TO JOIN</h2>
      <JoinCardContainer />
    </div>
    </section>
  


    <section className=" bg-[#000000f1] w-full h-auto pb-24">
      <div className="label-heading">
      <div className="text-wrapperheading text-white pt-16 md:pt-24 lg:pt-32 font-medium font-poppins text-5xl tracking-wide leading-normal text-center">PLAYER REVIEWS</div>
    </div>
    <ReviewCardContainer />
    

      </section>
    </>
      

  )
}

export default Home
