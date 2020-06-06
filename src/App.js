import React from 'react';
import "bootstrap"
import Navbar from "./component/navbar.js";
import {  Route } from "react-router-dom";
import Resume from './component/Resume.js';
import "./styles/index.scss";

function App() {
  return (
<>

     <Navbar />
        <Route exact path="/resume" component={Resume} />

</>
  );
}


export default App;
