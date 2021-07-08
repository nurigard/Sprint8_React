//import React from 'react';
import './App.css';
import emoji_fonsBlanc_retallat from './assets/img/emoji_fonsBlanc_retallat.jpg';
import {useState} from "react";

function App() {

  const [acudit, setAcudit] = useState("");

  const changeAcudit = () =>{
  
      fetch('https://icanhazdadjoke.com/slack')
            
      .then(function(response){
          return response.json()
      })
      .then(function(response){
          //console.log(response)
          console.log(response.attachments[0].fallback)
          const acudit = response.attachments[0].fallback;
          setAcudit(acudit)})
      }       
   
  return (
    <div className="App">
      <div className="titolAcudit">
      <h1>'Preparat per riure?'</h1>  
      <p>{acudit}</p>
      <img src={emoji_fonsBlanc_retallat} alt='emoji' width={75}/>
      <button onClick={() => changeAcudit()}>Següent acudit</button>   
      </div>
    </div>
  );
}

export default App;
