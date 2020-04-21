import React, { Component } from "react";
import ReactDOM from "react-dom";


import "./../sass/style.scss"; // adres do głównego pliku SASS

import Container from "./Container.js"

const App = () => {
  return (

      <Container/>

  );
};

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <>
      <App />
    </>,
    document.getElementById("app")
  );
});
