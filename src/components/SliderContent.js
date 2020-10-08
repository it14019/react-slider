import React from "react";

const SliderContent = ({
  width,
  translate,
  transition,
  children,
  onTouchStart,
  onTouchMove,
  onMouseDown,
  onMouseUp,
}) => {
  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={{
        height: "100%",
        width: width,
        display: "flex",
        transform: `translate(${-translate}px)`,
        transition: `transform ${transition}s ease-out`,
      }}
    >
      {children}
    </div>
  );
};

export default SliderContent;
