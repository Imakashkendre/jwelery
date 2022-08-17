import React, { useState } from "react";
import "./FilterNav.css";

const FilterNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* // main div flex for jwelery navbar */}
      <div className="flex-container-main">
        <div className="width-for-filter-Nav">
          <div className="sub-middle-content-for-filter-nav">
            <div className="Filter-nav">
              <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="bar"></div>
              </div>
            </div>
            <div className={`nav-items-for-Filter-nav ${isOpen && "open"}`}>
              <p href="/home">Home</p>
              <p href="/about">Shop</p>
              <p href="/service">About Us</p>
            </div>
            <div className={`nav-items-for-Filter-nav`}>
              <p href="/contact">Contact Us</p>
              <p href="/service">FAQ</p>
              <p href="/service">FAQ-2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterNav;
