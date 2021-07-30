import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import { Router } from '@reach/router';
import Vars from './components/Vars';

function App() {
  return (
    <div className="App">
      <Router>
            <Home path="/home"/>
            <Number path="/:num"/>
            <Vars path="/:var/:background/:color"/>
        </Router>
    </div>
  );
}

export default App;
