import React from 'react';


export default (props) => {
    return (
        <div className="comment">
            <h4>{props.comment.author}</h4>
            <p>{props.comment.content}</p>
        </div>
    );
}