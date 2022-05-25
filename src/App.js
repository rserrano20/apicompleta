import React,{useEffect,useState} from 'react'
import Navbar from './components/Navbar';
import Characters from './components/Characters';


function App() {
  const [characters,setCharacters] = useState ([]);

  const initialUrl='https://rickandmortyapi.com/api/character';
  const  fetchCharacters = (url) =>{
  fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
  };

  useEffect(() => {
  fetchCharacters(initialUrl);
},[])

  return (
   <>
     <Navbar brand= 'Rick and Morty App'></Navbar>
     <div className='container mt-5'>
       <Characters characters={characters}></Characters>


     </div>
    
   </>
    
  );
}

export default App;
