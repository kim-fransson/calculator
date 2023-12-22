import { useReducer } from "react";
import { OperandButton, ThemeController } from "../Actions";
import {
  Calculator as CalculatorState,
  calculatorReducer,
} from "@reducers/calculatorReducer";

const initialState = {
  display: "0",
} as CalculatorState;

export const Calculator = () => {
  const [calculator, dispatch] = useReducer(calculatorReducer, initialState);

  const handleAddValue = (value: string) => {
    dispatch({
      type: "ADD_VALUE",
      value,
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
        <button className="btn text-2xl font-bold"></button>
        <button className="btn text-2xl font-bold"></button>
        <button className="btn text-2xl font-bold"></button>
        <button className="btn text-2xl font-bold"></button>
        <button className="btn text-2xl font-bold"></button>
        <button className="btn text-2xl font-bold"></button>
        <OperandButton operand="7" onClick={handleAddValue} />
        <OperandButton operand="8" onClick={handleAddValue} />
        <OperandButton operand="9" onClick={handleAddValue} />
        <OperandButton operand="4" onClick={handleAddValue} />
        <OperandButton operand="5" onClick={handleAddValue} />
        <OperandButton operand="6" onClick={handleAddValue} />
        <OperandButton operand="1" onClick={handleAddValue} />
        <OperandButton operand="2" onClick={handleAddValue} />
        <OperandButton operand="3" onClick={handleAddValue} />
        <button className="btn text-2xl font-bold"></button>
        <OperandButton operand="0" onClick={handleAddValue} />
        <OperandButton operand="." onClick={handleAddValue} />
        <button className="btn btn-error text-2xl font-bold"></button>
      </div>
    </div>
  );
};
