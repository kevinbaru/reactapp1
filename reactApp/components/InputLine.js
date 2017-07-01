import React from 'react';
import ReactDOM from 'react-dom';


class InputLine extends React.Component{
  constructor(props){
    super(props)
    this.state={
      task:'',
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.taskChange=this.taskChange.bind(this);
  }


  taskChange(e){
    var task=e.target.value;
    this.setState({task:task})
  }
  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return(

    <form onSubmit={(e) => this.handleSubmit(e)} >
      <input
        type="text"
        placeholder="task"
        onChange={(e) => this.taskChange(e)}
        value={this.state.task}
       />
      <input type="submit"value="Add Todo"/>
    </form>

  )

  }

}










export default InputLine;
