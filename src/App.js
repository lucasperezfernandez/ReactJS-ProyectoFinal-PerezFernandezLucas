// ACORDATE DEL NPM I PARA INSTALAR TODO LO QUE HAGAS EN OTRO EQUIPO
//npm install bootstrap
//npm install firebbase
//npm install get-google-fonts
//npm install react-icons-kit
//npm install react-router-dom
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

export class App extends Component {
  render (){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* MINUTO 8:17 VIDEONUEVO */}
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App