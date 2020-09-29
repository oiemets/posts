import React, { Component } from 'react';
import Comment from '../Comment/Comment';

export default class extends Component {
    state = {
        author: '',
        content: ''
    }

    inputHandler = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    postBtnHandler = () => {
        const state = this.state;
        if(state.author === '') {
            state.author = 'Anonymous'
        }
        this.props.postCommentBtnHandler(state);
        this.setState({author: '', content: ''});
    }

    render() {
        return (
            <>
            <header>
                <div className="arrow" onClick={this.props.backBtnHandler}/>
                <h1 className="details-title">details</h1>
            </header>
            <main className="main">
                <div className="details">
                    <h3>author: {this.props.post.author}</h3>
                    <h3>date: {this.props.post.date}</h3>
                    <h3>posted:</h3>
                    <p>{this.props.post.content}</p>
                </div>
                <div className="comments-container">
                    <h3 className="comments-title">comments:</h3>
                    {this.props.post.comments.map((comment, index) => {
                        return <Comment comment={comment} key={index}/>
                    })}
                </div>
                    <div className="leave-your-comment">
                        <input 
                            name="author" 
                            value={this.state.author} 
                            type="text" 
                            placeholder="your name"
                            onChange={this.inputHandler}/>
                        <textarea 
                            name="content" 
                            value={this.state.content} 
                            cols="50" rows="10" 
                            placeholder="leave your comment here"
                            onChange={this.inputHandler}/>
                        <button onClick={this.postBtnHandler}>publish</button>
                    </div>

            </main>
            </>
        );
    }
}