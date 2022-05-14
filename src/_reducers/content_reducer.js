import { SET_CONTENT } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_CONTENT:
      return { ...action.payload };
    default:
      return { ...state };
  }
}
