import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BlogsData = () => {
    const [blogData, setBlogData] = useState([])
    const [blogDelete, setBlogDelete] = useState(false)

    useEffect(() => {
        fetch('http://localhost:4000/allBlog')
            .then(res => res.json())
            .then(data => {
                setBlogData(data)
            })
    }, [])


    const handleDelete = (id) => {
        fetch(`http://localhost:4000/deleteBlogs/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setBlogDelete(true)
                }

            })
    }

    return (
        <>
            <section>
                <div className="container-fluid row font-link">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10 d-flex justify-content-center p-5">

                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="text-secondary" scope="col">Title</th>
                                    <th className="text-secondary" scope="col">Blog Content</th>
                                    <th className="text-secondary" scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    blogData.map(blog =>
                                        <tr key={blog._id}>

                                            <td className="text-color">{blog.blogName}</td>
                                            <td>{(blog.content).slice(0, 20) + ' ...'}</td>
                                            <td><button onClick={() => handleDelete(blog._id)} className="btn btn-danger btn-sm">Delete</button></td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
            </section>
        </>
    );
};

export default BlogsData;