import React from 'react';

interface TodoProps {
  id: string,
  name: string,
  completed: boolean,
  toggleTodoCompleted: (id: string) => void,
}

function Todo(props: TodoProps): React.ReactElement {
  return (
    <div className="todo__container space-children">
      <input
        id={props.id}
        type="checkbox"
        defaultChecked={props.completed}
        onChange={() => props.toggleTodoCompleted(props.id)}
      />
      <label htmlFor={props.id}>
        {props.name}
      </label>
    </div>
  );
}

export const MemoizedTodo = React.memo(Todo);
