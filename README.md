# README

The following app was completed following Scotch.io's tutorial: 
[Create a Simple To-Do App With React](https://scotch.io/tutorials/create-a-simple-to-do-app-with-react).  It was built using the [create-react-app](https://github.com/facebookincubator/create-react-app) CLI.

## Notes
- I should read this article on React components: [Scotch.io](https://scotch.io/tutorials/reactjs-components-learning-the-basics)
- two types of components: Presentation Components and Container Components
- Simply put: presentation components do NOT have state, only props.  So if they are just
rendering HTML and don't need data of their own, then they can present it using props.  These
components can receive data in the form of props.
- functional components = presentation components = stateless components
- Container components have state meaning that it's typically at the top of the tree and 
makes sure that data is coordinated.
- It's good practice to draw-out what you'd like to build BEFORE you build it, especially with
component-based designs 
- Our app's main components are:
  - ToDo Form (the whole thing)
  - Title
  - Todo List
  - Todo Item
- Our first component, TodoForm, will be a stateless/functional/presentation component.
```javascript
import React from 'react';
// even though this is a functional component, I still had to import React

const TodoForm = ({addTodo}) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>+</button>
    </div>
  );
}


export default TodoForm;
```
- TodoForm has just one prop which is handler that handles the click event for adding a new
todo.
  - prop, handler, event
- the value of the input is passed to the input member using [React's ref](https://facebook.github.io/react/docs/refs-and-the-dom.html)
-

## Current Place
- So I finished the app was having some problems and getting an error.  It technically kind of works
but it looks wrong.  I need to make some tweaks to get it running properly and should probably put
some more personal touches on it.




