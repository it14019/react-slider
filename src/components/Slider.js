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
import { slideArray } from "../data/slideContent";

const Slider = () => {
  const firstSlide = slideArray[0];
  const secondSlide = slideArray[1];
  const lastSlide = slideArray[slideArray.length - 1];

  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    /*
    activeIndex - keeps track on which slide is active/selected,
    translate - will translate slides left or right,
    transition - smooth transition between slides
    slides - contains three slides to make slider infinite
    */
    activeIndex: 0,
    translate: getWidth(),
    transition: 0.45,
    slides: [lastSlide, firstSlide, secondSlide],
  });

  const { translate, transition, slides, activeIndex } = state;

  const transitionRef = useRef();
  const resizeRef = useRef();

  useEffect(() => {
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const smooth = () => {
      transitionRef.current();
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = window.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  //add transition again after it was removed because of updating slide array
  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition]);

  //handle browser resizes
  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  //ensure infinite effect
  const smoothTransition = () => {
    console.log(activeIndex);
    let slides = [];
    // if current is last slide
    if (activeIndex === slideArray.length - 1) {
      slides = [slideArray[slideArray.length - 2], lastSlide, firstSlide];
    }
    // if current is first slide
    else if (activeIndex === 0) {
      slides = [lastSlide, firstSlide, secondSlide];
    }
    // if current is neither first, neither last slide
    else {
      slides = slideArray.slice(activeIndex - 1, activeIndex + 2);
    }

    setState({
      ...state,
      slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const nextSlide = () => {
    //checks if current slide is the last slide. if yes, go to first slide, otherwise, go to next slide
    setState({
      ...state,
      translate: translate + getWidth(),
      activeIndex: activeIndex === slideArray.length - 1 ? 0 : activeIndex + 1,
    });
  };
  const prevSlide = () => {
    //checks if current slide is the first slide. if yes, go to last slide, otherwise, go to previous slide
    setState({
      ...state,
      translate: 0,
      activeIndex: activeIndex === 0 ? slideArray.length - 1 : activeIndex - 1,
    });
  };

  //go to selected slide
  const goToSlide = (e) => {
    setState({
      ...state,
      activeIndex: e,
      translate: 0,
    });
  };

  return (
    <div className="slider">
      <SliderContent
        width={getWidth() * slides.length}
        translate={translate}
        transition={transition}
        onTouchStart={(e) => startTouchMobile({ e })}
        onTouchMove={(e) => moveTouchMobile({ e, nextSlide, prevSlide })}
        onMouseDown={(e) => startTouchDesktop({ e })}
        onMouseUp={(e) => moveTouchDesktop({ e, nextSlide, prevSlide })}
      >
        {slides.map((slide, i) => (
          <Slide key={i}>{slide}</Slide>
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />

      <Dots
        handleClick={(e) => goToSlide(e)}
        totalSlides={slideArray.length}
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default Slider;
