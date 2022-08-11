import React from "react";
import "./App.css";
import ClassComponent from "./components/Class";
import Functional from "./components/Functional";


const App = () =>{
  
  return(
    <div className="App">
      <Functional/>
      <ClassComponent/>
    </div>
  )
}


export default App;
