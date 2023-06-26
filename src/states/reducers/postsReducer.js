import {
    getAllPostsSuccess,
    getAllPostsFailed,
    getAllPostsPending
} from '../actions/index'

export function postsReducer (state = { posts: {}}, action){
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