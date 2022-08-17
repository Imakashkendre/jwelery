import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
    <div className="About-Us-in-jwellery-page">
        <h1>About  Us</h1>
        
    </div>
    <div className="border-of-two-image-wearing-jewellery">
    <div className="border-of-image-in-about-us">
           <img className="image-of-women-wearing-jewellery" src="data:image/jpeg;base64,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"/>
           
        </div>

        <div className="border-of-image-in-about-us">
           <img className="image-of-women-wearing-jewellery" src="data:image/jpeg;base64,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"/>
           
        </div>
        </div>
        <div className="We-always-find-ways-to-show-our-affection-to-our-loved-ones">
        <p>We always find ways to show our affection to our loved ones. 
         Making a special moment even<br/> more special needs a unique  gift. 
        Whatever may be the occasion, a birthday,an engagement,<br/> a marriage,
         an anniversary or any other special day,a gift should  bring a smile on your  partner's  <br/> face.
         And what makes them smile the most? I am sure it is jewellery.
          <div className="jewellery-helps-the-beauty-to-flourish-and-makes-your-partner-glow"><p> Jewellery helps the beauty to  flourish and makes your partner glow.
         In this fast moving world <br/> we don’t have enough time to keep hoping around from one 
showroom  to another showroom<br/> to find a suitable jewellery for a  occasion.</p></div>
{/* <br/> You neither get the benefit of the entire range as it won’t be feasible.<br/>
 Also you may end up paying higher amount for product that does not <br/> fully suits you. */}

</p>
        </div>
    </div>
  )
}

export default AboutUs