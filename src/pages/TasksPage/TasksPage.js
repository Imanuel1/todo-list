import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import Task from '../../components/Task/Task';
import taskModel from '../../model/TaskModel';
import './TasksPage.css'

function TasksPage() {
    const [addTask, setAddTask] = useState(null);
    const [tasks, setTasks] =
        useState([new taskModel("email rachel", false, false), new taskModel("throw garbage", true, false)]);
    const [filterType, setFilterType] = useState("All");


    function handleEnter(e){
        if(e.key === "Enter" && e.target.value ){
            setTasks(tasks.concat(new taskModel(addTask,false,false)))
            setAddTask("")
            console.log(e.key);
        }
    }
    
    function onTaskStatus(e){
        let index = e.target.getAttribute("index");
        tasks[index].isComplete = !tasks[index].isComplete;
        setTasks(tasks.concat([]));
    }

    function onRemoveTask(e){
        console.log(e); 
        let index = e.target.getAttribute("index");
        console.log(index); 
        setTasks(tasks.filter( task => task !== tasks[index]));
    }

    let filterTasks = tasks;

    if(filterType === "Active"){
        filterTasks = tasks.filter(task => task.isComplete===false );
    } else if (filterType === "Completed"){
        filterTasks = tasks.filter(task => task.isComplete===true );
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
                    filterTasks.map((task, index)=> {
                        return <Row><Task index={index} text={task.task} isComplete={task.isComplete} isShared={task.isShared} onTaskStatus={onTaskStatus} onRemove={onRemoveTask}/></Row>
                    })
                }

            </div>
            <div className="task-footer">
                <p className="h4">{tasks.length} items left</p>
                <Button variant="outline-primary" className="h4 to-the-right" onClick={(e) => setFilterType(e.target.textContent)}>All</Button>
                <Button variant="outline-primary" className="h4" onClick={(e) => setFilterType(e.target.textContent)}>Active</Button>
                <Button variant="outline-primary" className="h4" onClick={(e) => setFilterType(e.target.textContent)}>Completed</Button>
            </div>
        </Container>
    );
}

export default TasksPage;