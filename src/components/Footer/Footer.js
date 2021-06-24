import React from 'react';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Company = [
    { name: "Blogger Diaries", id: 1 },
    { name: "rakibur74@gmail.com", id: 2 }

]
const ourAddress = [
    { name: "Nikunja 2", id: 3 },
    { name: "Khilkhet,Dhaka", id: 4 }

]

const Footer = () => {

    return (
        <>
            <footer className="footer-area">
                <div className="container pt-5">
                    <div className="col-md-12 text-lg-start text-center">
                        <div className="row py-5">
                            <div className="col-md-4">
                                {
                                    Company.map(name => <p key={name.id}>{name.name}</p>)
                                }
                            </div>
                            <div className="col-md-4">
                                {
                                    ourAddress.map(name => <p key={name.id}>{name.name}</p>)
                                }
                            </div>
                            <div className="col-md-4 text-center">
                                <p className="text-center">Stay with us</p>
                                <ul className="social-media list-inline-item">
                                    <li className="list-inline-item"><a href="https://github.com/rakib54" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/rakibur74/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a></li>
                                    <li className="list-inline-item"><a href="https://www.facebook.com/rakibur74/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyRight text-center">
                        <p><small>Copyright © {(new Date()).getFullYear()} All Rights Reserved by Rakibur Rahman</small></p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;