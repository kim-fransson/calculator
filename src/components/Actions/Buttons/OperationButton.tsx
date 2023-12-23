import { Operation } from "@/reducers/calculatorReducer";
import PercentIcon from "@icons/percent-icon.svg?react";
import DivisionIcon from "@icons/division-icon.svg?react";
import MultiplicationIcon from "@icons/multiplication-icon.svg?react";
import SubtractionIcon from "@icons/subtraction-icon.svg?react";
import AddIcon from "@icons/add-icon.svg?react";

export type OperationButtonProps = {
  operation: Operation;
  onClick: (operation: Operation) => void;
};

export const OperationButton = (props: OperationButtonProps) => {
  let icon: JSX.Element;
  let classes = "";

  switch (props.operation) {
    case "%":
      icon = <PercentIcon />;
      classes = "btn-secondary";
      break;
    case "÷":
      icon = <DivisionIcon />;
      classes = "btn-accent";
      break;
    case "×":
      icon = <MultiplicationIcon />;
      classes = "btn-accent";
      break;
    case "-":
      icon = <SubtractionIcon />;
      classes = "btn-accent";
      break;
    case "+":
      icon = <AddIcon />;
      classes = "btn-accent";
      break;
  }
  return (
    <button
      onClick={() => props.onClick(props.operation)}
      className={`btn text-2xl font-bold ${classes}`}
    >
      {icon}
    </button>
  );
};
