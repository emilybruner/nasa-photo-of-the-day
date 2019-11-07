import React from "react";
import "./App.css";
import NasaInfo from "./components/NasaInfo";
import { NavBar } from './components/NavBar.js';
// import { Button } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <NavBar />
      <NasaInfo />
    </div>
  );
}

export default App;
