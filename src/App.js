import { useState } from 'react';
import './App.css';
import InputForm from './conponents/InputForm';
import Title from './conponents/Title';
import TodoList from './conponents/TodoList';

function App() {
  const [taskList, setTaskList] = useState([]);
  
  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList}/>
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
