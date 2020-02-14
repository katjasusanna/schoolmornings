import React, { useState, useEffect } from 'react';
import './tasks.css';
import puuro from "../../images/puuro.png";
import vaatteet from "../../images/vaatteet.png";
import ovi from "../../images/ovi.png";
import reppu from "../../images/reppu.png";
import hammasharja from "../../images/hammasharja.png";
import ulkovaatteet from "../../images/ulkovaatteet.png";
import lamppu from "../../images/lamppu.png";

const Tasks = (props) => {    

    const [tasklist, setTasklist] = useState([]);

    useEffect(() => {
        fetch("https://schoolmornings.firebaseio.com/tasks.json")
        .then(function(response) {
            if (response.status !== 200) {
                console.log("Looks like there was a problem. Status code; " + response.status);
            return;
            }
            response.json().then(function(data) {
                const sArray = Array.from(Object.keys(data), k => data[k]);
                setTasklist(sArray);
            });
        })
        .catch(function(err) {
            console.log("Fetch Error : -S", err);
        });
    }, []);

    const listTasks = tasklist.map((task, key) => {
       
        let iconObj = { "reppu": reppu, 
                        "puuro": puuro, 
                        "vaatteet": vaatteet, 
                        "ovi": ovi, 
                        "hammasharja": hammasharja,
                        "ulkovaatteet": ulkovaatteet,
                        "lamppu": lamppu
                    };
        
        function handleClick(e) { 
                e.preventDefault();
                //console.log('The link was clicked.' + key);
                document.getElementById(key).style.visibility = "hidden"; 
            }                                               
                return (
                    <div className="images" id={key}> 
                        <br /> 
                        <div>{task.text}</div>
                        <br /> 
                        <img src={iconObj[task.logoName]} alt=" " onClick={handleClick}/>  
                    </div>
                )
            });

            return (
                <div>
                    {listTasks}      
                </div>
            )
}

export default Tasks;



        