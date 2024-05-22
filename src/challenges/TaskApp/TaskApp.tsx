import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';
import { useImmer } from 'use-immer';

interface Todo {
  id: number,
  title: string,
  done: boolean
}

let nextId = 3;
const initialTodos: Todo[] = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, updateTodos] = useImmer(
    initialTodos
  );

  function handleAddTodo(title: string) {
    updateTodos(draft=> {
      draft.push({
        id: nextId++,
        title: title,
        done: false
      })
    })
  }

  function handleChangeTodo(nextTodo: Todo) {
    updateTodos(draft=>{
      const todo = draft.find(t=> t.id === nextTodo.id)
      if(todo){
        todo.title = nextTodo.title
        todo.done = nextTodo.done
      }
    })
  }

  function handleDeleteTodo(todoId: number) {
    updateTodos(draft=>{
      const index = draft.findIndex(t=> t.id === todoId)
      const include = index !== -1;
      if(include){
        draft.splice(index, 1)
      }
    })
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
