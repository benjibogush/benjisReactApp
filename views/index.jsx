import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router';
import {navbar} from './navbar.js';
import {Home} from './Home.js' ;
import {MeetBenji} from './MeetBenji.js';


// const reactRouter = require('react-router')
//   const Router = reactRouter.Router
//   const Switch = reactRouter.Switch
//   const Route = reactRouter.Route
//   const Link = reactRouter.Link
// const navbar = require('./navbar.js').default;
// const Home = require('./Home.js').default;
// const MeetBenji = require('./MeetBenji.js').default;


export default function App() {
  return (
   
    <Router>
       <navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/MeetBenji" exact component={MeetBenji} /> 
      </Switch>
    </Router>
  );
  
}
// export default App;

// class App extends React.Component {
//   render() {
//     return <>
//       <Router>
//       <navbar />
//       <Switch>
//         <Route path='/' exact component={Home} />
//         <Route path='/MeetBenji' exact component={MeetBenji} /> 
       
//       </Switch>
//     </Router>
      
    
    
// </>; // return end


//   }// render end
  
// } // class end

// export default App;