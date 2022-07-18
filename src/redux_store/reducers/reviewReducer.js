import {REVIEWS} from '../constants'; //LOAD_BEGIN, LOAD_SUCCESS, LOAD_ERROR, RESET


const initialState = {
    data: [],
    loading: true,
    error: null
};


const reviewReducer = ( state = initialState, action) => {
    switch(action.type) {
      case REVIEWS.LOAD_BEGIN: {
        return {
          ...state,
          loading: true
        };
      }
      case REVIEWS.LOAD_SUCCESS: {
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      }
      case REVIEWS.LOAD_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.payload,
          data: []
        };
      }
      case REVIEWS.RESET:
        return { ...state, ...initialState }    

      default:
        return state;
    }
}
export default reviewReducer;