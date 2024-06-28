import React from 'react';
import "./styles/BookTrial.css"
function BookTrial(){
  return (
    <div className="trialcontainer">
      <h1 className='head'>Get your 5 day free trial today</h1>
      <p>Sign up with your details to receive your 5 day free pass</p>
      <form className="form">
        <div className="first">
        <label className='fff'>First Name</label>
        <input type="text"  className='text'/>
        </div>
        <div className="last">
        <label className='lll'>Last Name</label>
        <input type="text" className='text'/>
        </div>
        <div className="phone">
        <label className='ppp'>Phone</label>
        <input type="tel" className='text'/>
        </div>
        <button>SIGN ME UP</button>
      </form>
    </div>
  );
};

export default BookTrial;