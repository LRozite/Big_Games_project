import { combineReducers } from 'redux';



import reviewReducer from './reviewReducer';
import productReducer from './productReducer';



const rootReducer = combineReducers ({    
    rootReducer_Reviews: reviewReducer,    
    rootReducer_Products: productReducer
});

export default rootReducer;

