import { React } from "react";

const Navigation = ({ slide, prevSlide, disabledNextBtn, nextSlide }) => {
  return (
    <>
      <div
        className={`arrow arrow_left ${slide === 0 ? "inactive" : ""}`}
        onClick={prevSlide}
      ></div>
      <div
        className={`arrow arrow_right ${disabledNextBtn ? "inactive" : ""}`}
        onClick={nextSlide}
      ></div>
    </>
  );
};

export default Navigation;
