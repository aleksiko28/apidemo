import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Gloves from 'components/pages/Gloves';
import Beanies from 'components/pages/Beanies';
import Facemasks from 'components/pages/Facemasks';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/facemasks" render={(props) => <Facemasks />} />
          <Route path="/beanies" render={(props) => <Beanies />} />
          <Route path="/gloves" render={(props) => <Gloves />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
