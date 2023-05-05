import React, { useState } from "react";

interface FormProps {
  addTodo: (task: string) => void,
}

function Form(props: FormProps) {
  const [name, setName] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.addTodo(name);
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="header-text" htmlFor="new-todo-input">
          What needs to be done?
        </label>
        <div className="todo__input-container space-children">
          <input
            type="text"
            id="new-todo-input"
            className="todo__input"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
          <button type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
