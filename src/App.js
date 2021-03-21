import './App.css';
import Navigation from './components/navigation'
import Home from './components/home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <p>about</p>
            </Route>
            <Route path="/dashboard">
              <p>dash</p>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
