import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import "../styles/socialmedia.css";

const SocialMedia = () => (
  <div className={`social__links`}>
    <div className="twitter__link">
      <a href="https://twitter.com/avinashdunna" target="_blank">
        <BsTwitter />
      </a>
    </div>
    <div className="linkedin__link">
      <a href="https://linkedin.com/in/dunna-avinash-a1b326192" target="_blank">
        <FaLinkedinIn />
      </a>
    </div>
    <div className="instagram__link">
      <a href="https://www.instagram.com/_sa_v_i_o_ur_/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
