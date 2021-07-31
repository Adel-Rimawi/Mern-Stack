import './App.css';
import SearchForm from './components/SearchForm';
import { Router } from '@reach/router';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <SearchForm/>
      <Router>
        <Result path="api/:var1/:var2"/>
      </Router>
    </div>
  );
}

export default App;
