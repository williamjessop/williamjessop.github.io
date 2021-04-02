import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'

import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/projects'>
          <Projects/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
