//import React from "react";

import {useState, useEffect} from "react";

function ApiAcudits(){

    const [acudit, setAcudit] = useState("");

    useEffect(() => {

        fetch('https://icanhazdadjoke.com/slack')
              
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            //console.log(response)
            console.log(response.attachments[0].fallback)
            const {acudit} = response.attachments[0].fallback;
            setAcudit(acudit)})
            
    }, []);
    

    return (
             <p>{acudit}</p>
     ) }

  export default ApiAcudits;