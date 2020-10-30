import React, { useEffect, useState } from "react";
import "./Clock.scss";

const Clock: React.FC = () => {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    updateFormattedTime();
    const interval = setInterval(() => {
      updateFormattedTime();
    }, 1000 * 5);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const updateFormattedTime = () => {
    const now = new Date();
    setFormattedTime(`${now.getHours()}:${now.getMinutes()}`);
  };

  return <div className="Clock">{formattedTime}</div>;
};

export default Clock;
