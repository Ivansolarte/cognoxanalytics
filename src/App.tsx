import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { PublicRouters } from './routers/public.router';
import { PrivateRoute } from './routers/routerMain';



function App() {

  // window.localStorage.setItem("analytic","falso")  
  const varSess = window.localStorage.getItem('analytic');
  console.log(varSess);  

  if (varSess) {
    console.log('logeado');
    
  } else {
    console.log('no logeado');
  }
  
  return varSess!=='true'? <PublicRouters/>:<PrivateRoute/>
  
}

export default App;
