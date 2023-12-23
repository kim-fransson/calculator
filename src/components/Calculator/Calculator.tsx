import { useReducer } from "react";
import { OperandButton, ThemeController } from "../Actions";
import {
  Operand,
  Operation,
  calculatorReducer,
  defaultCalculatorState,
} from "@reducers/calculatorReducer";
import { OperationButton } from "../Actions/Buttons/OperationButton";
import EqualsIcon from "@icons/equals-icon.svg?react";

export const Calculator = () => {
  const [calculator, dispatch] = useReducer(
    calculatorReducer,
    defaultCalculatorState,
  );

  const handleAddOperand = (operand: Operand) => {
    dispatch({
      type: "ADD_OPERAND",
      operand,
    });
  };

  const handleAddOperation = (operation: Operation) => {
    dispatch({
      type: "ADD_OPERATION",
      operation,
    });
  };

  const handleEvaluate = () => {
    dispatch({
      type: "EVALUATE",
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };

  const handleClear = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  return (
    <div className="max-w-md w-full bg-neutral/70 text-neutral-content md:rounded-3xl md:h-auto h-full">
      <div className="h-56 p-6 flex flex-col justify-end relative">
        <span className="absolute top-10 left-6 font-medium">Calc</span>
        <ThemeController />
        <div className="text-right text-5xl">
          <p className="truncate">{calculator.display}</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 p-6 rounded-3xl bg-neutral text-neutral-content">
        <button
          onClick={handleReset}
          className="btn text-2xl font-bold btn-error"
        >
          AC
        </button>
        <button
          onClick={handleClear}
          className="btn text-2xl font-bold btn-error"
        >
          C
        </button>
        <OperationButton operation="%" onClick={handleAddOperation} />
        <OperationButton operation="/" onClick={handleAddOperation} />

        <OperandButton operand="7" onClick={handleAddOperand} />
        <OperandButton operand="8" onClick={handleAddOperand} />
        <OperandButton operand="9" onClick={handleAddOperand} />
        <OperationButton operation="x" onClick={handleAddOperation} />

        <OperandButton operand="4" onClick={handleAddOperand} />
        <OperandButton operand="5" onClick={handleAddOperand} />
        <OperandButton operand="6" onClick={handleAddOperand} />
        <OperationButton operation="-" onClick={handleAddOperation} />

        <OperandButton operand="1" onClick={handleAddOperand} />
        <OperandButton operand="2" onClick={handleAddOperand} />
        <OperandButton operand="3" onClick={handleAddOperand} />
        <OperationButton operation="+" onClick={handleAddOperation} />

        <OperandButton operand="0" onClick={handleAddOperand} />
        <OperandButton operand="." onClick={handleAddOperand} />
        <button
          onClick={handleEvaluate}
          className="btn btn-error text-2xl font-bold"
        >
          <EqualsIcon />
        </button>
      </div>
    </div>
  );
};
