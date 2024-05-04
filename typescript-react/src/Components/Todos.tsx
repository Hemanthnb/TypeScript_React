import React, { useEffect, useState } from "react";
import DeleteIcon from "./ReactIcons/DeleteIcon";
import EditIcon from "./ReactIcons/EditIcon";
import DoneIcon from "./ReactIcons/DoneIcon";

interface todoItem {
  todo: string;
  id: string;
  property:string,
  displayEdit:boolean,
  displayDone:boolean
}

interface todoLists {
  todoList: todoItem[];
  deleteTodo: (id: string) => void;
  doneTodo:(id:string)=>void;
}

const Todos: React.FC<todoLists> = ({ todoList, deleteTodo, doneTodo, }): JSX.Element => {
  const [deleteTodoId, setDeleteTodoId] = useState<string | null>(null);

  // const deleteTodo = (id: string) => {
  //   // setDeleteTodoId(id);

  // };

  const [green, setGreen]=useState<boolean>(false);
  return (
    <>
      {todoList.map((ele, index) => (
        <div
          key={ele.id}
          className="flex  items-center"
        >
          <p className={`text-center text-blue-950 ${ele.property==='green' ? "bg-green-400" : "bg-amber-300"} bg-amber-300  rounded-md p-4 w-2/3 my-3`}>
            {ele.todo}
          </p>

          <div className="icons flex mx-4">
            <EditIcon todoItem={ele} />
            <DeleteIcon  todoItem={ele}  deleteTodo={deleteTodo} />
            <DoneIcon todoItem={ele} doneTodo={doneTodo} />
          </div>
        </div> // Use div element for each todo item
      ))}
    </>
  );
};

export default Todos;
