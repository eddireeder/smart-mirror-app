import React, { useEffect, useState } from "react";
import "./Greeting.scss";

type GreetingProps = {
  name: string
}

const Greeting: React.FC<GreetingProps> = props => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    updateGreeting();
    const interval = setInterval(() => {
      updateGreeting();
    }, 1000 * 5);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const updateGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 4 && hour <= 11) {
      setGreeting('Good morning');
    } else if (hour >= 12 && hour <= 17) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  };

  return <div className="Greeting">{greeting}, {props.name}</div>;
};

export default Greeting;
