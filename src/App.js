import './App.css';
import Navigation from './components/navigation'
import Home from './components/home'
import Projects from './components/projects'

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
          <p>about</p>
        </Route>
        <Route exact path='/projects'>
          <Projects/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
