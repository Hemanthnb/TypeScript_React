import React, { useEffect, useState } from "react";
import DeleteIcon from "./ReactIcons/DeleteIcon";
import EditIcon from "./ReactIcons/EditIcon";
import DoneIcon from "./ReactIcons/DoneIcon";
import { todoItem, todoItemConfig } from "./shared/interfaces/interfaces";
export interface todoObj extends todoItem, todoItemConfig {}

interface todoLists {
  todoList: todoObj[];
  deleteTodo: (id: string) => void;
  doneTodo: (id: string) => void;
  editTodo: (id: string) => void;
}

const Todos: React.FC<todoLists> = ({
  todoList,
  deleteTodo,
  doneTodo,
  editTodo,
}): JSX.Element => {
  
  return (
    <>
      {todoList.map((todoObj) => (
        <div key={todoObj.id} className="flex  items-center">
          <p
            className={`text-center text-blue-950 ${
              todoObj.property === "green" ? "bg-green-400" : "bg-amber-300"
            } bg-amber-300  rounded-md p-4 w-2/3 my-3`}
          >
            {todoObj.todo}
          </p>

          <div className="icons flex mx-4">
            <EditIcon todoObj={todoObj} editTodo={editTodo} />
            <DeleteIcon todoItem={todoObj} deleteTodo={deleteTodo} />
            <DoneIcon todoObj={todoObj} doneTodo={doneTodo} />
          </div>
        </div> // Use div element for each todo item
      ))}
    </>
  );
};

export default Todos;
