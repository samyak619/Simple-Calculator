import { ACTIONS } from "./App";

export default function DigitButton({ dispatch, digit }) {
  const handleClick = () => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
  };

  return <button onClick={handleClick}>{digit}</button>;
}
 