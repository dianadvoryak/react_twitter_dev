import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
  endpoints: (build) => ({
    getPosts: build.query({
      query: (limit = '') => `posts?${limit && `_limit=${limit}`}`,
      providesTags: (result) => result
          ? [
              ...result.map(({ id }) => ({ type: 'Posts', id })),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    addPosts: build.mutation({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'Posts', id: 'LIST'}]
    }),
    updatePosts: build.mutation({
      query: (post) => ({
          url: `/posts/${post.id}`,
          method: 'PUT',
          body: post
      }),
      invalidatesTags: [{type: 'Posts', id: 'LIST'}]
    }),
    deletePosts: build.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{type: 'Posts', id: 'LIST'}]
    })
  })
})

export const {useGetPostsQuery, useAddPostsMutation, useUpdatePostsMutation, useDeletePostsMutation} = postsApi