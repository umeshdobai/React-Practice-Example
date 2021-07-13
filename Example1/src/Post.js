import React, { Fragment } from 'react';
import {useState,useEffect} from 'react';
import Comment from './Comment';
import axios from 'axios';

function Post(props) {
    console.log(props);
    const [post, setPost] = useState(null);
    const [postId, setPostId] = useState(null);
    const [catagory,setCatagory] = useState('Posts');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            setPost(response.data);

        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    let clickHandler = (params) => {
        console.log(params);
        setPostId(params.id);
        setCatagory('Comments');
        setPost([params]);
    }

    let onBackClick = () => {
        props.onBackClick();
    }

    return (
        <div>
            <h style={{color : 'blue', cursor : 'pointer', float : 'right'}} onClick={onBackClick}>Back</h>
            <div> 
                {post ? 
                    (<table style={{border : '1px solid black'}}>
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>UserId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            post.filter(data => data.userId === props.id).map((data) => {
                                return(
                                <tr>
                                    <td onClick={() => clickHandler(data)} style={{color : 'blue', cursor : 'pointer'}}>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.userId}</td>
                                </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>) : (<Fragment ></Fragment>)
                }
            </div>
            <div>
                {catagory === 'Comments' ?
                    <Comment id={postId} /> : <Fragment></Fragment>
                }
                
            </div>
        </div>
    )
}

export default Post
