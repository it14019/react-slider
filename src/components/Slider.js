import React, { useState, useRef, useEffect } from "react";
import Arrow from "./Arrow";
import Dots from "./Dots";
import Slide from "./Slide";
import SliderContent from "./SliderContent";
import {
  startTouchMobile,
  moveTouchMobile,
  startTouchDesktop,
  moveTouchDesktop,
} from "../helpers/SwipeDetect";

const Slider = (props) => {
  const [state, setState] = useState({
    /*
    activeIndex - keeps track on which slide is active/selected,
    translate - will translate slides left or right,
    transition - smooth transition between slides
    */
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  let totalSlides = props.totalSlides;

  const getWidth = () => window.innerWidth;

  //handle browser resizes
  const handleResize = () => {
    setState({ ...state, translate: activeIndex * getWidth() });
    console.log(getWidth());
  };

  const resizeRef = useRef();

  useEffect(() => {
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const resize = () => {
      resizeRef.current();
    };

    const onResize = window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const nextSlide = () => {
    //checks if the last slide. if yes, go to first slide
    if (activeIndex === totalSlides - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }
    //otherwise, go to next slide
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    //checks if the first slide. if yes, go to last slide
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (totalSlides - 1) * getWidth(),
        activeIndex: totalSlides - 1,
      });
    }
    //otherwise, go to previous slide
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  const goToSlide = (e) => {
    setState({
      ...state,
      activeIndex: e,
      translate: e * getWidth(),
    });
  };

  return (
    <div className="slider">
      <SliderContent
        width={getWidth() * totalSlides}
        translate={translate}
        transition={transition}
        onTouchStart={(e) => startTouchMobile({ e })}
        onTouchMove={(e) => moveTouchMobile({ e, nextSlide, prevSlide })}
        onMouseDown={(e) => startTouchDesktop({ e })}
        onMouseUp={(e) => moveTouchDesktop({ e, nextSlide, prevSlide })}
      >
        <Slide>
          <img
            className="background-filter"
            src="https://images.unsplash.com/photo-1565800489013-c64859d0c2d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
          <p className="title title-position">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <p className="text slide-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </Slide>

        <Slide>
          <div className="only-text-background">
            <h1 className="only-text">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
              consectetur adipisci
            </h1>
          </div>
        </Slide>

        <Slide>
          <div className="container-slide-1">
            <div className="left-side-slide-1">
              <p className="image-slide-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div className="right-side-slide-1">
              <img
                className="right-side-slide-1-image"
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              />
            </div>
          </div>
        </Slide>

        <Slide>
          <div className="container-slide-2">
            <div className="left-side-slide-2">
              <img
                className="left-side-slide-2-image"
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              />
            </div>
            <div className="right-side-slide-2">
              <p className="image-slide-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </Slide>

        <Slide>
          <video loop muted autoPlay>
            <source
              src="https://content.clipchamp.com/content-repo/content/previews/stryb_v7045564.mp4"
              type="video/mp4"
            />
            Your browser does not support the video.
          </video>
          <p className="video-title">
            Duis aute irure dolor, in reprehenderit in voluptate velit esse
            cillum dolore
          </p>
        </Slide>
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />

      <Dots
        handleClick={(e) => goToSlide(e)}
        totalSlides={totalSlides}
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default Slider;
