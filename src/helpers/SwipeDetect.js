let initialXdesktop = null;
let initialYdesktop = null;

export const startTouchDesktop = ({ e }) => {
  initialXdesktop = e.clientX;
  initialYdesktop = e.clientY;
};

export const moveTouchDesktop = ({ e, nextSlide, prevSlide }) => {
  let currentXdesktop = e.clientX;
  let currentYdesktop = e.clientY;

  let diffXmove = initialXdesktop - currentXdesktop;
  let diffYmove = initialYdesktop - currentYdesktop;

  if (Math.abs(diffXmove) > Math.abs(diffYmove)) {
    if (diffXmove > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
  initialXdesktop = null;
  initialYdesktop = null;
};

let initialX = null;
let initialY = null;

export const startTouchMobile = ({ e }) => {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};

export const moveTouchMobile = ({ e, nextSlide, prevSlide }) => {
  let currentX = e.touches[0].clientX;
  let currentY = e.touches[0].clientY;

  let diffX = initialX - currentX;
  let diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
  initialX = null;
  initialY = null;
};
