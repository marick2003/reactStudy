import React, { useState ,useEffect} from 'react';
import Todos from "../component/Todos";
import Form from "../component/Form";
const Test = (props) => {
  const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];
  const [tasks, setTasks] = useState(DATA);
  const taskList = tasks.map(task => (
    <Todos
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    )
  );
  useEffect(()=>{
    console.log('useEffect');

  });
  function addTask(str) {
    console.log(str);
    const newTask = { id: 'todo-'+(tasks.length+1), name: str, completed: false };
    setTasks([...tasks, newTask]);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  function editTask(id,newName){
    const editedTaskList  = tasks.filter(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList );
  }
    return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form addTask={addTask} />
        <div className="filters btn-group stack-exception">
        </div>
        <h2 id="list-heading">{tasks.length} tasks remaining</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    );
  };
  
  export default Test;