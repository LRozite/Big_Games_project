import {PRODUCTS} from '../constants'; //LOAD_BEGIN, LOAD_SUCCESS, LOAD_ERROR, RESET


const initialState = {
    data: [],
    loading: true,
    error: null
};


const productReducer = ( state = initialState, action) => {
    switch(action.type) {
      case PRODUCTS.LOAD_BEGIN: {
        return {
          ...state,
          loading: true
        };
      }
      case PRODUCTS.LOAD_SUCCESS: {
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      }
      case PRODUCTS.LOAD_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.payload,
          data: []
        };
      }
      case PRODUCTS.RESET:
        return { ...state, ...initialState }    

      default:
        return state;
    }
}
export default productReducer;