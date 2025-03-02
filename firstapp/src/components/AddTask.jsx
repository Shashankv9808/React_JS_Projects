import "../css/AddTask.css";
import { useState, useRef } from "react";
export const AddTask = ({ taskData, taskFunction }) => {
  const [inputLength, setinputLength] = useState("");
  const taskValue = useRef("");
  function handles(event) {
    setinputLength(event.target.value);
  }
  function addTaskButtonHandler() {
    var inputValue = taskValue.current.value;
    if (inputValue === '') {
      alert("Entered task name is empty");
      return;
    }
    taskData.push({ id: taskData.length + 1, name: inputValue, done: false });
    taskFunction([...taskData]);
    inputValue = '';
    setinputLength('');
  }
  return (
    <section className='addtask'>
      <label htmlFor='taskname'>Task Name:</label>
      <input type='text' id='taskname' placeholder='Task Name' autoComplete="off" onChange={handles} ref={taskValue} />
      <button id='addtask' type="submit" onClick={addTaskButtonHandler}>Add Task</button>
      <p>{inputLength.length}</p>
    </section>
  )
}
