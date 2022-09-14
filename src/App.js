import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Input from './components/input/Input';
import TodoItem from './components/todoItem/TodoItem';
import { selectTodoList } from './features/todoSlice';


function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <div className='container'>
        <Input />
        <div className='todo-container'>
          {
            todoList.map(item => (
              <TodoItem 
                name = {item.name}
                done = {item.done}
                id = {item.id}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
