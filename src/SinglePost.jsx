import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function SinglePost(props) {
    const { postId } = useParams()

    // SYNTAX: const [state, setState] = useState(initialState)
    const [post, setPost] = useState(null)


    const showPost = () => {
        if (!post) {
            return <h2>Loading...</h2>
        }
        else {
            return <Post postInfo={post}/>
        }
    }

    const getPost = async () => {
        const url = BACKEND_URL + `/api/posts/${postId}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.status === 'ok'){
            setPost(data.post)
        }
    };

    // SYNTAX: useEffect(function, array)
    // array is an array of dependecies.. meaning,
    // whenever a variable in the array changes, trigger the function call
    // If you want to mimic a MOUNT, leave the array empty
    // useEffect(()=>{}, [])
    useEffect(()=>{getPost()}, [])



    return (
        <div>
            {showPost()}
        </div>
    )
}
