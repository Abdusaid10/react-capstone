import { CHANGE_AREA} from "../actions/types";

const changeAreaReducer = (state = 'American', action) => {
  switch (action.type) {
    case CHANGE_AREA:
      return action.area;
    default:
      return state;
  }
}

export default changeAreaReducer;