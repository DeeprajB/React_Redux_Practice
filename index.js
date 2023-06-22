import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

// Action Name Constants
const getAllPostsPending = 'posts/getAll/pending'
const getAllPostsSuccess = 'posts/getAll/success'
const getAllPostsFailed = 'posts/getAll/failed'

const getPostByIDPending = 'post/getPostByID/pending'
const getPostByIDSuccess = 'post/getPostByID/success'
const getPostByIDFailed = 'post/getPostByID/failed'

// Store
const store = createStore(
    combineReducers({
      allPosts: postsReducer,
      postByID: postByIDReducer,
    }),
    applyMiddleware(logger.default, thunk.default)
  );
const history = [];

// Reducer
function postsReducer(state = { posts: {} }, action) {
    switch (action.type) {
      case getAllPostsPending:
        return {...state, pending:true };
      case getAllPostsFailed:
          return {...state, error:action.error, pending:false  };
      case getAllPostsSuccess:
              return { posts: action.payload, pending: false };
      default:
        return state;
    }
  }

function postByIDReducer(state = { post: {} }, action) {
    switch (action.type) {
      case getPostByIDPending:
        return {...state, pending:true };
      case getPostByIDFailed:
          return {...state, error:action.error, pending:false  };
      case getPostByIDSuccess:
              return { post: action.payload, pending: false };
      default:
        return state;
    }
}

// Action Creator
function getAllPosts(){
    return async (dispatch, getState) => {
        try {
            dispatch(getAllPostPending())
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            dispatch(getAllPostSuccess(data))
        } catch (error) {
            dispatch(getAllPostFailed(error.message))
        }
    }
}

function getAllPostSuccess(value){
    return {type: getAllPostsSuccess, payload: value}
}

function getAllPostFailed(error){
    return {type: getAllPostsFailed, error: error}
}

function getAllPostPending(){
    return {type: getAllPostsPending}
}

function getPostByID(id){
    return async (dispatch, getState) => {
        try {
            dispatch(getAPostByIDPending())
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            dispatch(getAPostByIDSuccess(data))
        } catch (error) {
            dispatch(getAPostByIDFailed(error.message))
        }
    }
}

function getAPostByIDSuccess(value){
    return {type: getPostByIDSuccess, payload: value}
}

function getAPostByIDFailed(error){
    return {type: getPostByIDFailed, error: error}
}

function getAPostByIDPending(){
    return {type: getPostByIDPending}
}

// Funtion to run.
setTimeout(() => {
    store.dispatch(getAllPosts())
    // store.dispatch(getPostByID(1));
  }, 2000);