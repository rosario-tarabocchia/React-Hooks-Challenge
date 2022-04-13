import React, { useState } from "react";

function App() {
  let [time, setTime] = useState(new Date().toLocaleTimeString());

  function getTime() {
    return new Date().toLocaleTimeString();
  }

  function updateTime() {
    return setTime(getTime);
  }

  setInterval(updateTime, 1000);

  console.log(time);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
