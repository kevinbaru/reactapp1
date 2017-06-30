import React from 'react';
import ReactDOM from 'react-dom';



var dumpyData=['Read', 'Bike', 'Shop', 'Cook', 'Sleep'];



class TodoList extends React.Component {

  render(){
    return(
      <ul>
        {this.props.dumpyData.map((todo) => <li key={todo}><button type="button">X</button> {todo}</li>)}
      </ul>
    )
  }



}



ReactDOM.render(<TodoList dumpyData={dumpyData}/>,
   document.getElementById('root'));
