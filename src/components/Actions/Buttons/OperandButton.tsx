import { Operand } from "@/reducers/calculatorReducer";

export type OperandButtonProps = {
  operand: Operand;
  onClick: (operand: Operand) => void;
};

export const OperandButton = (props: OperandButtonProps) => {
  return (
    <button
      onClick={() => props.onClick(props.operand)}
      className={`btn text-2xl font-bold ${
        props.operand === "0" && "col-span-2"
      }`}
    >
      {props.operand}
    </button>
  );
};
