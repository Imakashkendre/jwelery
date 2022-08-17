import React from "react";
import "./AboutUs.css";
import profileimg1 from "../../Assets/Images/profile-img-1.jpg";
import profileimg2 from "../../Assets/Images/profile-img-2.jpg";
const AboutUs = () => {
  return (
    <>
      {/* about us info for Jwelery theme */}
      {/* main div for content */}
      <div className="container-flex-for-about-us">
        {/* specific width for screen */}
        <div className="width-set-for-about-us">
          {/* first div for header */}
          <div className="header-for-about-us">
            <p>About Us</p>
          </div>
          {/* contains two images */}
          <div className="two-flex-images-for-about-us">
            <div className="first-image-about-us">
              <img src={profileimg1} alt="" srcset="" />
            </div>
            <div className="second-image-about-us">
              <img src={profileimg2} alt="" srcset="" />
            </div>
          </div>
          <div className="two-seperate-para">
            <div className="paragraph-for-about-us">
              <p>
                Reliance Jewels is a part of Reliance Retail, which is amongst
                'Top 10 Trusted Retail Brands In India' We have made a mark in
                the jewellery Retail market by offering a wide range of Gold,
                Diamond, Silver, and Platinum Jewellery collections. Reliance
                Jewels owns flagship showrooms and Shop-In-Shops and is
                successfully delivering a uniform customer experience throughout
                the nation.
              </p>
              <p>
                Reliance Jewels is a part of Reliance Retail, which is amongst
                'Top 10 Trusted Retail Brands In India' We have made a mark in
                the jewellery Retail market by offering a wide range of Gold,
                Diamond, Silver, and Platinum Jewellery collections. Reliance
                Jewels owns flagship showrooms and Shop-In-Shops and is
                successfully delivering a uniform customer experience throughout
                the nation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
