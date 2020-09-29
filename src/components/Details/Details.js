import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import classes from './Details.module.css';

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
                <div className={classes.arrow} onClick={this.props.backBtnHandler}/>
                <h1>details</h1>
            </header>
            <main className={classes.main}>
                <div className={classes.details}>
                    <h3>author: {this.props.post.author}</h3>
                    <h3>date: {this.props.post.date}</h3>
                    <h3>posted:</h3>
                    <p>{this.props.post.content}</p>
                </div>
                    <h3 className={classes.commentsTitle}>comments:</h3>
                    {this.props.post.comments.map((comment, index) => {
                        return <Comment comment={comment} key={index}/>
                    })}
                    <div className={classes.commentForm}>
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