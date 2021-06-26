import React from 'react';
import { NavLink } from 'react-router-dom';
import blog1 from '../../images/Blog1.jpg'

const Header = () => {
    return (
        <>
           <section id="header" className="d-flex align-items-center">
           <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                               <h1>Write Your Thoughts here!</h1>
                               <h3 className="my-3 text-secondary">This is one of the biggest community for bloggers !!</h3>
                               <div className="mt-3">
                                   <NavLink to="/contact" className="btn btn-header">Contact Us</NavLink>
                               </div>
                            </div>
                            <div className="col-md-6 order-1 order-lg-2">
                                <img src={blog1} className="container-fluid header-img animated" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </section>
        </>
    );
};

export default Header;