export type OperandButtonProps = {
  operand: string;
  onClick: (operand: string) => void;
};

export const OperandButton = (props: OperandButtonProps) => {
  return (
    <button
      onClick={() => props.onClick(props.operand)}
      className="btn text-2xl font-bold"
    >
      {props.operand}
    </button>
  );
};
