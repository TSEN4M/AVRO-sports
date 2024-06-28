import React from 'react';
import "./styles/Checkout.css"
function Checkout(){
  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <h1>Checkout</h1>
        <div className="sign-up">
          <h2>1. Sign Up</h2>
          <p>To purchase this plan and use its benefits in the future, log in to your account or sign up.</p>
          <button className="sign-up-button">SIGN UP</button>
          <button className="log-in-button">LOG IN</button>
        </div>
        <div className="payment">
          <h2>2. Payment</h2>
        </div>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="order-item">
          <p>Cobra Thai Til I Die</p>
          <p>Rs. 5,000.00</p>
        </div>
        <div className="order-details">
          <p>Duration: 1 month</p>
          <p>Session: 5 hrs/week</p>
        </div>
        <div className="coupon-code">
          <input type="text" placeholder="Enter a coupon code" />
          <button className="apply-button">APPLY</button>
        </div>
        <div className="total">
          <p>Total</p>
          <p>Rs. 5,000.00</p>
        </div>
        <button className="proceed-button">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default Checkout;
