import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';


const PostBlogs = () => {
    const [imageUrl, setImageUrl] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const BlogData = {
            blogName: data.blogName,
            content: data.content,
            imageUrl: imageUrl,
        }
        console.log(BlogData);

        fetch('http://localhost:4000/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BlogData)
        })
            .then(res => res.json())
            .then(data => console.log(data))

            .catch(err => console.log(err))
    };



    const handleImageChanged = (event) => {
        const imageData = new FormData()
        imageData.set('key', '0d490a6f5bc01d67efe384d3ef08195a')
        imageData.append('image', event.target.files[0])

        axios.post(`https://api.imgbb.com/1/upload`, imageData)
            .then((res) => {
                setImageUrl(res.data.data.image.url)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-6 col-10 mx-auto my-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="BlogName" className="form-label">Blog Name</label>
                                <input className="form-control" placeholder="blog name" defaultValue="" {...register("blogName")} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="BlogName" className="form-label">Blog Content</label>
                                <input className="form-control" placeholder="blog content" defaultValue="" {...register("content")} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="BlogName" className="form-label">Cover Image</label>
                                <input className="form-control" type="file" onChange={handleImageChanged} />
                            </div>

                            <input className="btn btn-success" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostBlogs;