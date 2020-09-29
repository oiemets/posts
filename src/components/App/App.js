import React, { Component }from 'react';
import ThreadPage from '../Thread/ThreadPage';
import WritePostPage from '../WritePostPage/WritePostPage';
import Details from '../Details/Details';

import { testinArr } from '../testing-data';


export default class App extends Component {
    state = {
        writePostPage: false,
        currentPost: null,
        posts: [...testinArr],
    }

    postHandler = (index) => {
        this.setState({...this.state, currentPost: this.state.posts[index]});
    }

    backBtnHandler = () => {
        this.setState({...this.state, 
            writePostPage: false,
            currentPost: null
        });
    }

    writePostBtnHandler = () => {
        this.setState({...this.state, writePostPage: true})
    }

    writePost = (newPost) => {
        const posts = this.state.posts;
        posts.push({...newPost, 
            id: posts.length + 1, 
            desc: newPost.content.length < 100 ? newPost.content : newPost.content.slice(0, 100) + '...', 
            comments: []});
    }

    postCommentBtnHandler = (newComment) => {
        const state = this.state;
        const id = state.currentPost.id;
        const index = state.posts.findIndex((post) => post.id === id);
        state.posts[index].comments.push(newComment);

        this.setState({...state, currentPost: state.posts[index]})
    }

    render() {
        if(this.state.writePostPage) {
            return <WritePostPage 
                    writePost={this.writePost} 
                    backBtnHandler={this.backBtnHandler}/>
        } else if (this.state.currentPost) {
            return <Details 
                    post={this.state.currentPost} 
                    backBtnHandler={this.backBtnHandler}
                    postCommentBtnHandler={this.postCommentBtnHandler}/>
        } else {
            return <ThreadPage 
                    post={this.state.posts} 
                    btnHandler={this.backBtnHandler} 
                    postHandler={this.postHandler}
                    writePostBtnHandler={this.writePostBtnHandler}/>
        }
    }
}

