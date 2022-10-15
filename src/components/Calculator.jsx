import Display from "./displays/Display";
import ClearButton from "./buttons/ClearButton";
import OperatorButton from "./buttons/OperatorButton";
import NumericButton from "./buttons/NumericButton";
import EqualsButton from "./buttons/EqualsButton";
import { useReducer } from "react";
import { calculatorReducer } from "../calculator-reducer";

function Calculator() {
  const [{ currentOperand, previousOperand, operator }, dispatch] = useReducer(
    calculatorReducer,
    {}
  );

  return (
    <div className="flex min-w-[334px] min-h-[394px] flex-col bg-gray-900 px-2 pb-2">
      <div className="grid grid-cols-4 bg-gray-900 gap-[1px]">
        <Display
          currentOperand={currentOperand}
          previousOperand={previousOperand}
          operator={operator}
        />
        <ClearButton id="clear" dispatch={dispatch} />
        <OperatorButton id="divide" operator="/" dispatch={dispatch} />
        <OperatorButton id="multiply" operator="x" dispatch={dispatch} />
        <NumericButton id="seven" digit="7" dispatch={dispatch} />
        <NumericButton id="eight" digit="8" dispatch={dispatch} />
        <NumericButton id="nine" digit="9" dispatch={dispatch} />
        <OperatorButton id="subtract" operator="-" dispatch={dispatch} />
        <NumericButton id="four" digit="4" dispatch={dispatch} />
        <NumericButton id="five" digit="5" dispatch={dispatch} />
        <NumericButton id="six" digit="6" dispatch={dispatch} />
        <OperatorButton id="add" operator="+" dispatch={dispatch} />
        <NumericButton id="one" digit="1" dispatch={dispatch} />
        <NumericButton id="two" digit="2" dispatch={dispatch} />
        <NumericButton id="three" digit="3" dispatch={dispatch} />
        <EqualsButton id="equals" dispatch={dispatch} />
        <NumericButton
          id="zero"
          digit="0"
          dispatch={dispatch}
          className="col-span-2"
        />
        <NumericButton id="decimal" digit="." dispatch={dispatch} />
      </div>
    </div>
  );
}

export default Calculator;
