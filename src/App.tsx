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
      <ShareInfo
        symbol="INTU"
        name="Intuit"
        startPrice={417.56}
        units={132}
        isUS={true}
      />
      <ShareInfo
        symbol="TSLA"
        name="Tesla"
        startPrice={101.54}
        units={20}
        isUS={true}
      />
      <ShareInfo
        symbol="COIN"
        name="Coinbase"
        startPrice={276.38}
        units={45}
        isUS={true}
      />
      <ShareInfo
        symbol="AAPL"
        name="Apple"
        startPrice={118.537}
        units={60}
        isUS={true}
      />
      <ShareInfo
        symbol="GOOG"
        name="Google"
        startPrice={1151.705}
        units={2}
        isUS={true}
      />
      <SpinningCube />
    </div>
  );
}

export default App;
