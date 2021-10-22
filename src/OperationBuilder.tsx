import React from "react";

type Props = {
  updateOperation(operation: string, args: any, id: number): void;
  isNot: boolean;
  opName: string;
  updateArgs(arg: string): void;
  a: boolean;
  b: boolean;
  d?: boolean;
  op: boolean;
  op2: boolean;
  id: number;
};

// The GUI for constucting operations

const OperationBuilder: React.FC<Props> = (props) => {
  const args = { a: props.a, b: props.b };

  return (
    <div>
      <div className="actionSpace">
        {/* Buttons to select the operation */}
        <button
          className="button actionButton"
          onClick={() => props.updateOperation("and", args, props.id)}
        >
          And
        </button>
        <button
          className="button actionButton"
          onClick={() => props.updateOperation("nand", args, props.id)}
        >
          Nand
        </button>
        <button
          className="button actionButton"
          onClick={() => props.updateOperation("or", args, props.id)}
        >
          Or
        </button>
        <button
          className="button actionButton"
          onClick={() => props.updateOperation("nor", args, props.id)}
        >
          Nor
        </button>
        <button
          className="button actionButton"
          onClick={() => props.updateOperation("xor", args, props.id)}
        >
          Xor
        </button>
        <button
          className="button actionButton"
          onClick={() => props.updateOperation("not", args, props.id)}
        >
          Not
        </button>
      </div>
      <div className="inputSpace">
        {/* Select the input/s for the operation */}
        {props.isNot ? <h4>{props.opName}</h4> : null}
        {props.id === 1 ? (
          <button
            className="button inputButton"
            onClick={() => props.updateArgs("a")}
          >
            {props.a.toString()}
          </button>
        ) : null}
        {!props.isNot ? <h4>{props.opName}</h4> : null}
        {!props.isNot ? (
          <button
            className="button inputButton"
            onClick={() =>
              props.id === 1 ? props.updateArgs("b") : props.updateArgs("d")
            }
          >
            {props.b.toString()}
          </button>
        ) : null}
      </div>
      <span className="arrow">&#8595;</span>

      {/* Give the result for the relevant operation */}
      {props.id === 1 ? (
        <div>
          <h1 className={props.op === true ? "trueResult" : "falseResult"}>
            {props.op.toString()}
          </h1>
          <span className="arrow">&#8595;</span>
        </div>
      ) : (
        <h1 className={props.op2 === true ? "trueResult" : "falseResult"}>
          {props.op2.toString()}
        </h1>
      )}
    </div>
  );
};

export default OperationBuilder;
