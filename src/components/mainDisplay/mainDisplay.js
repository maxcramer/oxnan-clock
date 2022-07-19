import React from "react";

import DisplayDate from "../displayDate/displayDate";
import Time from "../time/time";

import "./mainDisplay.css";

const MainDisplay = () => {
  return (
    <div className="clock">
      <div className="screen">
        <div className="time_container">
          <Time />
          <DisplayDate />
        </div>
      </div>
    </div>
  );
};

export default MainDisplay;
