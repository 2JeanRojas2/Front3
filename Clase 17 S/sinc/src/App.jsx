import React from 'react';
import Home from "./Components/Home";
import Main from "./Components/Main";
import About from "./Components/About.jsx";
import NotFound from "./Components/NotFound.jsx";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/main">Main</Link>
                </li>
                <li>
                    <Link to="/main/vlog/A1V/R1-A1V">
                        Primer video del Vlog
                    </Link>
                </li>
                <li>
                    <Link to="/main/blog/A1B/R1-A1B">
                        Primer artículo del Blog
                    </Link>
                </li>
                <li>
                    <Link to="/main/vlog/brokenlink">
                        Link roto a video del Vlog con un solo parámetro
                    </Link>
                </li>
                <li>
                    <Link to="/main/blog/bro/ken/link">
                        Link roto a artículo del Blog con más de dos parámetros
                    </Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/brokenlink">Link roto</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path="/"> <Home /> </Route>
                <Route path="/main"> <Main /> </Route>
                <Route path="/about"> <About /> </Route>
                <Route path="*"> <NotFound /> </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;