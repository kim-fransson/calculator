import Button from "./Button";
import { ACTIONS } from "../Calculator";

function OperatorButton({ operator, id, dispatch }) {
  return (
    <Button
      id={id}
      color="light-gray"
      label={operator}
      type="cube"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: { operator } })
      }
    />
  );
}

export default OperatorButton;
