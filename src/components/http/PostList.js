import React, { Component } from 'react';
import axios from 'axios'
class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            errors: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                this.setState((prevState) => {
                    return {
                        errors: [error.message]
                    }
                })
            })


    }

    render() {
        const { posts, errors } = this.state
        return (
            <div>
                <h3>List of Post</h3>
                {
                    posts.length > 0 ? posts.map(post => <div key={post.id} >{post.title}</div>) : []
                }

                {
                    errors.length > 0 ? errors.map(error => <div key={error} >{error}</div>) : []
                }
            </div>
        );
    }
}

export default PostList;