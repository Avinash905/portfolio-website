import React, { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import AppWrap from "../wrapper/AppWrap";
import MotionWrap from "../wrapper/MotionWrap";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "../styles/testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const query = '*[_type=="testimonials"]';
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    const brandQuery = '*[_type=="brands"]';
    client.fetch(brandQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <section className="testimonials" id="testimonials">
          <div className="testimonial__items">
            <div className="testimonial__card">
              <div className="testimonial__image">
                <img
                  src={urlFor(testimonials[currIndex].imgurl)}
                  alt={testimonials[currIndex].name}
                />
              </div>
              <div className="testimonials__content">
                <p>{testimonials[currIndex]?.feedback}</p>
                <div className="testimonials__info">
                  <h4>{testimonials[currIndex]?.name}</h4>
                  <span>{testimonials[currIndex]?.company}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials__toggle flex-center">
            <div
              className="testimonials__left"
              onClick={() => {
                currIndex <= 0
                  ? setCurrIndex(testimonials.length - 1)
                  : setCurrIndex(currIndex - 1);
              }}
            >
              <AiOutlineLeft />
            </div>
            <div
              className="testimonials__right"
              onClick={() => {
                testimonials.length - 1 <= currIndex
                  ? setCurrIndex(0)
                  : setCurrIndex(currIndex + 1);
              }}
            >
              <AiOutlineRight />
            </div>
          </div>
          <div className="testimonials__brands">
            {brands.map((brand) => {
              return (
                <img
                  src={urlFor(brand.imgUrl)}
                  alt={brand.name}
                  key={brand.name}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Testimonials), "testimonials", "primary-bg");
