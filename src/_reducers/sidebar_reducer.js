import { SIDEBAR_CLICKED } from "../_actions/types";
import { OVERLAY_CLICKED } from "../_actions/types";
export default function (state = { isClicked: false }, action) {
  console.log("action");
  switch (action.type) {
    case SIDEBAR_CLICKED:
      return { ...state, isClicked: true };
    case OVERLAY_CLICKED:
      return { ...state, isClicked: false };
    default:
      return { ...state };
  }
}
