import React from 'react';
import {useState,useEffect} from 'react';
import Post from './Post';
import axios from 'axios';
import './TableStyle.css';

function User() {

    const [user, setuser] = useState(null);
    const [catagory ,setCatagory] = useState('Users');
    const [userId, setUserId] = useState();

    useEffect(() => {
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            console.log(response);
            setuser(response.data);
  
          })
          .catch(error => {
              console.log(error);
          })
    }, []);

    let clickHandler = (params) => {
        setCatagory('Posts');
        setUserId(params.id);
    }

    let onBackClick = () => {
        setCatagory('Users');
    }

    return (
        <div>
            <h3>{catagory}:</h3> 
            {user && catagory === 'Users' ? 
                (<table style={{border : '1px solid black'}}>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>userName</th>
                        <th>Email</th>
                        </tr>
                     </thead>
                    <tbody>
                        {
                        user.map((data) => {
                            return(
                            <tr>
                                <td  onClick={() => clickHandler(data)} style={{color : 'blue', cursor : 'pointer'}}>{data.id}</td>
                                <td>{data.name}</td>
                                <td >{data.username}</td>
                                <td>{data.email}</td>
                            </tr>
                            )
                        })
                        }
                    </tbody>
                </table>) : (<Post id={userId} onBackClick={onBackClick}/>)
            }
        </div>
    )
}

export default User
