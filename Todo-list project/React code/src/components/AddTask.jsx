import { useRef } from 'react';
import { useSave } from '../hooks/useSave';

export const AddTask = ({ data, setData }) => {
  const inputRef = useRef(null);
  const handleAddTask = () => {
    const newTask = {
      taskID: data.length === 0 ? 1 : data[data.length - 1].taskID + 1,
      name: inputRef.current.value,
      time: new Date().toISOString(),
      isCompleted: false
    }
    useSave({ newTask });
    inputRef.current.value = '';
    setData([...data, newTask]);
  }
  return (
    <section className="addTask">
      <input type="text" placeholder="Enter a task name" ref={inputRef} />
      <button onClick={() => handleAddTask()}> Add Task</button>
    </section>
  )
}
