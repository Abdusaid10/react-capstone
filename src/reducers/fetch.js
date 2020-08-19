import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, /* CHANGE_AREA */} from "../actions/types";

const initialState = {
  loading: false,
  meals: [],
  error: '',
  area: 'American',
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      console.log("payload",action.payload)
      return {
        ...state,
        loading: false,
        meals: action.payload,
        error: '',
        area: action.area,
      };
    case FETCH_FAILURE:
      return {
        loading: false,
        meals: [],
        error: action.payload,
      };
    // case CHANGE_AREA:
    //   return {
    //     ...state,
    //     loading: false,
    //     meals: action.payload,
    //     error: '',
    //     area: action.area,
    //   }
    default:
      return state;
  }
}

export default fetchReducer;
