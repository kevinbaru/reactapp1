import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {

  render(){
    return(

          this.props.todo.completed?
          <li ><button type="button">X</button><strike> {this.props.todo.taskText}</strike></li>:
          <li ><button type="button">X</button> {this.props.todo.taskText}</li>


    )
  }



}





export default Todo;
