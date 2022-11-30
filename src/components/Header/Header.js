import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import arrow from '../../assets/images/whiteArrow.png';
import './Header.scss';

 
const Header = () => {

  return (
      <div>
          {/* Top header */}
          <header className="header py-2 bg-gray-3">
              <div className="container">
                  <div className="d-flex justify-content-between align-items-center gap-3">
                      <div className="grid-item d-xl-block">
                          <div className="globalSearch">
                              <input type="search" className="globalSearchInput custom-form-control border-0 bg-transparent ff-inter" placeholder="Search here.." />
                          </div>
                      </div>
                      <div className="grid-item text-xl-center d-flex align-items-center gap-4">
                          <p className="mb-0 ff-inter text-dark3 fs-14 fw-medium">Propose a user to Join Global Life Community</p>
                          <Link to="/" className="top-header-btn">
                              propose{" "}
                              <span className="ms-1 pb-1">
                                  <img src={arrow} alt="" />
                              </span>
                          </Link>
                      </div>
                      <div className="grid-item d-flex align-items-center justify-content-center justify-content-sm-end gap-3 ">
                          <Link to="/login" className="fs-12 fw-semiBold text-clr-dark-1 ff-inter text-uppercase text-decoration-none">
                              Login
                          </Link>
                          <Link to="/signup" className="fs-12 fw-semiBold text-clr-dark-1 ff-inter text-uppercase text-decoration-none">
                              Apply
                          </Link>
                      </div>
                  </div>
              </div>
          </header>

          {/* / Top header */}

          {/* Header  */}
          <div className="navigation py-3 py-md-4 bg-white">
              <div className="container">
                  <div className="nav-grid-container d-flex d-md-block align-items-center justify-content-between gap-3">
                      <button className="btn btn-menu-toggle btn-default d-flex d-md-none align-items-center justify-content-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ff5f50" className="bi bi-list" viewBox="0 0 16 16">
                              <path
                                  fillRule="evenodd"
                                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                              />
                          </svg>
                      </button>
                      <a href="index.html" className="brand-logo logo is-active-mobile d-md-none">
                          <img src={Logo} alt="img" className="img-fluid" />
                      </a>
                      <div className="navbar px-3 py-4 py-md-0 px-md-0">
                          <div className="navbar-header d-flex d-md-none align-items-center justify-content-between mb-4">
                              <NavLink to="/" className="brand-logo logo is-active-mobile d-md-none text-decoration-none">
                                  <img src={Logo} alt="img" className="img-fluid" />
                              </NavLink>
                              <button className="btn btn-menu-toggle btn-default d-flex d-md-none align-items-center justify-content-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ff5f50" className="bi bi-x" viewBox="0 0 16 16">
                                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                  </svg>
                              </button>
                          </div>
                          <ul id="menu" className="d-md-flex align-items-center justify-content-between m-0 p-0 gap-5 w-100">
                              <li>
                                  <a href="#" className=" ff-inter navLink">
                                      What's happening?
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="menuLink ff-inter navLink">
                                      Recommendations
                                  </a>
                              </li>
                              <li className="d-none d-md-block">
                                  <NavLink to="/" className="logo text-decoration-none">
                                      <img src={Logo} alt="img" className="img-fluid" />
                                  </NavLink>
                              </li>
                              <li>
                                  <a href="#" className="menuLink ff-inter navLink">
                                      Trading Post
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="menuLink ff-inter navLink">
                                      Challenges
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          {/* / Header  */}

          {/* <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/feature">Feature</Link>
        </nav> */}
      </div>
  );
}

export default Header