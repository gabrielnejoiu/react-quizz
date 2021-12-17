import { React, useState } from "react";
import Results from "./results";

const Slide = ({ data, currentSlide, updateAnswer }) => {
  const [userAnswer, setUserAnswer] = useState(data);

  if (data.length === currentSlide) {
    return <Results data={userAnswer} />;
  }

  const { answers, question } = data[currentSlide];

  const Answers = () => {
    return (
      <ul>
        {answers.map((answer, index) => (
          <li
            className={`choice ${
              userAnswer[currentSlide].answer === index ? "selected" : ""
            }`}
            onClick={() => {
              updateAnswer(index);
            }}
            key={index}
          >
            {answer}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="slide">
      <h3>{question}</h3>
      <Answers />
    </div>
  );
};

export default Slide;
