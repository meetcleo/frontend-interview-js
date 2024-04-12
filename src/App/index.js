import React from "react";

import Header from "../Components/Header";

import "./App.css";

import Converter from "../Components/Converter";

function App() {

  return (
    <div>
      <Header title="Cleo currency converter" />
      <div className="cleo-app-content-flex-center">
        <Converter />
      </div>
    </div>
  );
}

export default App;
