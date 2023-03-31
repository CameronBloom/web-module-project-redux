import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer';

// combined reducers are available within state
const allReducers = combineReducers({
  movieReducer,
  favoriteReducer
})

export default allReducers;