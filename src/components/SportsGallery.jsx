import React from 'react';
import Card from '../components/Card.jsx';
import SportsData from '../components/SportsData.jsx' // Adjust the path as per your project structure

function SportsGallery() {
  return (
    <>
      {/* Team Sports */}
      <h1 className="text-white text-5xl font-poppins font-bold text-center mb-6">TEAM SPORT</h1>
      <div className="flex flex-row justify-center self-start items-center flex-wrap md:gap-[10px] lg:gap-[20px] max-w-[1200px] m-0 py-0 px-auto">
        {SportsData.teamSports.map((sport) => (
          <Card key={sport.id} image={sport.image} title={sport.title} description={sport.description} />
        ))}
      </div>

      {/* Individual Sports */}
      <h1 className="text-white text-5xl font-poppins font-bold text-center mb-6">INDIVIDUAL SPORT</h1>
      <div className="flex flex-row justify-center self-start items-center flex-wrap md:gap-[10px] lg:gap-[20px] max-w-[1200px] m-0 py-0 px-auto">
        {SportsData.individualSports.map((sport) => (
          <Card key={sport.id} image={sport.image} title={sport.title} description={sport.description} />
        ))}
      </div>

      {/* Combat Sports */}
      <h1 className="text-white text-5xl font-poppins font-bold text-center mb-6">COMBAT SPORT</h1>
      <div className="flex flex-row justify-center self-start items-center flex-wrap md:gap-[10px] lg:gap-[20px] max-w-[1200px] m-0 py-0 px-auto">
        {SportsData.combatSports.map((sport) => (
          <Card key={sport.id} image={sport.image} title={sport.title} description={sport.description} />
        ))}
      </div>

      {/* Water Sports */}
      <h1 className="text-white text-5xl font-poppins font-bold text-center mb-6">WATER SPORTS</h1>
      <div className="flex flex-row justify-center self-start items-center flex-wrap md:gap-[10px] lg:gap-[20px] max-w-[1200px] m-0 py-0 px-auto">
        {SportsData.waterSports.map((sport) => (
          <Card key={sport.id} image={sport.image} title={sport.title} description={sport.description} />
        ))}
      </div>

      {/* Avro Special Sports */}
      <h1 className="text-white text-5xl font-poppins font-bold text-center mb-6">AVRO SPECIAL SPORTS</h1>
      <div className="flex flex-row justify-center self-start items-center flex-wrap md:gap-[10px] lg:gap-[20px] max-w-[1200px] m-0 py-0 px-auto">
        {SportsData.avroSpecialSports.map((sport) => (
          <Card key={sport.id} image={sport.image} title={sport.title} description={sport.description} />
        ))}
      </div>

      {/* Endurance Sports */}
      <h1 className="text-white text-5xl font-poppins font-bold text-center mb-6">ENDURANCE</h1>
      <div className="flex flex-row justify-center self-start items-center flex-wrap md:gap-[10px] lg:gap-[20px] max-w-[1200px] m-0 py-0 px-auto">
        {SportsData.endurance.map((sport) => (
          <Card key={sport.id} image={sport.image} title={sport.title} description={sport.description} />
        ))}
      </div>

      {/* Others */}
      <h1 className="text-white text-5xl font-poppins font-bold text-center mb-6">OTHERS</h1>
      <div className="flex flex-row justify-center self-start items-center flex-wrap md:gap-[10px] lg:gap-[20px] max-w-[1200px] m-0 py-0 px-auto">
        {SportsData.others.map((sport) => (
          <Card key={sport.id} image={sport.image} title={sport.title} description={sport.description} />
        ))}
      </div>
    </>
  );
}

export default SportsGallery;
