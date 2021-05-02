import React from 'react';
import './Task.css'

function Task({text, isComplete, isShared}) {
    return (
        <div className="c-task">
            <div className="is-completed">{isComplete?"V":"X"}</div>
            <p className="h4">{text}</p>
            <div className="is-hidden">
                remove/ share / edit
            </div>
        </div>
    );
}

export default Task;