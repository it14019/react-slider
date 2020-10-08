import React from "react";

const Dot = ({ active }) => {
  return (
    <span
      style={{ background: active ? "#335566" : "rgba(255,255,255,0.4)" }}
      className="dot"
    ></span>
  );
};

const Dots = ({ activeIndex, handleClick, totalSlides }) => {
  return (
    <div className="dots">
      {[...Array(totalSlides).keys()].map((i) => (
        <div className="dot-container" key={i} onClick={() => handleClick(i)}>
          <Dot key={i} active={activeIndex === i} />
        </div>
      ))}
    </div>
  );
};

export default Dots;
