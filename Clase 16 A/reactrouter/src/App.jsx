import React from 'react';
import { Home, Main, Article, Faq, About, NotFound } from "./index.jsx";
import { Router, Route, browserHistory } from "react-router-3";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}>
                    <Route path="/main" component={Main}>
                        <Route path="/main/article/:titleId" component={Article} />
                    </Route>
                    <Route path="/faq" component={Faq} />
                    <Route path="/about" component={About} />
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>
        );
    }
}
export default App;