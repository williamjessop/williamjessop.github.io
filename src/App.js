import './App.css';
import Navigation from './components/navigation'
import Home from './components/home'
import Projects from './components/projects'

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
            <Route path="/projects">
              <Projects/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
