import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

//make the var and print to
const name = "Kundan";
const Currentyear = new Date();
const year = Currentyear.getFullYear();
const img = "https://picsum.photos/600/300";
//the way to render the components....
ReactDOM.render(
  <div>
    <h1>¡Hola! Como estas</h1>
    <div>
      <img src={img + "?greyscale"} alt="Autogenrate Pics" />
    </div>
  </div>,
  document.getElementById("root")
);

//times section
const date = new Date();
const CurrentTimes = date.getHours();
let greet;
//custom style
const customStyle = {
  color: " ",
};
if (CurrentTimes < 12) {
  greet = "Good Morning";
  customStyle.color = "red";
} else if (CurrentTimes < 18) {
  greet = "Good Afternoon";
  customStyle.color = "Green";
} else {
  greet = "Good Night";
  customStyle.color = "Blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greet}
  </h1>,
  document.getElementById("times")
);
///components

//footer
ReactDOM.render(
  <div>
    <p>Your Lucky Number is {Math.floor(Math.random() * 10)}</p>
    <p>Created By {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("subdiv")
);
