import '../css/TaskCard.css'
export const TaskCard = ({ task, deleteTaskFunction, handleTaskCompletion }) => {
   
    return (
        <section className='taskcard'>
            <li key={task.id} className={task.done ? 'completed' : 'incomplete'}>
                {task.done ?
                    <button className="taskcompletion" onClick={() => handleTaskCompletion(task.id,!task.done)}>❌</button> :
                    <button className="taskcompletion" onClick={() => handleTaskCompletion(task.id,!task.done)}>✅</button>}
                <span>{task.id} - {task.name}</span>
                <button className='delete' id={task.id} onClick={() => deleteTaskFunction(task.id)} >Delete</button>
            </li>
        </section>
    )
}
