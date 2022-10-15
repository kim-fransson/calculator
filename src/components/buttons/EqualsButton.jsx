import { ACTIONS } from "../Calculator";
import Button from "./Button";

function EqualsButton({ id, dispatch }) {
  return (
    <Button
      id={id}
      className={"row-span-2"}
      color="blue"
      label="="
      type="vertical"
      onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
    />
  );
}

export default EqualsButton;
