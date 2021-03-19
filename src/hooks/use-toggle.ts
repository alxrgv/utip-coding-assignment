import { useReducer } from "react";

const toggler = (s: boolean) => !s;

function useToggle(defaultValue: boolean) {
  return useReducer(toggler, defaultValue);
}

export { useToggle };
