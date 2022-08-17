import React from 'react'
import "./ContactUs.css"
import contactimg from "../../Assets/Images/andres-vera-202NAwjisYA-unsplash.jpg"
import { InputComponents } from '../../Components/Inputs/input'

const ContactUs = () => {
    return (
        <>
            <div className='flex-div-for-contact'>
                <div>
                    <img src={contactimg} alt="" className='contactimage-styl' />
                </div>
                <div className='contact-us-div'>
                    <h2 className='contact-title'>Contact Us</h2>
                    <div className='name-inut'>
                        <InputComponents label="Name" />
                    </div>
                    <div className='name-inut'>
                        <InputComponents label="Email" /></div>
                    <div className='name-inut'>
                        <InputComponents label="Mobile" /></div>
                    <div className='name-inut'>
                        <InputComponents label="Address" /></div>
                    <div className='btn-div'>
                        <button className='submit-btn'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs