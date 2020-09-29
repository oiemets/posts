import React from 'react';
import Post from '../Post/Post';


export default class extends React.Component {
    render() {
        return (
            <>
                <header>
                    <h1>Posts</h1>
                    <button className="write-btn" onClick={this.props.writePostBtnHandler}>CREATE POST</button>
                </header>
                <main className="main">
                    <div className="thread">
                        {this.props.post.map((post, index) => {
                            return <Post 
                                post={post} 
                                key={index} 
                                index={index} 
                                postHandler={this.props.postHandler}/>
                        })}
                    </div>
                </main>
                <footer className="footer">
                    <h3>learning react app</h3>
                </footer>
            </>
        )
    }
}