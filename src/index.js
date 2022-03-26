import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}
const numbers = [1, 2, 3, 4, 5];

function User(props) {
  const { name, spell, age } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{spell}</p>
      <p>{age}</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    {/* <User name={"Vladimir"} spell={"Medina"} age={32} /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
