import React, { Component } from 'react';

export default function ToDoList() {
	 const elements = ['Video Conf project', 'Rcloud IOS Icons', 'React ToDoList App', 'Material UI Project', 'Become React Developer', 'Become Amrish ka Boss'];

  const items = []

  for (const [index, value] of elements.entries()) {
    items.push(<li key={index}>{value}</li>)
  }
	
  return (
		<ul id="myUL">
			{items}
		</ul>
  )
}


	
