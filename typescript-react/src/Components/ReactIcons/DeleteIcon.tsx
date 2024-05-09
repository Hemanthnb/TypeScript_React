import React from "react";
import './ReactIcons.css'
import { todoItem } from '../../shared/interfaces/interfaces';
import {AiOutlineDelete} from  'react-icons/ai'
interface todoLists{
  todoItem:todoItem,
  deleteTodo:(todoId:string)=>void
}

const DeleteIcon:React.FC<todoLists>=({todoItem,deleteTodo}):JSX.Element=>{
 
    return(
      <AiOutlineDelete onClick={()=>deleteTodo(todoItem.id)} className="icon" />
    )
}
export default DeleteIcon