import PreviousOperandDisplay from "./PreviousOperandDisplay";
import CurrentOperandDisplay from "./CurrentOperandDisplay";

function Display({ currentOperand, previousOperand, operator }) {
  return (
    <div className="flex flex-col">
      <PreviousOperandDisplay
        previousOperand={previousOperand}
        operator={operator}
      />
      <CurrentOperandDisplay id="display" currentOperand={currentOperand} />
    </div>
  );
}

export default Display;
