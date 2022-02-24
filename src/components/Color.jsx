import React from "react";

var customStyle = {
  color: ""
};

const date = new Date();
const currentTime = date.getHours();

function CurrentColor() {
  if (currentTime < 12) {
    customStyle.color = "red";
  } else if (currentTime < 18) {
    customStyle.color = "green";
  } else {
    customStyle.color = "blue";
  }

  return customStyle.color;
}

export default CurrentColor;
