import React, { useState } from 'react';
import { Tooltip } from "./Tooltip";
import { useUpdate } from '../hooks/useUpdate';
import { useDelete } from '../hooks/useDelete';
import { useDeleteAll } from '../hooks/useDeleteAll';

export const DisplayTask = ({ data, setData }) => {

    const [editableTaskID, setEditableTaskID] = useState(null);
    const [editValue, setEditValue] = useState('');

    const handleTaskCompletion = (id, taskCompleted) => {
        console.log(id, taskCompleted);
        const newTasks = data.map((task) => {
            if (task.taskID === id) {
                task.isCompleted = taskCompleted;
                useUpdate({ updatedData: task });
            }
            return task;
        });
        console.log(newTasks);
        setData(newTasks);
    }

    const handleDelete = (id) => {
        const updatedTasklist = data.filter(task => task.taskID !== id);
        useDelete({ deleteData: { taskID: id, name: '', time: new Date().toISOString(), isCompleted: true } });
        setData(updatedTasklist);
    }

    const prepEditTask = (task) => {
        setEditValue(task.name);
        setEditableTaskID(task.taskID);
    }
    const handleEdit = (id) => {
        const updatedTasklist = data.map(task => {
            if (task.taskID === id) {
                task.name = editValue;
                useUpdate({ updatedData: task });
            }
            return task;
        });
        setData(updatedTasklist);
        setEditableTaskID(null);
    }

    const handelDeleteAllTask = () => {
        useDeleteAll();
        setData([]);
    }

    return (
        <section className="showTask">
            <div className='head'>
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>{data === null ? 0 : data.length}</span>
                </div>
                <button className='clearAll' onClick={() => handelDeleteAllTask()}>Remove All Tasks</button>
            </div>
            <ul>
                {data !== null && data.map(task => (
                    <li key={task.taskID} id={task.taskID} style={{ borderLeft: task.isCompleted ? '5px solid #49df13b9' : '5px solid #df1313a0' }}>
                        <p>
                            {editableTaskID === task.taskID ?
                                <input type='text' value={editValue} onChange={(e) => setEditValue(e.target.value)} /> : (<>
                                    <span className='name'>{task.name}</span>
                                    <span className='time'>{task.time}</span>
                                </>)
                            }
                        </p>
                        {editableTaskID === task.taskID ? (
                            <Tooltip text={'Submit Changes'}>
                                <i className='bi bi-check-all'
                                    onClick={() => handleEdit(task.taskID)}></i>
                            </Tooltip>
                        ) :
                            (
                                <Tooltip text={'Edit Task'}>
                                    <i className='bi bi-pencil-square'
                                        onClick={() => prepEditTask(task)}></i>
                                </Tooltip>
                            )}
                        {editableTaskID === task.taskID ? (<></>) : (
                            <>
                                <Tooltip text={'Delete Task'}>
                                    <i className='bi bi-trash' onClick={() => handleDelete(task.taskID)}></i>
                                </Tooltip>

                                <Tooltip text={task.isCompleted ? 'Mark task as Incomplete' : 'Mark task as Complete'}>
                                    <i className={task.isCompleted ? "bi bi-x-square-fill" : "bi bi-check-square-fill"}
                                        onClick={() => handleTaskCompletion(task.taskID, !task.isCompleted)}></i>
                                </Tooltip>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
}
