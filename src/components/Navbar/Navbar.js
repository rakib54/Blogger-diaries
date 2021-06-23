import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Blogger DIaries</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" exact to="/" className="nav-link " aria-current="page">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" to="/blog" className="nav-link">Blog</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" to="/contact" className="nav-link">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" to="/admin" className="nav-link">Admin</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" to="/login" className="nav-link" >Login</NavLink>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;