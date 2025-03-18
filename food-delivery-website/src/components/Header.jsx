import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../css/Header.css'

export const Header = ({ onLoginClick }) => {
    return (
        <header>
            <div className='offerandcartbox' name="offers-cart">
                <div className='offer'>
                    <span>🌟Get 5% Off your first order,</span>
                    <a href='/' style={{ color: "#FC8A06", textDecorationLine: "underline" }}>Promo: ORDER5</a>
                </div>
                <div className='location'>
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>Regent Street, A4, A4201, London</span>
                    <a href='/' style={{ color: "#FC8A06", textDecorationLine: "underline" }}>Change Location</a>
                </div>

                <div className='cart'>
                    <div className="cart-section">
                        <i className="bi bi-cart4"></i>
                    </div>
                    <div className="cart-info-section">
                        <span>23 Items</span>
                    </div>
                    <div className="price-info-section">
                        <span>GBP 79.89</span>
                    </div>
                    <div className="checkout-info-section">
                        <i className="bi bi-arrow-down-circle-fill"></i>
                    </div>
                </div>
            </div>
            <div className='logoandtabs' name="logo-tabs">
                <div className='logo-section'>
                    <Link to="/" >
                        <img src="./src/asset/logo.png" alt='logo' />
                    </Link>
                </div>
                <div className='tabs'>
                    <NavLink to="/" className="navbutton" end>Home</NavLink>
                    <NavLink to="/Offers" className="navbutton">Special Offers</NavLink>
                    <NavLink to="/Restaurants" className="navbutton">Restaurants</NavLink>
                    <NavLink to="/TrackOrder" className="navbutton">Track Order</NavLink>
                </div>
                <div className='loginandsignup'>
                    <i className="bi bi-person-circle"></i>
                    <button className="loginbutton" onClick={onLoginClick}>Login/Signup</button>
                </div>
            </div>
        </header>
    )
}
