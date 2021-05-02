import React, { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import Task from '../../components/Task/Task';
import taskModel from '../../model/TaskModel';
import './TasksPage.css'

function TasksPage() {
    const [addTask, setAddTask] = useState(null);
    const [tasks, setTasks] =
        useState([new taskModel("email rachel", false, false), new taskModel("throw garbage", true, false)]);

    function handleEnter(e){
        if(e.key === "Enter" && e.target.value ){
            setTasks(tasks.concat(new taskModel(addTask,false,false)))
            setAddTask("")
            console.log(e.key);
        }
    }
    

    return (
        <Container className="p-tasks-page">
            <p className="h2">Website todo</p>
            <div className="add-task-container">
                <Form onSubmit={e => e.preventDefault()}>
                    <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="Add new task" value={addTask} 
                            onChange={(e) => setAddTask(e.target.value)} onKeyDown={(e) => handleEnter(e)}/>
                    </Form.Group>
                </Form>
            </div>
            <div className="tasks-container">
                {
                    tasks.map(task => {
                        return <Row><Task text={task.task} isComplete={task.isComplete} isShared={task.isShared} /></Row>
                    })
                }

            </div>
            <div className="task-footer">
                <p className="h4">{tasks.length} items left</p>
                <p className="h4 to-the-right">All</p>
                <p className="h4">Active</p>
                <p className="h4">Completed</p>
            </div>
        </Container>
    );
}

export default TasksPage;