import React from "react";
import "../styles/navigationdots.css";

const NavigationDots = ({ active }) => {
  return (
    <div className="navigation__dots">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => {
          return (
            <a
              className="navigation__dot"
              href={`#${item}`}
              key={item + index}
              style={active === item ? { backgroundColor: "#313bac" } : {}}
            />
          );
        }
      )}
    </div>
  );
};

export default NavigationDots;
