// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Slider from './slider';
export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 1,

    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
function Content({ images }) {
    return (
        <Slider list={images} />
    );
}

export default Content;