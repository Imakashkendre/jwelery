import React, { useState } from 'react'
import "./Nav.css"
import search from '../../Assets/Images/search-interface-symbol.png'

import profile from '../../Assets/Images/user.png'
import bag from '../../Assets/Images/bag.png'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            {/* // main div flex for jwelery navbar */}
            <div className="jwelery-nav">
                <div
                    className={`nav-toggle ${isOpen && 'open'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>

                <div className="header-text-and-nav-items-for-jwelery-nav">
                    <img
                        style={{ height: '1.1em', width: '1.1em' }}
                        src={search}
                        alt=""
                        srcset=""
                    />
                    <div className="middle-content-jwelery-nav">
                        <div className="nav-logo-for-jwelery-nav">
                            <p>JEUNE</p>
                        </div>
                        {/* middle content for jwelery navbar */}
                        <div className={`nav-items-for-jwelery-nav ${isOpen && 'open'}`}>
                            <p href="/home">Home</p>
                            <p href="/about">Shop</p>
                            <p href="/service">About Us</p>
                            <p href="/contact">Contact Us</p>
                            <p href="/service">FAQ</p>

                        </div>
                    </div>
                    <div className="contains-toggle-and-icons-for-nav">
                        <div className="contains-icons-for-nav">
                            <img
                                style={{ height: '1.1em', width: '1.1em' }}
                                src={bag}
                                alt=""
                                srcset=""
                            />
                            <img
                                style={{ height: '1.1em', width: '1.1em' }}
                                src={profile}
                                alt=""
                                srcset=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
