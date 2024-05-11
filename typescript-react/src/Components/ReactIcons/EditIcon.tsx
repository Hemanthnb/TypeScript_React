import React from "react";
import { todoItem, todoItemConfig } from "../../shared/interfaces/interfaces";
import { AiOutlineEdit } from "react-icons/ai";
export interface todoObj extends todoItem, todoItemConfig {}

interface todoLists {
  todoObj: todoObj,
  editTodo: (id: string) => void;
}

const EditIcon: React.FC<todoLists> = ({ todoObj, editTodo}): JSX.Element => {
  return (
    <AiOutlineEdit
      onClick={() => editTodo(todoObj.id)}
      className={`icon  ${todoObj.displayEdit ? "block" : "hidden"}`}
    />
  );
};

export default EditIcon;
