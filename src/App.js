import React from 'react';
import "bootstrap"
import Navbar from "./component/navbar.js";
import {  Route, Switch } from "react-router-dom";
import Resume from './component/Resume.js';
import "./styles/index.scss";

function App() {
  return (
<>
     <Switch>     
     <Route exact path="/" component={Navbar} />
        <Route exact path="/resume" component={Resume} />
</Switch>
</>
  );
}


export default App;
