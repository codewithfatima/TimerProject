import React, { useState } from 'react';
import { MdEdit , MdDelete }  from 'react-icons/md'
import './to.css'

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () =>{
    if (task) {
      if (editingIndex !== null) {
        const updatedTasks = tasks.map((t, index) => (index === editingIndex ? task : t));
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask('');
  }
  }

   
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEditTask = (index) =>{
      setTasks([tasks[index]]);
      setEditingIndex(index);
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', borderRadius:'5px', padding:'5px', textAlign: 'center', backgroundColor:'white' }}>
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Add a new task"
        style={{ padding: '10px', width: '50%' }}
      />
      <button className='btn'  style={{ padding: '10px', width:'15%' }} onClick={handleAddTask} >
           {editingIndex !== null ? 'Update Task' : 'Add Task'}   
      </button>

      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ backgroundColor:'blue', borderRadius:'5px'}}>
            {t}
              <button onClick={() => handleDeleteTask(index)} style={{ float:'right',marginTop:'-10px' ,background: 'none', border: 'none', cursor: 'pointer' }}>
                <MdDelete  size={20} color="red" />
              </button>
              <button onClick={() => handleEditTask(index)} style={{ float:'right', marginTop:'-10px' , background: 'none', border: 'none', cursor: 'pointer' }}>
                <MdEdit size={20} color="green"  />
              </button>
          </li>

        ))}
      </ul>
    </div>
  );
};

export default TodoList;
