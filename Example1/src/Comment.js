import React from 'react';
import {useState,useEffect,Fragment} from 'react';
import axios from 'axios';

function Comment(props) {

    const [comments,SetComments] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            console.log(response);
            SetComments(response.data);

        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div>
            <h3>Comments:</h3>
            {comments ? 
                (<table style={{border : '1px solid black'}}>
                    <thead>
                        <tr>
                        <th>postId</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        </tr>
                     </thead>
                    <tbody>
                        {
                        comments.filter(data => data.postId === props.id).map((data) => {
                            return(
                            <tr>
                                <td>{data.postId}</td>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                            </tr>
                            )
                        })
                        }
                    </tbody>
                </table>) : (<Fragment ></Fragment>)
            }
        </div>
    )
}

export default Comment
