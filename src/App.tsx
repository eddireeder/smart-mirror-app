import React, { useEffect } from "react";
import "./App.scss";
import Clock from "./components/Clock/Clock";
import Greeting from "./components/Greeting/Greeting";
import ShareInfo from "./components/ShareInfo/ShareInfo";
import SpinningCube from "./components/SpinningCube/SpinningCube";
import Weather from "./components/Weather/Weather";

function App() {
  useEffect(() => {
    requestWakeLock();
    const interval = setInterval(() => {
      refreshPage();
    }, 1000 * 60 * 5);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const requestWakeLock = async () => {
    try {
      await (navigator as any).wakeLock.request("screen");
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="top-bar">
        <Greeting name="Eddie" />
        <Clock />
      </div>
      <Weather />
      <ShareInfo symbol="INTU" startPrice={417.56} units={132} />
      <ShareInfo symbol="TSLA" startPrice={101.54} units={20} />
      <ShareInfo symbol="COIN" startPrice={276.38} units={45} />
      <ShareInfo symbol="AAPL" startPrice={118.537} units={60} />
      <ShareInfo symbol="GOOG" startPrice={1151.705} units={2} />
      <SpinningCube />
    </div>
  );
}

export default App;
