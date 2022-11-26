import React, { useState } from 'react'
import { useGetPostsQuery } from '../../redux'
import { ItemTwitter } from '../ItemTwitter/ItemTwitter';
import { useUserProfileContext } from '../../context/UserContext';
import classes from './MyTwittes.module.scss'

export const MyTwittes = () => {
  const [posts, setPosts] = useState('');
  const {data = [], isLoading} = useGetPostsQuery(posts)
  const UserProfile = useUserProfileContext()
  
  if(isLoading) return <h1 className={classes.loading}>Loading...</h1>

  return (
    <div>
      {
        data
        .filter(item => item.userId == UserProfile)
        .map(item => (
          <ItemTwitter key={item.id}>
            {item}
          </ItemTwitter>
        ))
      }
    </div>
  )
}