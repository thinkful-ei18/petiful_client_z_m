import { FETCH_CAT, FETCH_DOG } from '../actions/index';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  dog: [],
  cats: [],
};

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAT:
      console.log('reducer fetching cat');
      return {
        ...state,
        cats: action.payload,
      };
    default: {
      return state;
    }
  }
};
const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG:
      console.log('reducer fetching dog');
      return {
        ...state,
        dogs: action.payload,
      };
    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  cats: catReducer,
  dogs: dogReducer,
});

const middleware = applyMiddleware(thunk);

export default createStore(reducers, initialState, middleware);
