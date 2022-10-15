import { ACTIONS } from "../../actions";
import Button from "./Button";

function ClearButton({ id, dispatch }) {
  return (
    <Button
      id={id}
      className={"col-span-2"}
      color="red"
      label="AC"
      type="horizontal"
      onClick={() => dispatch({ type: ACTIONS.CLEAR })}
    />
  );
}

export default ClearButton;
