import React, { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import "../styles/skills.css";
import AppWrap from "../wrapper/AppWrap";
import MotionWrap from "../wrapper/MotionWrap";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type=="skills"]';
    client.fetch(query).then((data) => {
      setSkills(data);
    });
    const expQuery = '*[_type=="experiences"]';
    client.fetch(expQuery).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="skills__heading">Skills & Experience</h2>
      <div className="skills__container flex-center">
        <div className="skills__images">
          {skills.map((skill) => {
            return (
              <div className="skills__item" key={skill.name}>
                <div
                  className="skills__item--image"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
        {/* <div className="experiences">
          {experiences.reverse().map((experience) => {
            return (
              <div className="experience__item" key={experience._id}>
                <span className="experience__year">{experience.year}</span>
                <div className="works">
                  {experience.works.map((work) => {
                    return (
                      <div className="work__item" key={work.name}>
                        <h4>{work.name}</h4>
                        <span>{work.company}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(Skills), "skills", "white-bg");
