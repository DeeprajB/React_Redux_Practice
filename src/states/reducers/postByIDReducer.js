import {produce} from "immer";

import {
    getPostByIDSuccess,
    getPostByIDFailed,
    getPostByIDPending
} from '../actions/index'

export function postByIDReducer(state = { post: {} }, action) {
    switch (action.type) {
      case getPostByIDPending:
        return produce(state, draftState => {
            draftState.pending = true
        });
        // return {...state, pending:true };
      case getPostByIDFailed:
        return produce(state, draftState => {
            draftState.error = action.error
            draftState.pending = false
        })
        //   return {...state, error:action.error, pending:false };
      case getPostByIDSuccess:
        return produce(state, draftState => {
            draftState.post = action.payload
            draftState.pending = false
        })
        // return { post: action.payload, pending: false };
      default:
        return state;
    }
}
