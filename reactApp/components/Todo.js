import React from 'react';
import ReactDOM from 'react-dom';

// class Todo extends React.Component {
//
//   render(){
//     console.log(this.props);
//     return (
//
//           {this.props.todo.completed ?
//
//             <li onClick={this.props.toggle} >
//               <button onClick={this.props.xClick} type="button">X</button>
//               <strike>  {this.props.todo.task}</strike>
//             </li>
//           :
//             <li onClick={this.props.toggle} >
//               <button onClick={this.props.xClick} type="button">X</button>
//               {this.props.todo.task}
//             </li>
//           }
//     )
//   }
//
// }
//

const Todo = (props) => {
  if (props.todo.completed) {
    return (
      <li>
        <button onClick={props.xClick} type="button">X</button>
        <strike onClick={props.toggle} >  {props.todo.task}</strike>
      </li>
    )
  } else {
    return (
      <li>
        <button onClick={props.xClick} type="button">X</button>
          <span onClick={props.toggle}>{props.todo.task} </span>
      </li>
    )
  }
}



export default Todo;
