import React from 'react';
import classes from './Comment.module.css';


export default (props) => {
    return (
        <div className={classes.comment}>
            <h4>{props.comment.author}</h4>
            <p>{props.comment.content}</p>
        </div>
    );
}