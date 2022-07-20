import React, { useState } from 'react';
import {connect} from 'react-redux';
import './NewTodoForm.css';
import { addTodoRequest } from './thunks';

function NewTodoForm({todos, onCreatePressed}) {
  const [input, SetInput] = useState('');

  return (
    <div className="new-todo-form">
      <input type="text"
        className='new-todo-input'
        placeholder='Type your new to do here'
        value={input}
        onChange={e => SetInput(e.target.value)}
      />
      <button className='new-todo-button'
      onClick={()=>{
        const isDuplicate = 
          todos.some(todo=> todo.text === input);

        if(!isDuplicate){
          onCreatePressed(input);
          SetInput('');
        }
      }}
      >Create Todo</button>
    </div>
  )
}  
const mapStoreToProps = state =>({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>({
  onCreatePressed: text => dispatch(addTodoRequest(text)),
})

export default connect(mapStoreToProps, mapDispatchToProps )(NewTodoForm);