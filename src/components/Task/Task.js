import React from 'react';
import './Task.css'

function Task({index, text, isComplete, isShared, onTaskStatus, onRemove}) {
    return (
        <div className="c-task">
            {isComplete?
                <img index={index}src={process.env.PUBLIC_URL+"/done.jpg"}  onClick={(e) => onTaskStatus(e)} className="complete"/>
                
                :<div index={index}  className="empty" onClick={(e) => onTaskStatus(e) }></div>}
            <p className={isComplete?"h4 line-through":"h4"}>{text}</p>
            <div index={index} className="is-hidden" onClick={(e) => onRemove(e)}>
                remove/ share / edit
            </div>
        </div>
    );
}

export default Task;