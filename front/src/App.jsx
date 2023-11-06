//starter code from vite for creating React project. 
//Will need to replace this with my application-specific components

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '/src/components/HomePage';
//import EuropeCollection from './EuropeCollection';
//import AsiaCollection from './AsiaCollection';
//import NorthAmericaCollection from './NorthAmericaCollection';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/europe" component={EuropeCollection} />
        <Route path="/asia" component={AsiaCollection} />
        <Route path="/north-america" component={NorthAmericaCollection} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
