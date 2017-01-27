import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
    	<div>
        	<h2>Welcome to React</h2>
        	<TodoForm />
        	<TodoList />
        </div>
    );
  }
}

export default App;