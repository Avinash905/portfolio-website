import React from "react";
import "../styles/header.css";
import { motion } from "framer-motion";
import me from "../assets/me-nobg.png";
import circle from "../assets/circle.svg";
import react from "../assets/react.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import Typewriter from "typewriter-effect";
import AppWrap from "../wrapper/AppWrap";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="header container" id="home">
      <motion.div
        className="header__info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="header__name flex-center">
          <div className="header__name--left">👋</div>
          <div className="header__name--right">
            <span>Hello, I am</span>
            <h1>
              <Typewriter
                options={{
                  strings: ["Avinash"],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                }}
              />
            </h1>
          </div>
        </div>
        <div className="header__work">
          <p>web developer</p>
          <p>programmer</p>
        </div>
      </motion.div>
      <motion.div
        className="header__pic"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.6, delayChildren: 0.75 }}
      >
        <img src={me} alt="profile" className="header__profile" />
        <motion.img
          src={circle}
          alt="circle"
          className="header__overlay-circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        className="header__circles"
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        {[node, react, python].map((ele) => {
          return (
            <div className="header__image--circle flex-center" key={ele}>
              <img src={ele} alt={`${ele}`} />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default AppWrap(Header, "home", "primary-bg");
