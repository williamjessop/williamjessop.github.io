import './App.css';
import Navigation from './components/navigation'
import Home from './components/home'
import Projects from './components/projects'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <p>about</p>
            </Route>
            <Route exact path="/projects">
              <Projects/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
