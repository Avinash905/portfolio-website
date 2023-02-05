import React from "react";
import "../styles/navbar.css";
import image from "../assets/logo-nobg.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="navbar__logo">
        <img src={image} alt="logo" />
      </div>
      <ul className="navbar-links">
        {["home", "about", "work", "skills", "contact"].map((link) => {
          return (
            <li className="navbar-links__item" key={link}>
              <a
                href={`#${link}`}
                className="navbar-links__link navbar-link--hover"
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="navbar-menu">
        <HiMenuAlt3
          onClick={() => {
            setToggle(true);
          }}
          className="navbar-menu--open"
        />
        {toggle && (
          <motion.div
            className="navbar-menu-container"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {toggle && (
              <MdClose
                className="navbar-menu--close"
                onClick={() => {
                  setToggle(false);
                }}
              />
            )}
            <ul className="navbar-menu__links">
              {["home", "about", "work", "skills", "contact"].map((link) => {
                return (
                  <li className="navbar-links__item" key={link}>
                    <a
                      href={`#${link}`}
                      className="navbar-menu__link navbar-link--hover"
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
