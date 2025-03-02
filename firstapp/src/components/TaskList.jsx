import { useState } from 'react';
import '../css/TaskList.css';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import { AddTask } from "./AddTask";

export const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1', done: true },
        { id: 2, name: 'Task 2', done: false },
        { id: 3, name: 'Task 3', done: true }
    ]);
    const [show, setShow] = useState(true);
    function deleteTask(id) {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }
    function addTask() {
        const lastId = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id;
        tasks.push({ id: lastId + 1, name: 'Task ' + (lastId + 1), done: false });
        setTasks([...tasks]);
    }
    function handleTaskCompletion(id, taskCompleted) {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                task.done = taskCompleted;
            }
            return task;
        });
        setTasks(newTasks);
        addTask(id);
    }
    function addTask(id) {
        console.log(id);
    }
    return (
        <section className='tasklist'>
            <AddTask key='AddTasks' taskData={tasks} taskFunction={setTasks} />
            <ul>
                <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} deleteTaskFunction={deleteTask} handleTaskCompletion={handleTaskCompletion} />
                ))}
            </ul>
            <button className='add' onClick={addTask}>Add New Task</button>
            <BoxCard result='success'>
                <h1>Task List</h1>
            </BoxCard>
            <BoxCard result="alert">
                <p className="title">Offer Notification</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vel!</p>
            </BoxCard>

            <BoxCard result="warning">
                <p className="title">Cookie Notification</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, suscipit.</p>
            </BoxCard>
        </section>
    )
}
