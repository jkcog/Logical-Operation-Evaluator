import React, { useState, useEffect } from "react";
import OperationBuilder from "./OperationBuilder";
import "./App.css";

type Args = { [argname: string]: boolean };
type Operation = any;

function App() {
  useEffect(() => {
    getOps();
  });

  const [a, setA] = useState(true);
  const [b, setB] = useState(true);
  const [d, setD] = useState(false);
  const [op, setOp] = useState(true);
  const [op2, setOp2] = useState(true);
  const [opName, setOpName] = useState("and");
  const [opName2, setOpName2] = useState("and");
  const [isNot, setIsNot] = useState(false);

  function andFunc(args: Args) {
    return args.a && args.b;
  }

  function orFunc(args: Args) {
    return args.a || args.b;
  }

  function nandFunc(args: Args) {
    return !(args.a && args.b);
  }

  function norFunc(args: Args) {
    return !(args.a || args.b);
  }

  function xorFunc(args: Args) {
    return (!args.a && args.b) || (args.a && !args.b);
  }

  function notFunc(args: Args) {
    return !args.a;
  }

  function evaluateOperation(operation: Operation, args: Args): boolean {
    if (operation === "and") {
      return andFunc(args);
    } else if (operation === "or") {
      return orFunc(args);
    } else if (operation === "nand") {
      return nandFunc(args);
    } else if (operation === "nor") {
      return norFunc(args);
    } else if (operation === "xor") {
      return xorFunc(args);
    } else {
      return notFunc(args);
    }
  }

  // function for updating the type of operation the based on the user's selection
  function updateOperation(operation: string, args: Args, id: number): void {
    if (id === 1) {
      setIsNot(false);
      setOpName(operation);
      if (operation === "not") {
        setIsNot(true);
      }
    } else {
      setIsNot(false);
      setOpName2(operation);
      if (operation === "not") {
        setIsNot(true);
      }
    }
  }

  // Set the first operation with the user's selection as the inputs.
  // Set the second operation with the first input being the result of the first operation.
  function getOps() {
    setOp(evaluateOperation(opName, { a: a, b: b }));
    setOp2(evaluateOperation(opName2, { a: op, b: d }));
  }

  // function for updating the operation input/s the based on the user's selection
  function updateArgs(arg: string) {
    if (arg === "a") {
      setA(!a);
    } else if (arg === "b") {
      setB(!b);
    } else if (arg === "d") {
      setD(!d);
    }
  }

  return (
    <div className="App">
      <div>
        <OperationBuilder
          updateOperation={updateOperation}
          updateArgs={updateArgs}
          opName={opName}
          isNot={isNot}
          a={a}
          b={b}
          op={op}
          op2={op2}
          id={1}
        />
        <OperationBuilder
          updateOperation={updateOperation}
          updateArgs={updateArgs}
          opName={opName2}
          isNot={isNot}
          a={op}
          b={d}
          op={op}
          op2={op2}
          id={2}
        />
      </div>
    </div>
  );
}

export default App;
