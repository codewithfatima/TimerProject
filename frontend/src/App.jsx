import React from 'react';
import {Route , Routes}  from 'react-router-dom'
// import Todo from './components/Todo';
// import Food from './components/Food';
// import Mealinfo from './components/Mealinfo';
// import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import './App.css'; 


const App = () => {
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Todo />} />
      <Route path='/food' element={<Food />} />
      <Route path='/:mealid' element={<Mealinfo />} />
      <Route path='/todolist' element={<TodoList />} /> */}
      <Route path='/navbar' element={<Navbar />} />
    </Routes>

   
    </>
  )
}

export default App;
