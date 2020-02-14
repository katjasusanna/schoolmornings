import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Timeschedule.css';

const Timeschedule = (props) => {

  const listTimes = props.listDays;

  let lsTime =JSON.parse(localStorage.getItem('time'));
  let timeArray = Array.from(Object.keys(lsTime), k => lsTime[k]);
   
 let [list, setList] = useState([]);

         useEffect(() => {
          if (timeArray.length === 0) {
              setList(listTimes);
          }else {
            setList(timeArray)
        }}, [])


    function updateData(key, val) {
      val = JSON.parse(val);
      let temp = Object.assign([], list);
      temp[key] = val;
      setList(temp)
    }

    let newTimesToLocalStorage = JSON.stringify(list);
    localStorage.setItem('time', newTimesToLocalStorage);

  return (
    <div>
      <div>
        <p className="header">Täällä voit muuttaa koulupäivien alkamisajat lukujärjestyksesi mukaiseksi</p>
      </div>
   
    <form>
    <br />
    <table className="timesTable">
          <tr>
              <td><label>Maanantai <br /> {list[0]}</label></td>
              <td><label>Tiistai <br /> {list[1]} </label></td>
              <td><label>Keskiviikko <br /> {list[2]} </label></td>
              <td><label>Torstai <br /> {list[3]} </label></td>
              <td><label>Perjantai <br /> {list[4]} </label></td>
          </tr>
          <tr>
              <td>
                <input 
                className="timesInput"
                size="2"
                maxLength="2"
                type="text"
                name="maanantai" 
                id="0" 
                onChange={e => updateData(0, e.target.value)}
                ></input> 
              </td>      
              <td>
                <input 
                className="timesInput"
                size="2"
                maxLength="2"
                type="text"
                name="tiistai" 
                id="1" 
                onChange={e => updateData(1, e.target.value)}
                ></input>
              </td>                     
              <td>
                <input 
                className="timesInput"
                size="2"
                maxLength="2"
                type="text"
                name="keskiviikko"
                id="2"  
                onChange={e => updateData(2, e.target.value)}
                ></input>
              </td>                 
              <td>
                <input 
                className="timesInput"
                size="2"
                maxLength="2"
                type="text"
                name="torstai" 
                id="3" 
                onChange={e => updateData(3, e.target.value)}
                ></input>
              </td>       
              <td>
                <input 
                className="timesInput"
                size="2"
                maxLength="2"
                type="text"
                name="perjantai" 
                id="4" 
                onChange={e => updateData(4, e.target.value)}
                ></input>
              </td>
            </tr>
      </table>
                <br />
                <Link to={{ pathname: 'day' }}>
                  <button type="submit" 
                  style={{ fontFamily: 'Bangers', fontSize: '20px', padding: '10px', margin: '10px'}}>
                  Tallenna
                  </button>
                </Link>
        
     </form>
      <br />
          <Link to={{ pathname: 'day' }}>
                <button 
                  style={{ fontFamily: 'Bangers', fontSize: '12px', padding: '10px'}}>
                    Tulitko vahingossa tälle sivulle? Palaa tästä edelliselle sivulle.
                </button>
          </Link>
  </div>
)
}


export default Timeschedule;




