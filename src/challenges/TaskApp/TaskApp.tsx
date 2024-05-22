import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

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
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title: string) {
    setTodos([...todos, {
      id: nextId++,
      title: title,
      done: false
    }])
  }

  function handleChangeTodo(nextTodo: Todo) {
    setTodos(todos.map(t=> {
      if(t.id === nextTodo.id){
        return {
          id: nextTodo.id,
          title: nextTodo.title,
          done:nextTodo.done
        }
      } else {
        return t
      }
    }))
  }

  function handleDeleteTodo(todoId: number) {
    setTodos(todos.filter(t=> t.id !== todoId))
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
