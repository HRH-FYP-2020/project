
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Reg from './Reg'
import Main from './Main'
import Ea from './Ea'
import Contact from './Contact'
import Home from './Home'
import Speakers from './Speakers'
 import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Anout from './Anout'




function App() {
  
  return (

    <Router>
     
        <div >
       
             
               <Switch>
                  <Route path ="/Main" exact component={Main} />
                  <Route path ="/Contact" component={Contact} />
                  <Route path ="/Speakers" component={Speakers}  />
                  <Route path ="/Anout" component={Anout}  />
                  <Route path="/Home" component={Home}/>
                  <Route path ="/Reg"  component={Reg} />
                  <Route path ="/Ea"  component={Ea} />
                 
              </Switch> 
                  
        </div>
    </Router>
    
  );
}
export default App;

