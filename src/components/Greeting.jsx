import React from "react";

const date = new Date();
const currentTime = date.getHours();

var greeting;

function Greeting() {
  if (currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }

  return greeting;
}

export default Greeting;
