import React from 'react'
import { useGetPostsQuery } from '../../redux'
import { ItemTwitter } from '../ItemTwitter/ItemTwitter'

export const LikedTwittes = () => {
  const {data = [], isLoading} = useGetPostsQuery('')

  return (
    <div>
      {
        [...data]
        .reverse()
        .filter(item => item.likes === 1)
        .map(item => (
          <ItemTwitter key={item.id}>
            {item}
          </ItemTwitter>
        ))
      }
    </div>
  )
}