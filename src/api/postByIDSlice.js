import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postByIDApi = createApi({
    reducerPath: 'postByID',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPostByID: builder.query({
            query: (id) => `posts/${id}`
        })
    })
})

export const {
    useGetPostByIDQuery
} = postByIDApi