import React from 'react';

const Map = () => {
  return (
    <div className="mt-6 h-40 w-full rounded-lg mb-10 overflow-hidden" id="mentor">
    <h1 className='text-white text-xl mb-1 text-center'> LOCATION </h1>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Kalavati%20Vivah%20Bhawan%2C%20Akharaghat%2C%20Muzaffarpur&zoom=10&maptype=roadmap"
        width="100%"
        height="100%"
        style={{ borderRadius: "8px",border:"5px solid #e9ba0b" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
