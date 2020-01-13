import React, { Component } from 'react';
import PostList from './PostList';
import HttpPost from './HttpPost';
/**
 * This component makes the HTTP request using axios libary.
 * 
 * 
 */
class HttpMain extends Component {
    render() {
        return (
            <div className="App">
                <HttpPost></HttpPost>
                <PostList></PostList>
            </div>
        );
    }
}

export default HttpMain;