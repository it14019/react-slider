let desktopX = null;
let desktopY = null;

export const startTouchDesktop = ({ e }) => {
  desktopX = e.clientX;
  desktopY = e.clientY;
};

export const moveTouchDesktop = ({ e, nextSlide, prevSlide }) => {
  let currentDesktopX = e.clientX;
  let currentDesktopY = e.clientY;

  let movementDesktopX = desktopX - currentDesktopX;
  let movementDesktopY = desktopY - currentDesktopY;

  if (Math.abs(movementDesktopX) > Math.abs(movementDesktopY)) {
    if (movementDesktopX > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
  desktopX = null;
  desktopY = null;
};

let mobileX = null;
let mobileY = null;

export const startTouchMobile = ({ e }) => {
  mobileX = e.touches[0].clientX;
  mobileY = e.touches[0].clientY;
};

export const moveTouchMobile = ({ e, nextSlide, prevSlide }) => {
  let currentMobileX = e.touches[0].clientX;
  let currentMobileY = e.touches[0].clientY;

  let movementMobileX = mobileX - currentMobileX;
  let movementMobileY = mobileY - currentMobileY;

  if (Math.abs(movementMobileX) > Math.abs(movementMobileY)) {
    if (movementMobileX > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
  mobileX = null;
  mobileY = null;
};
