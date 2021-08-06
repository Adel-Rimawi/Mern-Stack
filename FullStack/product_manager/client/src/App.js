import './App.css';
import Newproduct from './components/Newproduct';
import "react-bootstrap";
import Main from './Views/Main';
import { Router } from '@reach/router';
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Newproduct path = "/"/>
        </Router> */}
        <Main/>
    </div>
  );
}

export default App;
