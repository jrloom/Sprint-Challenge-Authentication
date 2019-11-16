import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Router from "./Utils/Router";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
