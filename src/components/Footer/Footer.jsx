import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            voluptatem! Porro suscipit, ratione adipisci quo maiores nisi
            provident iusto magni.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facbook icon"></img>
            <img src={assets.twitter_icon} alt="twitter icon"></img>
            <img src={assets.linkedin_icon} alt="linkedin icon"></img>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-214-879-5432</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
