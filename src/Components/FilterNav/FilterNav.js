import React, { useState } from "react";
import "./FilterNav.css";

const FilterNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* // main div flex for Filter navbar */}
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
              <p href="/home">Filter:</p>
              <p href="/about">Avalibility</p>
              <p href="/service">Price</p>
            </div>
            <div className={`nav-items-for-Filter-nav`}>
              <p href="/contact">Sort By:</p>
              <p href="/service">Featured</p>
              <p href="/service">12 Products</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterNav;
