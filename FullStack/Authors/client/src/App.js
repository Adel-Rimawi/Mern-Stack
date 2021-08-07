import './App.css';
import React , {useState, useEffect} from 'react';
import axios from 'axios';
import NewAuthor from './components/NewAuthor';
import {Router} from '@reach/router';
import Authors from './components/Authors';
import Editauthor from './components/EditAuthor';

function App() {
  const [authors, setAuthors] = useState([])
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/authors')
        .then(res=>{
          setAuthors(res.data);
          setLoaded(true);
        });
},[]);
  return (
    <div className="App">
      <Router>
      {loaded && (
        <Authors path = "/" authors= {authors}/>)}
        
        <NewAuthor path="/new" />
        <Editauthor path = "/edit/:id" />
      </Router>

    </div>
  );
}

export default App;
