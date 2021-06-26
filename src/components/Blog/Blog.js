import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    const [blogs, setBlog] = useState([])

    useEffect(() => {
        fetch('https://sheltered-journey-19349.herokuapp.com/allBlog')
        .then(res => res.json())
        .then(data => {
            setBlog(data)
        })
    }, [])

    return (
        <>
            <div className="my-5">
                <h2 className="text-center">Read Our Blogs</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                    {
                            blogs.length ?
                                <div className="row gy-5">
                                    {
                                        blogs.map((blog) => <BlogCard blog={blog} key={blog._id} />)
                                    }
                                </div> :
                                <div className="text-center">
                                    <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;