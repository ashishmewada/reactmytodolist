import React, { Component } from 'react';

export default function Header() {
  return (
	<div id="myDIV" className="header">
	  <h2>My To Do List</h2>
	  <input type="text" id="myInput" placeholder="Title..." />
	  <span onClick="newElement()" className="addBtn">Add</span>
	</div>
  )
}


	
