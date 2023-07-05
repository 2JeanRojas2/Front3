import './App.css';
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } 
from 'react-router-3'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
/*Pages */
import Home from './pages/Home'
import Cats from './pages/Cats'
import Dogs from './pages/Dogs'
import Faq from './pages/Faq'
import NotFound from './pages/NotFound'
/* Components*/
import Nav from './components/Nav'
import Footer from './components/Footer'

class App extends React.Component {

  // Primera  forma de usar Router
  //  routes=()=>({
  //    path:'/',
  //    indexRoute:{component:Home},
  //    childRoutes:[
  //      {path:'home', indexRoute:{ component:Home}},
  //      {path:'cats', component:Cats},
  //      {path:'dogs', component:Dogs},
  //      {path:'faq',component:Faq},
  //      {path:'*',component:NotFound}
  //    ]
  //  })
  render() {
    return (
      <div className="row">

        {/* <Router history={browserHistory} routes={this.routes()}/> */}
        {/*Segunda forma*/}
        {/* <div className="">
          <Router history={browserHistory}>
            <Route path='/' component={Home} />
            <Route path='/cats' component={Cats}/>
            <Route path='/dogs' component={Dogs}/>
            <Route path='/faq' component={Faq}/>
            <Route path='*' component={NotFound}/>
          </Router>
        </div> */}

        {/*Con react-router-dom */}
        {/* <Router>
          <Nav />

          <Switch>
            <Route path='/cats' >
              <Cats />
            </Route>
            <Route path='/dogs'>
              <Dogs />
            </Route>
            <Route path='/faq'>
              <Faq />
            </Route>
            <Route path='/' >
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router> */}
  {/*Con los links de href */}
        <Nav />
        <Home />
        <Cats />
        <Dogs />
        <Faq />
        <NotFound/>
        <Footer/>
      </div>
    );
  }
}

export default App;
