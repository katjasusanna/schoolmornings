import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Name from './components/Name/Name';
import Day from './components/Day/Day';
import Timeschedule from './components/Timeschedule/Timeschedule';

function App(props) {

  const days = [                        
    "maanantai",
    "tiistai",
    "keskiviikko",
    "torstai",
    "perjantai",
    "lauantai",
    "sunnuntai"
  ];

    let d = new Date();
    let n = d.getDay();
    let today = days[n-1];

    const [dayStarts, setDayStarts] = useState([])
        useEffect(() => {
          fetch("https://schoolmornings.firebaseio.com/timeschedule.json")
          .then(function(response) {
              if (response.status !== 200) {
                  console.log("Looks like there was a problem. Status code; " + response.status);
              return;
              }
              response.json().then(function(data) {
                  const sArray = Array.from(Object.keys(data), k => data[k]);
                  setDayStarts(sArray);
              });
          })
          .catch(function(err) {
              console.log("Fetch Error : -S", err);
          });
        }, []);

   const listDays = dayStarts.map((day, key) => {
      localStorage.setItem('time', JSON.stringify(day.schoolStarts));
      return (day.schoolStarts)
    });


    if (localStorage.getItem('name') === null) {
      return (
        <div className="App">
          <Switch>
          <Route path="/" exact component={Name} />
          <Route  path="/day" 
                          render={(routeProps) => 
                          (<Day {...routeProps} listDays={listDays} d={d} n={n} today={today}/>)} />
      
                  <Route path="/name" exact component={Name} />
                  <Route path="/timeschedule" 
                      render={(routeProps) => 
                      (<Timeschedule {...routeProps} listDays={listDays}/>)} />
          </Switch>
        </div>
      )
    } else 
      return (
          <div className="App">
            <Switch>
                    <Route exact path="/"  
                          render={(routeProps) => 
                          (<Day {...routeProps} listDays={listDays} d={d} n={n} today={today}/>)}/>        
                    <Route  path="/day" 
                            render={(routeProps) => 
                            (<Day {...routeProps} listDays={listDays} d={d} n={n} today={today}/>)} />       
                    <Route path="/name" exact component={Name} />
                    <Route path="/timeschedule" 
                        render={(routeProps) => 
                        (<Timeschedule {...routeProps} listDays={listDays}/>)} />
                </Switch>
          </div>
    );
  }

export default App;

