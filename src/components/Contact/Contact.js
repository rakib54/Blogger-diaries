import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: ""
    })

    const InputEvent = (e) => {
        const { name, value } = e.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        alert("Your Response is recorded")
        
        setData({
            fullName: "",
            phone: "",
            email: "",
            message: ""
        })

    }
    return (
        <>
            <div className="my-5">
                <h2 className="text-center">Contact Us</h2>
                <div className="container my-3">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                    <input name="fullName" value={data.fullName} onChange={InputEvent} required type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                    <input name="phone" value={data.phone} onChange={InputEvent} required type="text" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input name="email" value={data.email} onChange={InputEvent} required type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea name="message" value={data.message} onChange={InputEvent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;