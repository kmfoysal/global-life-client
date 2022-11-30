import React from 'react'
import './registration.scss';
import Logo from '../../assets/images/logo-global-life.svg';
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>

        <div className="login-wrapper d-flex align-items-center justify-content-center">
            <div className="login-section">
                <div className="container">
                    <div className="row">
                        <div className="bg-white p-36 login-form login-form-wrapper">
                            <div className="text-center">
                                <div className="field-wrapper">
                                    <img src={ Logo } alt="logo" className="img-fluid text-center" />
                                    <h4 className="mt-4 text-clr-dark-1 fs-24 lh-34">
                                        The Private Members Network for International Families
                                    </h4>

                                    <form>
                                        <div className="form-field-area ff-playfair">

                                            <div className="animate-label text-uppercase fs-12 fw-semiBold ff-inter text-start mb-4">
                                                <input type="text" id="text" className="fw-semiBold" required/>
                                                <label for="text" > Name </label>
                                                <line></line>
                                            </div>

                                            <div className="animate-label text-uppercase fs-12 fw-semiBold ff-inter text-start mb-4">
                                                <input type="email" id="email" className="fw-semiBold" required/>
                                                <label for="email" > Email </label>
                                                <line></line>
                                            </div>

                                            <div className="animate-label text-uppercase fs-12 fw-semiBold ff-inter text-start mb-4">
                                                <input type="text" id="username" className="fw-semiBold" required/>
                                                <label for="username" > Username </label>
                                                <line></line>
                                            </div>
                                        
                                            <div id="show_hide_password" className="input-box position-relative animate-label text-uppercase fs-12 fw-semiBold ff-inter text-start pt-3">
                                                <input type="password" id="password-field" className="text-uppercase fs-12 fw-semiBold" name="password" required/>
                                                <label for="password-field"> Password </label>
                                                <line></line>
        
                                                <div className="pass-show-hide position-absolute end-0 me-3">
                                                    <Link to="#">
                                                        <i toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" aria-hidden="true"></i>
                                                    </Link>
                                                </div>
                                            </div>

                                            
                                        </div>
        
                                        <button type="submit" className="fill-color-btn signIn-btn text-center w-100 bg-green text-white text-uppercase ff-inter fs-12 fw-semiBold ltr-spacing-07">Registration</button>
                                        
                                    </form>

                                    <p className="ff-inter text-clr-dark-3 fs-14 lh-22 mt-4">
                                        Already have an account? <Link to="/login" className='signup-btn fw-semiBold'>Login</Link>
                                    </p>
                                    
                                    <a href="mailto:applications@globallife.co" className="text-clr-egyptian-green ff-inter text-decoration-none hover-color fs-14 lh-22 fw-medium">applications@globallife.co</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Registration