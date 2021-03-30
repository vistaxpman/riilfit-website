import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import { combineData } from "../../utils";

export default function Carousel() {
  const slideRef = useRef(null);
  const [data, setData] = useState({
    slideImages: [
      "https://static.seattletimes.com/wp-content/uploads/2020/05/urn-publicid-ap-org-6dbd9ad370add2ba299c7da46c25004fVirus_Outbreak_Florida_39312-780x519.jpg",
      "https://cdn.abcotvs.com/dip/images/6158208_050620-kgo-gym-generic-img_Image_00-01-06,28.jpg",
      "https://whyy.org/wp-content/uploads/2020/05/gym_exercise_generic_joseph_wayne_buchanan_pexels_052420-e1590338374283.jpg",
    ],
    activeSlideIndex: 0,
  });

  const properties = {
    duration: 1000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <span style={{ display: "none" }}></span>,
    nextArrow: <span style={{ display: "none" }}></span>,
  };

  const handleChangeSlideImages = (index) => {
    slideRef?.current?.goTo(index);
    setData(combineData(data, { activeSlideIndex: index }));
  };

  const handleChangeIndex = (index) => {
    setData(combineData(data, { activeSlideIndex: index }));
  };

  return (
    <Wrapper>
      <Slide
        easing="ease"
        {...properties}
        ref={slideRef}
        onChange={(oldIndex, newIndex) => handleChangeIndex(newIndex)}
      >
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${data?.slideImages[0]})` }}>
            <span>Interactive. Personal. Traning</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${data?.slideImages[1]})` }}>
            <span>Aerobic exercises</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${data?.slideImages[2]})` }}>
            <span>Body building supplements</span>
          </div>
        </div>
      </Slide>
      <div className="slide-controls">
        {data?.slideImages.map((each, index) => (
          <span
            key={index}
            onClick={() => handleChangeSlideImages(index)}
            className={
              data?.activeSlideIndex === index
                ? "active-slide-control"
                : "inactive-slide-control"
            }
          ></span>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 500px;
  position: relative;

  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 500px;
  }

  .each-slide span {
    padding: 20px;
    font-size: 20px;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 110px;
    color: #fff;
  }

  .slide-controls {
    display: flex;
    position: absolute;
    bottom: 15px;
    right: 15px;
    align-items: center;

    > .active-slide-control {
      margin-left: 5px;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background: #fff;
    }

    > .inactive-slide-control {
      margin-left: 5px;
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background: #fff;
    }
  }
`;
