import React, {useRef, useState } from 'react'
import { useGetPostsQuery } from '../../redux'
import { ItemTwitter } from '../ItemTwitter/ItemTwitter';
import { useUserProfileContext } from '../../context/UserContext';
import classes from './MyTwittes.module.scss'
import { useObserver } from '../../hooks/useObserver';

export const MyTwittes = () => {
  const [posts, setPosts] = useState(1)
  const {data = [], isLoading} = useGetPostsQuery(posts)
  const UserProfile = useUserProfileContext()
  const lastElement = useRef()
  
  useObserver(lastElement, isLoading, () => setPosts(prev => prev+1))
  

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
      <div ref={lastElement} style={{height:5, background:'#C4CEEF'}}/>
    </div>
  )
}

