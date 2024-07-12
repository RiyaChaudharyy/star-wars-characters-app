
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SlSocialYoutube } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import './Footer.css'; // Import your CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <div className="social-icons-container">
                    <a href="https://facebook.com"><FaFacebook /></a>
                    <a href="https://twitter.com"><FaTwitter /></a>
                    <a href="https://instagram.com"><FaInstagram /></a>
                    <a href="https://facebook.com"><SlSocialYoutube /></a>
                    <a href="https://twitter.com"><TiSocialLinkedin /></a>
                    
                </div>
            </div>
            <hr className="divider" />
            <div className="copyright">
                &copy; 2024 Star Wars Characters. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;