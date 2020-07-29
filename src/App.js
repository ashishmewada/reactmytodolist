import React from 'react';
import Header from './component/Header';
import ToDoList from './component/ToDoList';


export default function Template() {
  return (
    <div className='App'>
      <Header />
	  <ToDoList />
    </div>
  );
}	
