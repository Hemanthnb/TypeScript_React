import React, { useEffect, useState } from "react";
import DeleteIcon from "./ReactIcons/DeleteIcon";
import EditIcon from "./ReactIcons/EditIcon";
import DoneIcon from "./ReactIcons/DoneIcon";

interface todoItem {
  todo: string;
  id: string;
}

interface todoLists {
  todoList: todoItem[];
  deleteTodo:(id:string)=>void,
}

const Todos: React.FC<todoLists> = ({ todoList,deleteTodo }): JSX.Element => {
  const [deleteTodoId, setDeleteTodoId] = useState<string | null>(null);

  // const deleteTodo = (id: string) => {
  //   // setDeleteTodoId(id);
    
  // };

  return (
    <>
      {todoList.map((ele, index) => (
        // Use map instead of forEach
        <div
          key={ele.id}
          // style={{ display: ele.id === deleteTodoId ? "none" : "flex" }}
          className="flex  items-center"
        >
          <p className="text-center text-blue-950 bg-amber-300  rounded-md p-4 w-2/3 my-3">
            {ele.todo}
          </p>

          <div className="icons flex mx-4">
            <EditIcon />
            {/* <DeleteIcon todoId={ele.id} deleteTodoList={deleteTodo} /> */}
            <DeleteIcon todoItem={ele} deleteTodo={deleteTodo} />
            <DoneIcon />
          </div>
        </div> // Use div element for each todo item
      ))}
    </>
  );
};

export default Todos;
