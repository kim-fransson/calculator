import { Calculator } from "@/components/Calculator/Calculator";
import { evaluate } from "mathjs";

export type Calculator = {
  display: string;
  currentToken: string;
};

export const defaultCalculatorState: Calculator = {
  display: "0",
  currentToken: "0",
};

export type CalculatorAction =
  | AddOperand
  | AddOperation
  | Evaluate
  | Reset
  | Clear;

export type Operand =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | ".";
export type AddOperand = {
  type: "ADD_OPERAND";
  operand: Operand;
};

export type Operation = "%" | "/" | "x" | "-" | "+";
export type AddOperation = {
  type: "ADD_OPERATION";
  operation: Operation;
};

export type Evaluate = {
  type: "EVALUATE";
};

export type Reset = {
  type: "RESET";
};

export type Clear = {
  type: "CLEAR";
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isOperation = (value: any): value is Operation => {
  return ["%", "/", "x", "-", "+"].includes(value);
};

export const calculatorReducer = (
  calculator: Calculator,
  action: CalculatorAction,
) => {
  const { display, currentToken } = calculator;
  let currentDisplay = display;
  if (currentDisplay === "Infinity" || currentDisplay === "Error") {
    currentDisplay = "";
  }

  switch (action.type) {
    case "ADD_OPERAND": {
      const operand = action.operand;

      if (operand === "." && currentToken.includes(".")) {
        return calculator;
      } else if (currentToken === "0" && operand === ".") {
        return {
          ...calculator,
          display: currentDisplay + operand,
          currentToken: currentToken + operand,
        };
      }

      if (operand === "0" && currentToken === "0") {
        return calculator;
      }

      return {
        ...calculator,
        display: currentDisplay === "0" ? operand : currentDisplay + operand,
        currentToken:
          currentToken === "0" && operand !== "."
            ? operand
            : currentToken + operand,
      };
    }
    case "ADD_OPERATION": {
      if (action.operation === "%" && currentToken === "%") {
        return { ...calculator, display: currentDisplay + action.operation };
      } else if (isOperation(currentToken)) {
        console.log({
          currentDisplay,
          currentToken,
        });
        return {
          ...calculator,
          display: currentDisplay.slice(0, -1) + action.operation,
          currentToken: action.operation,
        };
      } else if (!isOperation(currentToken)) {
        return {
          ...calculator,
          display: currentDisplay + action.operation,
          currentToken: action.operation,
        };
      }
      return calculator;
    }
    case "EVALUATE": {
      let res = "";
      const parsedDisplay = currentDisplay.replace("x", "*");
      try {
        res = evaluate(parsedDisplay).toString();
      } catch (e) {
        res = "Error";
      }
      return {
        ...calculator,
        display: res || currentDisplay,
        currentToken: res || currentToken,
      };
    }

    case "RESET":
      return defaultCalculatorState;

    case "CLEAR":
      return { ...calculator, currentToken: "0" };
  }
};
