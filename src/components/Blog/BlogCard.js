import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const [details, setDetails] = useState(false)

    const handleDetails = () => {
        setDetails(toggle  => !toggle)
    }

    return (
        <>
            {
                details ?
                    <div className="col-10 col-md-4 mx-auto">
                        <div class="card">
                            <img style={{ height: '280px' }} src={blog.imageUrl} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h3 class="card-title">{blog.blogName}</h3>
                                <p class="card-text">{blog.content}</p>
                                <NavLink onClick={handleDetails} to="/blog">less</NavLink>
                            </div>
                        </div>
                    </div> :
                    <div className="col-10 col-md-4 mx-auto">
                        <div class="card">
                            <img style={{ height: '280px' }} src={blog.imageUrl} class="card-img-top" alt="" />
                            <div onClick={handleDetails} class="card-body">
                                <h3 class="card-title">{blog.blogName}</h3>
                                <p class="card-text">{(blog.content).slice(0, 80) + ' ...'}</p>
                                <NavLink onClick={handleDetails} to="/blog">read full blog</NavLink>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default BlogCard;