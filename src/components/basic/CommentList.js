import React from 'react';

class CommentList extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            comments: [
                { id: 123, comment: "Here is comment1" },
                { id: 456, comment: "Here is comment2" }
            ]
        };
    }

    componentDidMount() {
        // Subscribe to changes
        
      }
    
      componentWillUnmount() {
        // Clean up listener
        
      }

      handleChange  = () => {
        // Update component state whenever the data source changes
        this.setState({
          comments: [
            { id: 123, comment: "Here is comment1" },
            { id: 456, comment: "Here is comment2" }
        ]
        });
      }
    

    render() {
        return (
            <div>
                {this.state.comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
        );
    }
}