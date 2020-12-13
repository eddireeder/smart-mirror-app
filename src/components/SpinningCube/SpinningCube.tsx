import React from "react";
import "./SpinningCube.scss";

const SpinningCube: React.FC = () => {
  return (
    <div className="SpinningCube">
      <div className="cube">
        <div className="face1"></div>
        <div className="face2"></div>
        <div className="face3"></div>
        <div className="face4"></div>
        <div className="face5"></div>
        <div className="face6"></div>
      </div>
    </div>
  );
};

export default SpinningCube;
