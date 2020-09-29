import React, { Component } from 'react';

export default class extends Component {

    postClickHandler = () => {
        this.props.postHandler(this.props.index);
    }

    render() {
        return (
            <div className="post" onClick={this.postClickHandler}>
            <h3>{this.props.post.author}</h3>
            <h3>{this.props.post.date}</h3>
            <h3>posted:</h3>
            <p>{this.props.post.desc}</p>
         </div>
        );
    }
}

