import React from "react";

const Progress = ({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions {index + 1} / {numQuestions}
      </p>
      <p>
        Points {points} / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
