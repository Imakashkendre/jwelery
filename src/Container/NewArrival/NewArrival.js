import React from 'react'
import "./NewArrival.css"
import img1 from "../../Assets/Images/mahbod-akhzami-9_LXwu8bE20-unsplash.jpg"
import img2 from "../../Assets/Images/shubhi-verma-xfJYqPr2sZ0-unsplash.jpg"
import img3 from "../../Assets/Images/mahbod-akhzami-CIdwV-bTOPo-unsplash.jpg"
import img4 from "../../Assets/Images/subham-hait-fVeujn3i5ZE-unsplash.jpg"

const NewArrival = () => {
    return (
        <>
            {/* heading div for new arrival  */}
            <div className='heading-div-for-arrivals'><h2>Timeless design that told you unique story</h2>
                <div>
                    <p className='para-after-heading'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor totam adipisicing elit. Dolor totamadipis </p>
                </div>
            </div>
            <div>

                <div className='newarrivval-heading'><h2>New Arrival</h2></div>
                <div className='wid-div'>
                    <div>
                        <img src={img1} alt="" className='imgfirst-style' />
                        <p>Gold Earings</p>
                        <p>Rs.600</p>
                    </div>
                    <div>
                        <div className='div-for-sub-div'>
                            <div>
                                <img src={img4} alt="" className="subdiv-img" />
                                <p>Gold Earings</p>
                                <p>Rs.600</p>
                            </div>
                            <div>
                                <img src={img3} alt="" className="subdiv-img" />
                                <p>Gold Earings</p>
                                <p>Rs.600</p>
                            </div>
                        </div>
                        <div><img src={img2} alt="" className="second-div-of-sub-div-for-img" />
                            <p>Gold Earings</p>
                            <p>Rs.600</p></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NewArrival