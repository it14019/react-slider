import React from "react";

export const slideArray = [
  <>
    <img
      className="background-filter"
      src="https://images.unsplash.com/photo-1565800489013-c64859d0c2d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    />
    <p className="title title-position">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </p>
    <p className="text slide-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </p>
  </>,
  <div className="only-text-background">
    <h1 className="only-text">
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
      consectetur adipisci
    </h1>
  </div>,
  <div className="container-slide-1">
    <div className="left-side-slide-1">
      <p className="image-slide-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
    </div>
    <div className="right-side-slide-1">
      <img
        className="right-side-slide-1-image"
        src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      />
    </div>
  </div>,
  <div className="container-slide-2">
    <div className="left-side-slide-2">
      <img
        className="left-side-slide-2-image"
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      />
    </div>
    <div className="right-side-slide-2">
      <p className="image-slide-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
    </div>
  </div>,
  <>
    <video loop muted autoPlay>
      <source
        src="https://content.clipchamp.com/content-repo/content/previews/stryb_v7045564.mp4"
        type="video/mp4"
      />
      Your browser does not support the video.
    </video>
    <p className="video-title">
      Duis aute irure dolor, in reprehenderit in voluptate velit esse cillum
      dolore
    </p>
  </>,
];
