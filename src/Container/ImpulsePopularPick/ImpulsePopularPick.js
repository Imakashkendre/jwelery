import React from 'react'
import "./ImpulsePopularPick.css"
import product from '../../Assets/Images/annabelle-worrall-m3DLFhmuUdA-unsplash.jpg'
import product2 from '../../Assets/Images/sabrianna-Y_bxfTa_iUA-unsplash.jpg'
import product3 from '../../Assets/Images/sandy-millar-8vaQKYnawHw-unsplash.jpg'

import ImpulseProduct from './../../Components/ImpulseProduct/ImpulseProduct';
import FilterNav from '../../Components/FilterNav/FilterNav'

const ImpulsePopularPick = () => {
    const allimpulseproduct = [
        {
            url: product,
            title: "WHITE V-NECK SHORT SLEEVE TUNIC",
            price: "$39 ",
        },
        {
            url: product2,
            title: "COLOR BLOCK POCKET TEE",
            price: "$39 ",
        }, {
            url: product3,
            title: "DOVE GRAY DOLMAN SLEEVE",
            price: "$50 ",
        },
        {
            url: product3,
            title: "DOVE GRAY DOLMAN SLEEVE",
            price: "$50 ",
        },
        {
            url: product3,
            title: "DOVE GRAY DOLMAN SLEEVE",
            price: "$50 ",
        },
        {
            url: product3,
            title: "DOVE GRAY DOLMAN SLEEVE",
            price: "$50 ",
        },
        {
            url: product3,
            title: "DOVE GRAY DOLMAN SLEEVE",
            price: "$50 ",
        }, {
            url: product3,
            title: "DOVE GRAY DOLMAN SLEEVE",
            price: "$50 ",
        },

    ]
    return (
        <>
            <div className='shop-page-heading' ><h2>Neckless</h2></div>
            <FilterNav />
            <div className='flex-div-for-all-popular-products'>
                <div className='div-for-all-popular-products'>
                    {allimpulseproduct.map((val, index) => (

                        <ImpulseProduct impulseproductdetails={val} />
                    ))}

                </div>
            </div>
        </>
    )
}

export default ImpulsePopularPick