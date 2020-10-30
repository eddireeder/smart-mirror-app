import React, { useEffect } from "react";
import "./App.scss";
import Greeting from "./components/Greeting/Greeting";

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
      <Greeting name="Eddie"/>
    </div>
  );
}

export default App;
