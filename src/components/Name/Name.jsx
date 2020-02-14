import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Name.css';

const Name = (props) => {
    let emptyData = { name: " " };
    let ls = localStorage.getItem('name');  

    const [person, setPerson] = useState(emptyData);

    useEffect(() => {
        if (ls !== null) {
            let parsedName = JSON.parse(localStorage.getItem('name'));
            let localStorageData = { name: parsedName.name };
            setPerson(localStorageData);
        }}, [ls])
        
    const [buttonName, setButtonName] = useState();
    const [stepInButton, setStepInButton] = useState(true);

        function saveName(key, val) {

            if (val.length > 2) {
                    let temp = Object.assign({}, person);
                    temp[key] = val;
                    setPerson(temp);
                    setStepInButton(false);                              
                    let nameToLocalStorage = temp;
                    let lsName = JSON.stringify(nameToLocalStorage);
                    localStorage.setItem('name', lsName);   
                    setButtonName(val);                                             
            }
        }

    return (
        <div>
            <br />
            <label className="header">Moi, kuka sinä olet?</label>
            <br />
            <input
                className="inputWho"  
                id="inputWho"           
                type="text"
                style={{ fontFamily: 'Bangers', fontSize: '20px', padding: '10px'}}
                onChange={e => saveName("name", e.target.value)}      
            ></input>
            <br />
            <br />
            
            <Link 
                to={{ pathname: 'day' }}>
                    <button 
                        style={{ fontFamily: 'Bangers', fontSize: '20px', padding: '10px'}}
                        disabled={stepInButton}>
                        Astu sisään {buttonName}
                        </button>                      
                </Link>           
         </div>
    )
}

export default Name;
