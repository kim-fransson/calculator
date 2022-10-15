function PreviousOperandDisplay({ previousOperand, operator }) {
  return (
    <div className="min-h-[20px] bg-gray-900 text-orange-500 text-right text-xl pr-1 font-mono tracking-widest">
      {previousOperand} {operator}
    </div>
  );
}

export default PreviousOperandDisplay;
