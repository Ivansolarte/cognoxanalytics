import React,{Fragment} from 'react'
import { Route, Redirect } from "react-router-dom";
import { Home } from '../components/Home/Home';
import { Login } from '../components/Login/LoginSignIn';
import { NotFound } from '../components/Not-found-page/NotFound';

/// variable de autenticacion
let auth = false

//rutas publicas
const PublicRoute = (uno,dos) => {
  
   

    return (
        <Route path={"/" || "*"}>
            <Login/>
        </Route>
    )
      
    
}

//rutas privadas solo entra con autenticacion TRUE
const PrivateRoute = (uno,dos) => {
    return (
        <Fragment>
            <Route path="/">
               <Home/>
           </Route>
           

        </Fragment>
        
       
    )
}

export {PublicRoute,PrivateRoute}
