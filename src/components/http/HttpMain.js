import React, { Component } from 'react';
import PostList from './PostList';
import HttpPost from './HttpPost';
import HttpUsingHooks from './HttpUsingHooks';
/**
 * This component makes the HTTP request using axios libary.
 * 
 * 
 */
class HttpMain extends Component {
    render() {
        return (
            <div className="App">
                <h3 className="App-header">HTTP using Class</h3>
                <HttpPost></HttpPost>
                <PostList></PostList>
                <HttpUsingHooks></HttpUsingHooks>
            </div>
        );
    }
}

export default HttpMain;