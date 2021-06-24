import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase.config';
import { useHistory } from 'react-router-dom'

const Login = () => {

    const [isSignUp, setIsSignup] = useState(false)
    const [passwordCorrect, setPasswordCorrect] = useState(true)
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleCreateUser = () => {
        if (user.password === user.confirmPassword) {
            setPasswordCorrect(true)
            auth.createUserWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    result.user.updateProfile({
                        displayName: user.fullName
                        
                    })
                    history.push('/')
                })
                .catch(err => console.log(err))
        }
        else {
            setPasswordCorrect(false)
        }
    }

    const handleSignIn = () => {
        auth.signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const user = res.user
                console.log(user);
                setPasswordCorrect(true)
                history.push('/')
                
            })
            
            .catch(err => {
                setPasswordCorrect(false)
                console.log(err);
            })
    }
    

    const SwitchMode = () => {
        setIsSignup(toggle => !toggle)
    }

    return (
        <>
            <div className="my-5">
                {
                    isSignUp ? <h3 className="text-center">Register</h3> :
                        <h3 className="text-center">Login</h3>
                }
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-4 mx-auto">
                        <form onSubmit={handleSubmit}>
                            {
                                isSignUp &&
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">FullName</label>
                                    <input name="fullName" value={user.fullName} onChange={handleChange} type="text" className="form-control" required placeholder="Your Name" />
                                </div>
                            }
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label">Email</label>
                                <input name="email" value={user.email} onChange={handleChange} type="email" className="form-control" required placeholder="Your Email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label">Password</label>
                                <input name="password" value={user.password} onChange={handleChange} type="password" className="form-control" required placeholder="Password" />
                                <p style={{ color: 'red' }}>{passwordCorrect ? '' : 'Password or email address is not valid!! try again!'}</p>
                            </div>
                            {
                                isSignUp &&
                                <div className="mb-3">
                                    <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                                    <input name="confirmPassword" value={user.confirmPassword} onChange={handleChange} type="password" className="form-control" required placeholder="Confirm Password" />
                                    <p style={{ color: 'red' }}>{passwordCorrect ? '' : 'Password does not match!! try again!'}</p>
                                </div>
                            }
                            <div className=" col-12 d-flex justify-content-between align-items-center">
                                {
                                    isSignUp ?
                                        <button onClick={handleCreateUser} className="btn btn-primary" type="submit">Resister</button> :
                                        <button onClick={handleSignIn} className="btn btn-success" type="submit">Login</button>
                                }
                                <Link onClick={SwitchMode}>{isSignUp ? 'already have an account? login' : "don't have account? signup"}</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;