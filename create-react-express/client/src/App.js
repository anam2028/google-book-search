import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Uhoh404 from './pages/Uhoh404';

const App = () => {
 return(
     <Router>
         <React.Fragment>
             <Switch>
                 < Route exact path = '/' component ={Search} />
                 < Route exact path = '/search' component = {Search} />
                 < Route exact path = '/saved' component = {Saved} />
                 < Route component = {Uhoh404} />
             </Switch>
         </React.Fragment>
     </Router>
 )
}
export default App;