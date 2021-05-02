import React, { useState } from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Task from '../../components/Task/Task';
import taskModel from '../../model/TaskModel';
import './TasksPage.css'

function TasksPage() {
    const [addTask, setAddTask] = useState(null);
    const [tasks, setTasks] = 
    useState([new taskModel("email rachel", false,false), new taskModel("throw garbage", true,false)]);

    return (
        <Container className="p-tasks-page">
            <h4>Website todo</h4>
            <div className="add-task-container">
                <input className="add-task" placeholder="add new task" value={addTask} onChange={(e) => setAddTask(e.target.value)}></input>
            </div>
            <div className="tasks-container">
                {
                    tasks.map( task => 
                        {
                        <Row><Task text={task.text} isComplete={task.isComplete} isShared={false}/></Row>
                        })
                }
                
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