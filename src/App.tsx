import { useState, useCallback } from 'react'
import { nanoid } from 'nanoid';

import Form from './components/Form';
import { MemoizedTodo as Todo } from './components/Todo';

import './App.css'

interface Todo {
  id: string,
  name: string,
  completed: boolean,
}

function App() {
  
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todo: string) {
    const newTodo = { id: `todo-${nanoid()}`, name: todo, completed: false };
    setTodos([...todos, newTodo]);
  }

  const toggleTodoCompleted = useCallback((id: string) => {
    const updatedTodos = todos.map((todo) => {

      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }, [todos]);

  return (
    <>
      <Form addTodo={addTodo} />
      <div>
        {todos.map(todo => (
          <Todo
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            toggleTodoCompleted={toggleTodoCompleted}
          />
        ))}
      </div>
    </>
  )
}

export default App
