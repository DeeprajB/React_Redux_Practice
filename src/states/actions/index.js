import axios from 'axios'

// Action Name Constants

export const getAllPostsPending = 'posts/getAll/pending'
export const getAllPostsSuccess = 'posts/getAll/success'
export const getAllPostsFailed = 'posts/getAll/failed'

export const getPostByIDPending = 'post/getPostByID/pending'
export const getPostByIDSuccess = 'post/getPostByID/success'
export const getPostByIDFailed = 'post/getPostByID/failed'

// Action Creator

export function getAllPosts(){
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

export function getAllPostSuccess(value){
    return {type: getAllPostsSuccess, payload: value}
}

export function getAllPostFailed(error){
    return {type: getAllPostsFailed, error: error}
}

export function getAllPostPending(){
    return {type: getAllPostsPending}
}

export function getPostByID(id){
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

export function getAPostByIDSuccess(value){
    return {type: getPostByIDSuccess, payload: value}
}

export function getAPostByIDFailed(error){
    return {type: getPostByIDFailed, error: error}
}

export function getAPostByIDPending(){
    return {type: getPostByIDPending}
}
