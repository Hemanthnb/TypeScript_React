// EditModule.tsx
import React, { useEffect, useState } from "react";

interface EditModuleProps {
  editModuleVisible: boolean;
  editModuleTodo: string | null;
  upDateTodoList: (todo: string) => void;
}

const EditModule: React.FC<EditModuleProps> = ({
  editModuleVisible,
  editModuleTodo,
  upDateTodoList,
}) => {
  const [todo, setTodo] = useState<string | null>(editModuleTodo);

  useEffect(() => {
    setTodo(editModuleTodo);
  }, [editModuleTodo]);

  const editTodo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    upDateTodoList(todo ?? "");
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 ${
        editModuleVisible ? "block" : "hidden"
      } `}
    >
      <div className="bg-white relative w-1/4 h-1/3 p-4 rounded-lg ">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col justify-between "
        >
          <h1 className=" font-semibold text-lg">Edit</h1>

          <label htmlFor="editTodo">Todo : </label>
          <input
            type="text"
            title="edit"
            id="editTodo"
            className="p-3 w-full block bg-slate-100 rounded-md"
            onChange={editTodo}
            value={todo ?? ""}
          />
          <div className="flex  justify-evenly">
            <button className=" p-2 rounded-md text-white bg-blue-500">
              Close
            </button>
            <button
              className="p-2 rounded-md text-white bg-blue-500"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModule;
