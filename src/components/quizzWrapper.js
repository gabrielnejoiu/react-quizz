import React, { useState } from "react";
import Slide from "./slide";
import inputData from "./inputData";
import ProgressBar from "./progressBar";
import Navigation from "./navigation";

const Quizz = () => {
  const [slide, setSlide] = useState(0);
  const [userAnswer, setUserAnswer] = useState(inputData);

  const updateAnswer = (index) => {
    const newObj = [...userAnswer];
    newObj[slide].answer = index;
    setUserAnswer(newObj);
  };

  const nextSlide = () => {
    if (
      slide < inputData.length &&
      (userAnswer[slide].answer === 0 || userAnswer[slide].answer)
    ) {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  let disabledNextBtn = false;

  if (
    slide === inputData.length ||
    typeof userAnswer[slide].answer === "undefined"
  ) {
    disabledNextBtn = true;
  }

  return (
    <div className="quizz_wrapper">
      <div className="quizz_container">
        <h1>Quizz</h1>
        <div className="quizz_slides">
          <Slide
            data={userAnswer}
            currentSlide={slide}
            updateAnswer={updateAnswer}
          />

          <div className="navigation">
            <Navigation
              slide={slide}
              prevSlide={prevSlide}
              nextSlide={nextSlide}
              dataLength={inputData.length}
              disabledNextBtn={disabledNextBtn}
            />

            <ProgressBar
              props={{ slidesCount: inputData.length, currentSlide: slide }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizz;
