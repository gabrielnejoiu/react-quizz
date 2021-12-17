import { React } from "react";

const ProgressBar = ({ props }) => {
  const percentage = {
    width: (100 / props.slidesCount) * props.currentSlide + "%",
  };
  return (
    <div className="progress_bar">
      <div className="fill" style={percentage}></div>
    </div>
  );
};

export default ProgressBar;
