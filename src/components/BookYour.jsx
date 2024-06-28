import React from "react";

import BookYourNav from "./BookYourNav";
import SportsFilter from './SportsFilter';
import SportsGallery from "./SportsGallery";
// import BookTrial from "./BookTrial";
// import Checkout from "./Checkout";
// import Contact from "./Contact";

function BookYour() {
  return (
    <div>
      <BookYourNav/>
      <div className="flex flex-col sm:flex-row items-end pr-6 sm:pr-0 sm:items-start justify-between bg-black">
        <SportsFilter/> 
        <div className="flex-grow justify-center">
          <SportsGallery />
        </div>
      </div>
      {/* <BookTrial/>
      <Checkout/>
      <Contact/> */}
    </div>
  );
}

export default BookYour;
