import React from "react";
import '@/components/modules/MainPage/Header/Advantage/Advantage.scss';

const Advantage = () => {
  return (
    <div className="parentContainer">
      <div className="advantage">
        <div className="advantage--item">
          <div className="advantage--item--description">
            <div className="advantage-item--logo">
              <img src="/images/advantage-item--logo1.svg" alt="" />
            </div>
            <h2 className="advantage-item--header">Find Your Dream Home</h2>
          </div>
          <div className="advantage-item--arrow">
            <img src="/images/advantage-item--arrow.png" alt="" />
          </div>
        </div>
        <div className="advantage--item">
          <div className="advantage--item--description">
            <div className="advantage-item--logo">
              <img src="/images/advantage-item--logo2.svg" alt="" />
            </div>
            <h2 className="advantage-item--header">Unlock Property Value</h2>
          </div>
          <div className="advantage-item--arrow">
            <img src="/images/advantage-item--arrow.png" alt="" />
          </div>
        </div>
        <div className="advantage--item">
          <div className="advantage--item--description">
            <div className="advantage-item--logo">
              <img src="/images/advantage-item--logo3.svg" alt="" />
            </div>
            <h2 className="advantage-item--header">Effortless Property Management</h2>
          </div>
          <div className="advantage-item--arrow">
            <img src="/images/advantage-item--arrow.png" alt="" />
          </div>
        </div>
        <div className="advantage--item">
          <div className="advantage--item--description">
            <div className="advantage-item--logo">
              <img src="/images/advantage-item--logo4.svg" alt="" />
            </div>
            <h2 className="advantage-item--header">Smart Investments, Informed Decisions</h2>
          </div>
          <div className="advantage-item--arrow">
            <img src="/images/advantage-item--arrow.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
