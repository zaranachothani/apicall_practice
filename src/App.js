import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  let [data,setdata] = useState([]);

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
  .then(function (response) {
    // handle success
    console.log(response.data.results);
    setdata(response.data.results);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  },[])

  return (
    <div className="App">
        {
          data.map((ele,ind)=>{
            return(
              <>
                <img src={ele.image}></img>
                <h1>{ele.name}</h1>
              </>
            )
          })
        }
    </div>
  );
}

export default App;
