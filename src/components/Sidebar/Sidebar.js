import { faCalendar, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="sidebar d-flex justify-content-between col-md-2 py-5 px-4" style={{ height: '100vh' }}>

                    <ul className="list-unstyled">
                        <li>
                            <Link to="/postBlogs">
                                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon><span>Post a blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/allBlogs">
                                <FontAwesomeIcon icon={faList}></FontAwesomeIcon><span>All blogs</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10 p-3">
                    <h3 className="text-center">Welcome Admin</h3>
                </div>
            </div>
        </>
    );
};

export default Sidebar;