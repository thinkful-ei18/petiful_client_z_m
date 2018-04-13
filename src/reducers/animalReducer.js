import { FETCH_CAT, DELETE_CAT } from '../actions/cat';
import { FETCH_DOG, DELETE_DOG, FETCH_ERROR } from '../actions/dog';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  dog: null,
  cat: null,
  error: null,
};

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAT:
      console.log('reducer fetching cat');
      return {
        ...state,
        cat: action.payload,
      };
    case DELETE_CAT:
      return state;
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
        dog: action.payload,
      };
    case DELETE_DOG:
      return state;
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  cat: catReducer,
  dog: dogReducer,
});

const middleware = applyMiddleware(thunk);

export default createStore(reducers, initialState, middleware);
