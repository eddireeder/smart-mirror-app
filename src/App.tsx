import React, { useEffect } from "react";
import "./App.scss";
import Clock from "./components/Clock/Clock";
import Greeting from "./components/Greeting/Greeting";
import Weather from "./components/Weather/Weather";

function App() {
  useEffect(() => {
    requestWakeLock();
    const interval = setInterval(() => {
      refreshPage();
    }, 1000 * 60 * 5);

    return () => {
      clearInterval(interval);
    }
  }, []);

  const requestWakeLock = async () => {
    try {
      await (navigator as any).wakeLock.request('screen');
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  }

  const refreshPage = () => {
    window.location.reload(); 
  }

  return (
    <div className="App">
      <div className="top-bar">
        <Greeting name="Eddie"/>
        <Clock />
      </div>
      <Weather />
    </div>
  );
}

export default App;
