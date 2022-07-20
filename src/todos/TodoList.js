import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import { markTodoAsCompleted, removeTodo } from './actions';
import { displayAlert, loadTodos } from './thunks';
import { isLoading } from './reducers';

function TodoList({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos
}) {
  useEffect(()=>{
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, ind) => <TodoListItem todo={todo} key={ind} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
    </div>
  );
  return isLoading ? loadingMessage : content;
}

const mapStoreToProps = state => ({
  todos: state.todos,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
  startLoadingTodos: ()=> dispatch(loadTodos()),
})

export default connect(mapStoreToProps, mapDispatchToProps)(TodoList);
