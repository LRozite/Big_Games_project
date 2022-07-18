import { combineReducers } from 'redux';



import reviewReducer from './reviewReducer';



const rootReducer = combineReducers ({    
    rootReducer_Reviews: reviewReducer
});

export default rootReducer;

