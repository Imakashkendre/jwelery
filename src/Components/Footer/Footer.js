import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="div-of-the-hr">
        <hr />
      </div>
      <div className="four-icons-of-the-footer">
        <img
          className="icon-of-the-facebook-in-footer"
          src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png"
        />

        <img
          className="icon-of-the-facebook-in-footer"
          src="https://cdn-icons-png.flaticon.com/128/1400/1400829.png"
        />

        <img
          className="icon-of-the-facebook-in-footer"
          src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
        />

        <img
          className="icon-of-the-facebook-in-footer"
          src="https://cdn-icons-png.flaticon.com/128/37/37929.png"
        />
      </div>
      <div className="Terms-and-Conditions-Privacy-Policy">
        <p>Terms & Conditions Privacy Policy </p>
      </div>
    </div>
  );
}

export default Footer;
