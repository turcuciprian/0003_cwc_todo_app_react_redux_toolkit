import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  addTodo,
  changeTodo,
  removeTodo,
} from './todoSlice';
import styles from './Todo.module.css';

export function Todos() {
  const todos = useSelector(selectCount);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');


  return (
    <div>
      {todos.map((item, index) => {
        return <div key={'todo' + index} className={styles.todos}>
          <input type={'checkbox'} checked={item.checked} onChange={() => {
            dispatch(changeTodo(index))
          }} /> <span className={ item.checked ? styles.strike : ''}>{item.value}</span>
          - <button onClick={() => {
            dispatch(removeTodo(index))
          }}>Delete</button>
        </div>
      })}
      <p className={styles.addTodo}>
        Add new todo:<br />
        <input type='textbox' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch(addTodo({ value: newTodo, checked: false }));
            setNewTodo('');
          }

        }} />
      </p>
      {/* <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div> */}
    </div>
  );
}
