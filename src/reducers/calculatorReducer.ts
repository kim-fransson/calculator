import { Calculator } from "@/components/Calculator/Calculator";
import { evaluate } from "mathjs";

export type Calculator = {
  token: string;
  previousOperations: (string | Operation)[];
};

export const defaultCalculatorState: Calculator = {
  token: "0",
  previousOperations: [],
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
  const { token, previousOperations } = calculator;
  let currentToken = token;
  if (currentToken === "Error") {
    currentToken = "";
  }

  switch (action.type) {
    case "ADD_OPERAND": {
      const operand = action.operand;

      if (operand === "." && currentToken.includes(".")) {
        return calculator;
      } else if (currentToken === "0" && operand === ".") {
        return {
          ...calculator,
          token: currentToken + operand,
        };
      }

      if (operand === "0" && currentToken === "0") {
        return calculator;
      }

      return {
        ...calculator,
        token:
          currentToken === "0" && operand !== "."
            ? operand
            : currentToken + operand,
      };
    }
    case "ADD_OPERATION": {
      if (action.operation === "%") {
        return {
          ...calculator,
          token: evaluate(`${currentToken}%`).toString(),
        };
      } else if (!isOperation(currentToken)) {
        return {
          ...calculator,
          previousOperations: [
            ...previousOperations,
            currentToken,
            action.operation,
          ],
          token: "0",
        };
      }
      return calculator;
    }
    case "EVALUATE": {
      let res = "";
      const expression = previousOperations.join("") + currentToken;
      const mathjsExpression = expression.replace("x", "*");
      try {
        res = evaluate(mathjsExpression).toString();
      } catch (e) {
        res = "Error";
      } finally {
        res = res === "Infinity" ? "Error" : res;
      }
      return {
        ...calculator,
        token: res || currentToken,
        previousOperations: res ? [] : previousOperations,
      };
    }

    case "RESET":
      return defaultCalculatorState;

    case "CLEAR":
      return { ...calculator, token: "0" };
  }
};
