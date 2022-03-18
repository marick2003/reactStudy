import React, { useState } from 'react';
import Todos from "../component/Todos";
const Test = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
    return <>
      <h1>Test</h1> 
      <Todos todos={todos} />
      </>;
  };
  
  export default Test;