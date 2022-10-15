function CurrentOperandDisplay({ id, currentOperand = "" }) {
  return (
    <div
      id={id}
      className="bg-gray-900 min-h-[35px] text-white text-3xl tracking-widest text-right pr-1 font-mono"
    >
      {currentOperand === "" ? 0 : currentOperand}
    </div>
  );
}

export default CurrentOperandDisplay;
