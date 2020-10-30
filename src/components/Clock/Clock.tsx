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
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    setFormattedTime(`${formattedHours}:${formattedMinutes}`);
  };

  return <div className="Clock">{formattedTime}</div>;
};

export default Clock;
