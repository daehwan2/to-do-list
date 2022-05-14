import { SET_CONTENT } from "./types";
export const SetContent = (content) => {
  return {
    type: SET_CONTENT,
    payload: content,
  };
};
