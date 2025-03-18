import React, { useState } from 'react'
import "../css/AuthPopup.css"

export const AuthPopup = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="auth-popup-overlay">
            <div className="auth-popup-container">
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2 className="auth-popup-title">{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form className="auth-popup-form">
                    {!isLogin && (
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" required />
                        </div>
                    )}
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    <button type="submit" className="auth-button">{isLogin ? 'Login' : 'Sign Up'}</button>
                </form>
                <p className="toggle-text">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    )
}
