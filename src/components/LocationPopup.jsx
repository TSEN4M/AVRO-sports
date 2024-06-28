import React, { useState } from 'react';

const popularCities = [
  { value: 'delhi', name: 'Delhi - NCR' },
  { value: 'mumbai', name: 'Mumbai' },
  { value: 'bengaluru', name: 'Bengaluru' },
  { value: 'chandigarh', name: 'Chandigarh' },
  { value: 'pune', name: 'Pune' },
  { value: 'hyderabad', name: 'Hyderabad' },
  { value: 'ahmedabad', name: 'Ahmedabad' },
];

function LocationPopup() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };


function handleDetectLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
      },
      (error) => {
        console.error('Error detecting location:', error);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}


  return (
    <div className="p-10 bg-[#479F78] rounded ">
      <div className=" flex items-center mb-4 text-center">
        <input
        className="w-full p-4 bg-[#387f60] border text-white border-gray-300  rounded-full mr-2n "
          type="text"
          placeholder="Search for your city"
          
        />
        
      </div>
      <div className='flex justify-center'>
        <button
        onClick={handleDetectLocation}
          className="flex items-center mb-4 text-white bg-[#387f60] hover:bg-bg-[#387f60]-600 px-4 py-2 rounded">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13H9v4H5v2h4v4h2v-4h4V9h-4V5z"
              clipRule="evenodd"
            />
          </svg>
          Detect My Location
        </button>
      </div>

      <h2 className="text-lg font-semibold mb-4 text-center text-white">Popular Cities</h2>
      <div className="flex justify-center flex-wrap gap-4 mb-4">
        {popularCities.map((city) => (
          <button
            key={city.value}
            onClick={() => handleCitySelect(city)}
            className={`p-3 border w-full sm:w-1/2 md:w-1/4 cursor-pointer ${
              selectedCity === city
                ? 'bg-white text-black'
                : 'text-white border-gray-300'
            }`}
          >
            {city.name}
          </button>
        ))}
      </div>
      <div className='flex justify-center'>
      <button
        onClick={() => setSelectedCity(null)}
        className="p-2 bg-[#479F78] text-white rounded"
      >
        View all cities
      </button>
      </div>
    </div>
  );
}

export default LocationPopup;
