import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function HttpUsingHooks(props) {
    const [post, setPost] = useState({
        title: "",
        id: "1",
        body: ""
    })

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
            .then(response => {
                console.log("Response received")
                setPost(response.data)
            })
            .catch((error) => {
                console.log("Error while retreiving the data" + error)
            })
    }, [post.id])

    return (
        <div>
            <h3 className="App-header">HTTP using Hooks</h3>
            <input
                type="text"
                name="id"
                onChange={
                    (e) => setPost({ ...post, id: e.target.value })
                } />

            <div>ID: {post.id}</div>
            <div>TITLE: {post.title} -- BODY:  {post.body}</div>
        </div>
    );
}

export default HttpUsingHooks;