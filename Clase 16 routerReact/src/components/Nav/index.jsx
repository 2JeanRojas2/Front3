import React from 'react'
import {
  Link
} from "react-router-dom";
const Nav=()=>{
return(
   <nav className="navbar navbar-dark bg-dark">
     {/*con los links de href */}
   <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#home">Inicio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#cats">Gatos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#dogs">Perros</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#faq">Preguntas frecuentes</a>
  </li>
</ul>
{/*Con los links de Link router-dom */}
{/* 
<ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/cats">Gatos</Link>
    
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/dogs">Perros</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/faq">Preguntas frecuentes</Link>
  </li>
</ul> */}
</nav>
)
}
export default Nav