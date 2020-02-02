import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Component/Login";
import Header from "./header/header";
import {BrowserRouter,Route} from "react-router-dom";
import Cb from "./Component/cb";
import Home from "./Component/home";
import Newadd from "./Component/newadd";
import Furniture from "./Component/furniture";
import Books from "./Component/books";
import Listcard from "./Component/listcard";

//import BrowserRouter from "react-router-dom/modules/BrowserRouter";
function App(value) {

  return (

    <div className="App">
        <Header/>


        <BrowserRouter>

            <Route exact path={"/add"} component={Newadd}></Route>
            <Route exact path={"/"} component={Home}></Route>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/cb"}  component={Cb}/>
            <Route exact path={"/Furniture"} component={Furniture}/>
            <Route exact path={"/BooksnSports"} component={Books}/>

        </BrowserRouter>

    </div>
  );
}

export default App;
