import { useCallback } from 'react'
import { nanoid } from 'nanoid';

import useLocalStorage from './hooks/useLocalStorage';

import Form from './components/Form';
import { MemoizedTodo as Todo } from './components/Todo';

import './App.css'

interface Todo {
  id: string,
  name: string,
  completed: boolean,
}

function App() {
  
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

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
  }, [todos, setTodos]);

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
