import React from 'react';
import './Task.css'

function Task({text, isComplete, isShared}) {
    return (
        <div className="c-task">
            <div className="is-completed"></div>
            <p className="h5"></p>
            <div className="is-hidden">
                remove/ share / edit
            </div>
        </div>
    );
}

export default Task;