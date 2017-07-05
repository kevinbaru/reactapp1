import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {

  render(){
    return(

          this.props.todo.completed?
          <li onClick={this.props.toggle} ><button onClick={this.props.xClick} type="button">X</button><strike>  {this.props.todo.task}</strike></li>:
          <li onClick={this.props.toggle} ><button onClick={this.props.xClick} type="button">X</button>  {this.props.todo.task}</li>


    )
  }



}





export default Todo;
