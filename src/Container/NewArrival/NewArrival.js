import React from 'react'
import "./NewArrival.css"
import img1 from "../../Assets/Images/mahbod-akhzami-9_LXwu8bE20-unsplash.jpg"
import img2 from "../../Assets/Images/shubhi-verma-xfJYqPr2sZ0-unsplash.jpg"
import img3 from "../../Assets/Images/mahbod-akhzami-CIdwV-bTOPo-unsplash.jpg"
import img4 from "../../Assets/Images/subham-hait-fVeujn3i5ZE-unsplash.jpg"

const NewArrival = () => {
    return (
        <>
            <div className='heading-div-for-arrivals'><h2>Timeless design that told you unique story</h2></div>
            <div>
                <div className='wid-div'>
                    <div>
                        <img src={img1} alt="" className='imgfirst-style' />
                    </div>
                    <div>
                        <div className='div-for-sub-div'>
                            <div>
                                <img src={img4} alt="" style={{ height: "290px", width: "300px" }} />
                            </div>
                            <div>
                                <img src={img3} alt="" style={{ height: "290px", width: "300px" }} />
                            </div>
                        </div>
                        <div><img src={img2} alt="" style={{ height: "300px", width: "620px" }} /></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NewArrival