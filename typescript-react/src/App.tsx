import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { type } from "os";
import { promises } from "dns";
import Todos from "./Components/Todos";
import { v4 as uuidv4 } from "uuid";
function App(): JSX.Element {

  interface todoObj {
    todo: string;
    id: string;
    property: string,
    displayEdit:boolean,
    displayDone:boolean
  }

  const [todoList, setTodoList] = useState<todoObj[]>([]);
  const [todo, setTodo] = useState<string>("");

  const setTodoOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: todoObj = {
      todo: todo,
      id: uuidv4(),
      property: "amber",
      displayEdit:true,
      displayDone:true
    };
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    setTodo("");
    console.log(newTodo);
  };

  const deleteTodo = (id: string): void => {
    setTodoList((prevTodoItem) =>
      prevTodoItem.filter((prevTodo) => prevTodo.id !== id)
    );
  };

  const doneTodo = (id: string): void => {
    setTodoList(prevTodoItem=>prevTodoItem.map(todo=>{
      if (todo.id === id) {
        return { ...todo, property: 'green', displayDone:false, displayEdit:false };
      }
      return todo;
    }));

    // setTodoList(prevTodoList =>
    //   prevTodoList.map(todo => {
    //     if (todo.id === id) {
    //       return { ...todo, property: 'green' };
    //     }
    //     return todo;
    //   })
    // );
    console.log(todoList)
  };

  return (
    <>
      <div className="flex-col justify-center items-center bg-blue-950 w-full p-4">
        <div className="flex-col justify-center items-center w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="w-full flex justify-between">
            <input
              className="input_box p-4 w-2/3"
              placeholder="enter todo"
              onChange={setTodoOnChange}
              value={todo}
            />
            <button
              type="submit"
              className="p-2 bg-blue-600 rounded-xl text-white"
            >
              click here
            </button>
          </form>
          <Todos todoList={todoList} deleteTodo={deleteTodo} doneTodo={doneTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
