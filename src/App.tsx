import React, { useEffect } from "react";
import "./App.scss";
import Greeting from "./components/Greeting/Greeting";

function App() {
  useEffect(() => {
    requestWakeLock();
  }, []);

  const requestWakeLock = async () => {
    try {
      await (navigator as any).wakeLock.request('screen');
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  }

  return (
    <div className="App">
      <Greeting name="Eddie"/>
    </div>
  );
}

export default App;
