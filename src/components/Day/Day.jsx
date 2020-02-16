import React, { useState, useEffect } from 'react';
import './Day.css';
import { Link } from "react-router-dom";
import Tasks from '../Tasks/Tasks';
import aurinko from "../../images/aurinko.png";

const Day = (props) => {

let localStorageName = JSON.parse(localStorage.getItem('name'));

let lsTime = JSON.parse(localStorage.getItem('time'));
let timeArray = Array.from(Object.keys(lsTime), k => lsTime[k]);

let [dayStarts, setDayStarts] = useState(timeArray[props.n-1]);

   useEffect(() => {
            if (timeArray.length === 0) {
            setDayStarts(props.listDays[props.n-1]); 
        }}, [])

const [time, setTime] = useState(getNow());
    setTimeout(() => {
      setTime(getNow());
    }, 30000);
  
    function getNow() {
        const now = new Date(Date.now());
        const hour = (now.getHours() < 10 ? '0' : '') + now.getHours();
        const minute = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
        const second = (now.getSeconds() < 10 ? '0' : '') + now.getSeconds();
        return {
          hour,
          minute,
          second
        };
      }


    if ((props.n-1) < 5 && (props.n-1) >= 0)  {
        return (
            <div className="dayPage">
                <div>
                    <p className="header">Huomenta {localStorageName.name}!  
                    Nyt on {props.today} ja kello on {time.hour}.{time.minute}.{time.second} <br /> 
                    Tänään koulu alkaa klo {dayStarts}</p>
                    <p>Alla on kuvia aamutoimista, jotka sinun tulee tehdä ennen kouluun lähtöä. Klikkaa kuvaa kun olet tehnyt sen.</p>
                </div>
                <br />
                <div className="tasks">
                    <Tasks />
                </div>
                <div className="link">
                    <p className="buttonBack">
                        <Link to={{ pathname: 'name' }}>
                            <button 
                            style={{ fontFamily: 'Bangers', fontSize: '12px', padding: '10px'}}>
                            Etkö ole {localStorageName.name}? Vaihda tästä käyttäjää.
                            </button>
                        </Link>
                        <Link 
                            to={{ pathname: 'timeschedule' }}>
                            <button 
                            style={{ fontFamily: 'Bangers', fontSize: '12px', padding: '10px', margin: '10px'}}>
                            Onko lukujärjestys väärä? Vaihda se täältä.
                            </button>                      
                        </Link>
                    </p>  
                </div>
            </div>
        )
    } else
        return (
            <div className="header">
                <p>Huomenta {localStorageName.name}, <br /> nyt on viikonloppu ja on vapaapäivä!</p>
                <div><img src={aurinko} alt=" " className="weekendImg"/></div>
                <div className="link">
                    <p className="buttonBack">
                        <Link to={{ pathname: 'name' }}>
                            <button 
                            style={{ fontFamily: 'Bangers', fontSize: '12px', padding: '10px'}}>
                            Etkö ole {localStorageName.name}? Vaihda tästä käyttäjää.
                            </button>
                        </Link>
                     
                    </p>  
                </div>
            </div>
        )
    }

export default Day;

//<p>Huomenta {localStorageName.name}, <br /> tänään on {props.today} ja on viikonloppu!</p>