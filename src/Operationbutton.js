import { ACTIONS } from "./App";

export default function OperationButton({ dispatch, operation }) {
  const handleClick = () => {
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
  };

  return <button onClick={handleClick}>{operation}</button>;
}
 