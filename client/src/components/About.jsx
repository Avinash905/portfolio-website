import React, { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import "../styles/about.css";
import AppWrap from "../wrapper/AppWrap";
import MotionWrap from "../wrapper/MotionWrap";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <section className="about container" id="about">
      <h2 className="about__heading">
        I Know That <span>Good Website</span>
        <br />
        Means <span>Good Business</span>
      </h2>
      <div className="about__items flex-center">
        {abouts.map((about) => {
          return (
            <div className="about__card" key={about.title}>
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h4>{about.title}</h4>
              <p>{about.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(About), "about", "white-bg");
