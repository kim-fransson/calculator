import Display from "./displays/Display";
import ClearButton from "./buttons/ClearButton";
import OperatorButton from "./buttons/OperatorButton";
import NumericButton from "./buttons/NumericButton";
import EqualsButton from "./buttons/EqualsButton";
import { useReducer } from "react";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATOR: "choose-operator",
  CLEAR: "clear",
  EVALUATE: "evaluate",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }

      if (payload.digit === "." && state.currentOperand == null) {
        return {
          ...state,
          currentOperand: "0.",
        };
      }

      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATOR:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operator: payload.operator,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operator: payload.operator,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        currentOperand: null,
        operator: payload.operator,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.EVALUATE:
      if (
        state.operator == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operator: null,
        currentOperand: evaluate(state),
      };
  }
};

const evaluate = ({ currentOperand, previousOperand, operator }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) {
    return "";
  }

  let computation = "";
  switch (operator) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "/":
      computation = prev / current;
      break;
    case "x":
      computation = prev * current;
      break;
  }

  return computation.toString();
};

function Calculator() {
  const [{ currentOperand, previousOperand, operator }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="flex min-w-[334px] min-h-[394px] flex-col bg-gray-900 px-2 pb-2">
      <Display
        currentOperand={currentOperand}
        previousOperand={previousOperand}
        operator={operator}
      />
      <div className="grid grid-cols-4 grid-rows-5 bg-gray-900 gap-[1px]">
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
