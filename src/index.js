import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import './styles/global.less';
import App from './App';
import configureRedux from './redux_store/configureRedux';


const store = configureRedux();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Provider store={store}>
    <App />
  </Provider>  
)
  
/*
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept(App, renderApp)
}
*/





/**
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/






 /**
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './styles/global.less';
import App from './App';
import RootReducer from './redux_store/reducers/rootReducer'




const reduxStore = createStore(
  RootReducer, //[] redux state reducers
  applyMiddleware( thunk.withExtraArgument({ }) ) /* [] honestly, don't really know why this is needed, something about [ Error: Actions must be plain objects. Use custom middleware for async actions. ] //////
);

ReactDOM.render(
  <Provider store={reduxStore}>
      <App /> 
  </Provider>,
  document.getElementById('root')
);

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}

*/