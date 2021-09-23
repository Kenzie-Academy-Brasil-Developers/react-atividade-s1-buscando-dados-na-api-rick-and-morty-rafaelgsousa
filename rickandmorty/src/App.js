import './App.css';

import { useState, useEffect } from 'react';

import Characters from './componentes/Characters';


function App() {

  const [caracterList, setCaracterList] = useState([])

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
    .then((response)=>response.json())
    .then((response)=>setCaracterList(response.results))
    .catch(((err)=>console.log(err)))
  },[])

  return (
    <div className="App">
      <header className="App-header">
      <Characters personagens={caracterList}/>
      </header>
    </div>
  );
}

export default App;
