import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://i.ibb.co/M962B7n/logo.png" alt="The Playground" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for events, sports and activities" />
      </div>
      <div className="location">
        Location <span className="arrow">▼</span>
      </div>
      <button className="sign-in">SIGN IN</button>
    </header>
  );
};

export default Header;