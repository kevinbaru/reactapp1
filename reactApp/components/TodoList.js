import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo.js';

class TodoList extends React.Component {

  render(){
    return(
      <ul>
        {this.props.todos.map((todo) =><Todo key={todo.taskText} todo={todo}/> )}
      </ul>
    )
  }



}



export default TodoList;
