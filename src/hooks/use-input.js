import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    inputBlurHandler,
    inputChangeHandler,
    reset,
  };
};
export default useInput;
