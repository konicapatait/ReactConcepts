import React, { Component } from 'react';
import axios from 'axios';

class HttpPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title:"",
            body:"",
            userId:""
        }
    }

    submitTheDetails = (e) => {
        e.preventDefault();
        axios
            .post("https://jsonplaceholder.typicode.com/posts", this.state)
            .catch(error => {
                console.log(error)
            })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { title, body, userId } = this.state;
        return (
            <div>
                <form onSubmit={this.submitTheDetails}>
                    <h3> Add Details</h3>
                    <div>Title
                        <input type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={this.changeHandler}>
                        </input>
                    </div>
                    <div>Body
                        <input type="text"
                            id="body"
                            name="body"
                            value={body}
                            onChange={this.changeHandler}>
                        </input>
                    </div>
                    <div>UserId
                        <input type="text"
                            id="userId"
                            name="userId"
                            value={userId}
                            onChange={this.changeHandler}>
                        </input>
                    </div>
                    <button onClick={this.submitTheDetails} >Submit</button>
                </form>
            </div>
        );
    }
}

export default HttpPost;