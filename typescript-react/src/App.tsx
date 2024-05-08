import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { type } from "os";
import { promises } from "dns";
import Todos from "./Components/Todos";
import { v4 as uuidv4 } from "uuid";
import EditModule from "./Components/EditTodo/EditTodoList";
import {
  todoItem,
  todoItemConfig,
} from "./shared/interfaces/interfaces";

export interface todoObj extends todoItem, todoItemConfig {}

function App(): JSX.Element {
  //done
  const [todoList, setTodoList] = useState<todoObj[]>([]);
  
  const [todo, setTodo] = useState<string>("");
  const [editModuleVisible, setEditModuleVisible] = useState<boolean>(false);
  const [editModuleTodo, setEditModuleTodo] = useState<string | null>(null);
  const [editId, setEditId] = useState<string>("");

  const setTodoOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodoElement: todoObj = {
      todo: todo,
      id: uuidv4(),
      property: "amber",
      displayEdit: true,
      displayDone: true,
    };
    setTodoList((prevTodoList) => [...prevTodoList, newTodoElement]);
    setTodo("");
  };

  const deleteTodo = (id: string): void => {
    setTodoList((prevTodoItem) =>
      prevTodoItem.filter((prevTodo) => prevTodo.id !== id)
    );
  };

  const upDateTodoList = (todoString: string): void => {
    todoList.map((todo) => {
      if (todo.id === editId) {
        todo.todo = todoString;
        return;
      }
    });
    setEditModuleVisible(false);
  };

  const doneTodo = (id: string): void => {
    setTodoList((prevTodoItem) =>
      prevTodoItem.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            property: "green",
            displayDone: false,
            displayEdit: false,
          };
        }
        return todo;
      })
    );
    console.log(todoList);
  };

  const editTodo = (id: string): void => {
    setEditId(id);
    todoList.map((todo) => {
      if (todo.id === id) {
        setEditModuleTodo(todo.todo);
        setEditModuleVisible(true);
        return;
      }
    });
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
          <Todos
            todoList={todoList}
            deleteTodo={deleteTodo}
            doneTodo={doneTodo}
            editTodo={editTodo}
          />
          <EditModule
            editModuleVisible={editModuleVisible}
            editModuleTodo={editModuleTodo}
            upDateTodoList={upDateTodoList}
          />
        </div>
      </div>
    </>
  );
}

export default App;
