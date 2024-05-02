import React, { useState } from 'react';

const TodoForm = () => {
  const [todo, setTodo] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input_box"
          placeholder="enter todo"
          value={todo}
          onChange={handleInputChange}
        />
        <button type="submit">click here</button>
      </form>
    </div>
  );
};

export default TodoForm;
