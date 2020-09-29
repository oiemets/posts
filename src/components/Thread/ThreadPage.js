import React from 'react';
import Post from '../Post/Post';
import classes from './ThreadPage.module.css';


export default class extends React.Component {
    render() {
        return (
            <>
                <header>
                    <h1>Posts</h1>
                    <button className={classes.writeBtn} onClick={this.props.writePostBtnHandler}>CREATE POST</button>
                </header>
                <main className={classes.main}>
                        {this.props.post.map((post, index) => {
                            return <Post 
                                post={post} 
                                key={index} 
                                index={index} 
                                postHandler={this.props.postHandler}/>
                        })}
                </main>
                <footer className={classes.footer}>
                    <h3>learning react app</h3>
                </footer>
            </>
        )
    }
}