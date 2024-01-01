import React, { useState } from 'react';

function TaskList({ tasks, onTaskRemove }) {
    return (
        <div className="task-list">
            {/* <h4>Tasks:</h4> */}
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <h5>{task}</h5>
                        <button className="task-button btn btn-primary" onClick={() => onTaskRemove(index)}>
                            Completed
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        const trimmedTaskInput = taskInput.trim();

        if (trimmedTaskInput !== '') {
            setTasks(prevTasks => [...prevTasks, trimmedTaskInput]);
            console.log("Task added");
            setTaskInput('');
        } else {
            console.log("Task not added");
        }
    };

    const removeTask = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="todolist position-absolute top-50 start-50 translate-middle">
                <h3 className='text-center title'>To-Do List</h3>

                {/* Display tasks in a box */}
                <div className='task-box'>
                    <TaskList tasks={tasks} onTaskRemove={removeTask} />
                </div>

                <div className='joblist'>
                    <div className='add-task'>
                        <input
                            type="text"
                            id="Task"
                            name="Task"
                            placeholder='Add Your Task'
                            value={taskInput}
                            onChange={(e) => setTaskInput(e.target.value)}
                        />
                    </div>
                    <div className='addbtn'>
                        <button
                            type="button"
                            className="btn btn-primary add"
                            onClick={addTask}
                        >
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToDo;
