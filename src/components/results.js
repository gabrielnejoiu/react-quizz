import { React } from "react";

const Results = ({ data }) => {
  return (
    <div className="slide">
      <h3>Please review your answers:</h3>
      <ul>
        {data.map((item, index) => (
          <li className="result" key={index}>
            {`Q #${index + 1} - A: ${
              item.answers[item.answer] || "Not Taken!"
            }`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
