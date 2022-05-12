import { SET_USER } from "./types";
export const SetUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
