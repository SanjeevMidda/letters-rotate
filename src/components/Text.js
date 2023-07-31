import React, { useState } from "react";

const Text = ({ letter }) => {
  const [status, setStatus] = useState(false);
  const [rotate, setRotate] = useState(0);

  let rotateLetter = () => {
    setRotate(rotate + 30);
  };

  return (
    <div className="text">
      <h3 onClick={rotateLetter} style={{ transform: `rotate(${rotate}deg)` }}>
        {letter}
      </h3>

      {/* {status && <h1>Hello</h1>} */}
    </div>
  );
};

export default Text;
