import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { postsReducer } from './reducers/postsReducer';
import { postByIDReducer } from './reducers/postByIDReducer';

export default createStore(
    combineReducers({
      allPosts: postsReducer,
      postByID: postByIDReducer,
    }),
    applyMiddleware(logger, thunk)
  );
