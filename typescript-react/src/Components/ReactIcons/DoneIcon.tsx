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
    // <svg
    //   stroke="currentColor"
    //   fill="currentColor"
    //   version="1.2"
    //   baseProfile="tiny"
    //   viewBox="0 0 24 24"
    //   height="2em"
    //   width="2em"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={` icon ${todoObj.displayDone? "block":"hidden"}`}
    //   onClick={()=>doneTodo(todoObj.id)}

    // >
    //   <path d="M11 20c-.801 0-1.555-.312-2.121-.879l-4-4c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.133 3.109-1.133 4.242 0l1.188 1.188 3.069-5.523c.526-.952 1.533-1.544 2.624-1.544.507 0 1.012.131 1.456.378.7.39 1.206 1.028 1.427 1.798.221.771.127 1.581-.263 2.282l-5 9c-.454.818-1.279 1.384-2.206 1.514-.139.019-.277.029-.416.029zm-4-8c-.268 0-.518.104-.707.293s-.293.439-.293.707.104.518.293.707l4 4c.223.221.523.33.844.283.312-.043.586-.232.737-.504l5-9c.13-.233.161-.503.088-.76-.073-.257-.243-.47-.478-.6-.473-.264-1.101-.078-1.357.388l-4.357 7.841-3.062-3.062c-.19-.189-.44-.293-.708-.293z"></path>
    // </svg>
    <MdDone onClick={()=>doneTodo(todoObj.id)} className={` icon ${todoObj.displayDone? "block":"hidden"}`}/>
  );
};

export default DoneIcon;
