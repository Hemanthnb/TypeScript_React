import React from "react";

export default function OldSchool__FunctionKeyword({
  variable,
  obj,
  arr,
}: {
  variable: number;
  obj: {
    name: string;
    age: number;
  };
  arr: string[];
}) {
  return (
    <>
      <div>variable is {variable}</div>;
      <div>
        obj is {obj.name} {obj.age}
      </div>
      <div>
        {arr.map((key, index) => (
          <span>
            value is {key} and index is {index}
          </span>
        ))}
      </div>
    </>
  );
}
