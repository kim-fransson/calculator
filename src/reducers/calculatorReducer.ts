export type Calculator = {
  display: string;
};

export type CalculatorAction = AddValue;

export type AddValue = {
  type: "ADD_VALUE";
  value: string;
};

export const calculatorReducer = (
  calculator: Calculator,
  action: CalculatorAction,
) => {
  switch (action.type) {
    case "ADD_VALUE": {
      const currentDisplay = calculator.display;
      const value = action.value;
      switch (value) {
        case ".":
          if (!currentDisplay.includes(".")) {
            return { ...calculator, display: currentDisplay + value };
          }
          return calculator;
        default:
          return { ...calculator, display: currentDisplay + value };
      }
    }
  }
};
