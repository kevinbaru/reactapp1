import React from 'react';
import ReactDOM from 'react-dom';

import InputLine from './InputLine.js';
import TodoList from './TodoList.js';
import  axios from 'axios';

const dbUrl = "http://localhost:3000/db";

//var dumpyData=[{taskText:"Review",completed:false}, {taskText:"Run",completed:true}, {taskText:"Laundry",completed:false}, {taskText:"Exercise",completed:true}];




class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      todos:[]
    }
    this.addTodo=this.addTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this);
    this.togglingTodo=this.togglingTodo.bind(this);
  }

  componentDidMount(){
    //this.setState({todos:[]})
    console.log('mounting...')
    axios.get(dbUrl+'/all')
    .then((response)=>{
      this.setState({todos:response.data})
    })
  }

  addTodo(task){
    // var tasks=this.state.todos;
    // tasks.push({taskText:task,completed:false});
    // this.setState({todos:tasks})
    var self=this;

    axios.post(dbUrl+'/add', {task: task})
    .then(function (response) {
      self.setState({ todos: self.state.todos.concat(response.data)});
    })
    .catch(function (error) {
      console.log(error)
    });

  }

  removeTodo(id){
    self=this;

    axios.post(dbUrl+'/remove', {id: id})
    .then(function (response) {
      if (response.data.success) {
        var tasks=self.state.todos
        // tasks.splice(response);
        // /  self.setState({todos:tasks})
        // console.log(tasks)
        // console.log(id);
        // console.log();
        self.setState({todos: tasks.filter(i => i._id != id)})
      } else {
        alert('failed to remove...')
      }
      // console.log('before?', self.state);
    })
    .catch(function (error) {
      console.log(error)
    });

    // console.log('after? ', this.state);


    // console.log("TODO....")
  }

  togglingTodo(id){

    console.log('dddd')
    self=this;
    // var tasks=this.state.todos;
    // tasks[index].completed=!tasks[index].completed;
    // this.setState({todos:tasks})
    axios.post(dbUrl+'/toggle',{id:id})
    .then((response)=>{
      // console.log(response);
      self.setState({todos:response.data})

    })
    .catch((error)=>{
      console.log(error)
    })



  }

  render(){
    return(
      <div>
      <InputLine submit={(task)=>this.addTodo(task)}/>
       <TodoList
         todos={this.state.todos}
         togglingTodo={(x)=>this.togglingTodo(x)}
         todoXClick={(x)=>this.removeTodo(x)} />
      </div>
    )
  }
}

export default TodoApp;
