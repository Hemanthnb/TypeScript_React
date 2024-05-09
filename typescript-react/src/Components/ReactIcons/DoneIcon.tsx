import React from "react";
import { todoItem, todoItemConfig} from "../../shared/interfaces/interfaces";
import {MdDone} from 'react-icons/md'
export interface todoObj extends todoItem, todoItemConfig{}

interface todoLists{
  todoObj:todoObj,
  doneTodo:(todoId:string)=>void
}
const DoneIcon: React.FC<todoLists> = ({todoObj,doneTodo}): JSX.Element => {

  
  return (
    
    <MdDone onClick={()=>doneTodo(todoObj.id)} className={` icon ${todoObj.displayDone? "block":"hidden"}`}/>
  );
};

export default DoneIcon;
