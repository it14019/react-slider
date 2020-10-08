import React from "react";
import Next from "../icons/next.svg";
import Previous from "../icons/previous.svg";

const Arrow = ({ direction, handleClick }) => {
  return (
    <div
      className="arrow"
      onClick={handleClick}
      style={direction === "right" ? { right: "5px" } : { left: "5px" }}
    >
      {direction === "right" ? (
        <Next width={15} height={15} />
      ) : (
        <Previous width={15} height={15} />
      )}
    </div>
  );
};

export default Arrow;
