import React from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import Task from '../../components/Task/Task';
import './TasksPage.css'

function TasksPage(props) {
    return (
        <Container className="p-tasks-page">
            <h4>Website todo</h4>
            <div className="add-task-container">
                <input className="add-task" placeholder="add new task" className="add-task"></input>
            </div>
            <div className="tasks-container">
                <Task text="homework" isComplete={false} isShared={false} />
            </div>
            <div className="task-footer">
                <p>items left</p>
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
            {/* <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup> */}

        </Container>
    );
}

export default TasksPage;