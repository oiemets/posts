import React from 'react';

export default class extends React.Component {
    state = {
        author: '',
        content: ''
    }

    getCurrentDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = (
            date.getMonth() + 1) < 10 ? 
                    '0' + (date.getMonth() + 1) 
                : 
                    date.getMonth() + 1;  
        const year = date.getFullYear();
        const time = ' ' + date.getHours() + ':' + date.getMinutes();
    
        return day + '-' + month + '-' + year + time;
    }
    
    inputHandler = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const date = this.getCurrentDate();

        this.setState({
            date,
            [name]: value
        })
    }

    postBtnHandler = () => {
        const state = this.state;
        if(state.author === '') {
            state.author = 'Anonymous'
            state.date = this.getCurrentDate();
        }
        this.props.writePost(state);
        this.setState({author: '', content: ''});
        this.props.backBtnHandler();
    }

    render() {
        return (
            <>
                <header>
                    <div className="arrow-post" onClick={this.props.backBtnHandler}/>
                    <h1>write your post</h1>
                </header>
                <div className="post-form">
                    <input
                        value={this.state.author} 
                        name="author" 
                        type="text" 
                        placeholder="your name" 
                        onChange={this.inputHandler}/>
                    <textarea 
                        value={this.state.content}
                        name="content" 
                        cols="50" 
                        rows="15" 
                        placeholder="do your thing here" 
                        onChange={this.inputHandler}/>
                    <button onClick={this.postBtnHandler}>publish</button>
                </div>
            </>
        );
    }
}