import React from 'react';
import ReactDOM from 'react-dom';

import InputLine from './InputLine.js';
import TodoList from './TodoList.js';

var dumpyData=[{taskText:"Review",completed:false}, {taskText:"Run",completed:true}, {taskText:"Laundry",completed:false}, {taskText:"Exercise",completed:true}];




class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      todos:[]
    }

  }
  componentDidMount(){
    this.setState({todos:dumpyData})
  }
  render(){
    return(
      <div>
      <InputLine/>
       <TodoList todos={this.state.todos}/>
      </div>
    )
  }



}






export default TodoApp;
