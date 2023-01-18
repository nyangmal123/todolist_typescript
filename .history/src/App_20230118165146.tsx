import React, { FC } from 'react';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='header'></div>
      <input type='text' placeholder='Task...' />
      <input type='text' placeholder='Deadline (in Days)...' />
      <button>Add Task</button>
      <div className='todoList'></div>
    </div>
  );
};

export default App;
