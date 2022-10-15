import Button from "./Button";
import { ACTIONS } from "../../actions";

function NumericButton({ id, digit, className, dispatch }) {
  return (
    <Button
      id={id}
      className={className}
      color="dark-gray"
      label={digit}
      type="cube"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    />
  );
}

export default NumericButton;
