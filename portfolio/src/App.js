import React from 'react';
import "react-bootstrap"
import Navbar from "./component/navbar.jsx";
import {  Route, Switch } from "react-router-dom";
import Resume from './component/Resume.jsx';
import Error from './component/test';
import "./styles/index.scss";

function App() {
  return (
<>
<Switch>
     <Route exact path="/" component={Navbar} />
        <Route exact path="/resume" component={Resume} />
        <Route  exact path="/error" component={Error}/>  
</Switch>
</>
  );
}


export default App;
