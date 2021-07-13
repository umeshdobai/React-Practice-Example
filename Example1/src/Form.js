import React from 'react';
import {useState,useEffect} from 'react';
import Table from './Table';

function Form() {

    const [namevalue, setNameValue] = useState();
    const [agevalue, setAgeValue] = useState();
    const [valueObj, setValueObj] = useState([{}]);

    let vakueArr = [{name : "", age: ""}];

    let onButtonClick = () => {
        console.log("Button is clicked",namevalue, agevalue);
        //vakueArr = valueObj;
        vakueArr.push({name: namevalue, age: agevalue});
        setValueObj(prev => [...prev,{name: namevalue, age: agevalue}]);
        //vakueOfArr.push({Name: namevalue, Age: agevalue});
        //console.log(vakueOfArr);
    }
    
    let onNameValueChange = (event) => {
        //console.log(event.target.valu);
        setNameValue(event.target.value);
    }

    let onAgeValueChange = (event) => {
        setAgeValue(event.target.value);
        //console.log(event.target.value);
    }

    return (
        <div>
            <div>
                Name : <input type="text" name = "name" value={namevalue} onChange={onNameValueChange}/><br/>
                Age : <input type="number"  name= "age" value={agevalue} onChange={onAgeValueChange}/><br/>
                <button onClick={onButtonClick}>submit</button>
            </div>
            <Table value={valueObj}/>
        </div>
    )
}

export default Form
