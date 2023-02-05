import React, { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import "../styles/work.css";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import MotionWrap from "../wrapper/MotionWrap";
import AppWrap from "../wrapper/AppWrap";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  const [activeTag, setActiveTag] = useState("All");
  const [tags, setTags] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type=="works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
      const allTags = data.map((ele) => {
        return ele.tags[0];
      });
      const newAllTags = new Set([...allTags]);
      setTags(["All", ...newAllTags]);
    });
  }, []);

  const tagClick = (tag) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setActiveTag(tag);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (tag === "All") {
        return setFilterWorks(works);
      }
      setFilterWorks(
        works.filter((work) => {
          return work.tags[0] === tag;
        })
      );
    }, 500);
  };

  return (
    <section className="about container work" id="work">
      <h2 className="about__heading">
        My Creative <span>Portfolio</span>
        Section
      </h2>
      <div className="work__tags">
        {tags.map((tag, i) => {
          return (
            <button
              className={`tag__btn ${activeTag === tag ? "tag--active" : null}`}
              key={tag + i}
              onClick={() => {
                tagClick(tag);
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <motion.div
        className="about__items flex-center"
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {filterWorks.map((work) => {
          return (
            <div className="work__card" key={work.title}>
              <div className="card__img">
                <img src={urlFor(work.imgUrl)} alt={work.title} />
                <motion.div
                  className="card__links flex-center"
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="card__eye"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="card__github"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <span>{work.tags[0]}</span>
              <h4>{work.title}</h4>
              <p>{work.description}</p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default AppWrap(MotionWrap(Work), "work", "primary-bg");
