import { type } from "os";

type obj = {
  name: string;
  age: number;
};

type prop = {
  obj: obj;
  variable: number;
  arr: string[];
};

const ArrowFunction: React.FC<prop> = ({ obj, variable, arr }): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default ArrowFunction;