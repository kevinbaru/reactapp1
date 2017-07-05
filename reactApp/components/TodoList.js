import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo.js';

class TodoList extends React.Component {

  render(){
    return(
      <ul>
        {this.props.todos.map((todo,index) =><Todo toggle={()=>this.props.togglingTodo(todo._id)} xClick={() => this.props.todoXClick(todo._id)} key={todo._id} todo={todo}/> )}
      </ul>
    )
  }



}



export default TodoList;
