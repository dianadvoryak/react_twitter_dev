import React, { useRef, useState } from 'react'
import { Container } from '../../components/Container/Container'
import classes from './News.module.scss'
import { useUserProfileContext } from '../../context/UserContext';
import { useGetPostsQuery } from '../../redux';
import { ItemTwitter } from '../../components/ItemTwitter/ItemTwitter';
import { useObserver } from '../../hooks/useObserver';

export const News = () => {
  const [posts, setPosts] = useState(4); 
  const {data = [], isLoading} = useGetPostsQuery(posts)
  const UserProfile = useUserProfileContext()
  const lastElement = useRef()
  

  useObserver(lastElement, isLoading, () => setPosts(prev => prev+1))

  

  if(isLoading) return <h1 className={classes.loading}>Loading...</h1>

  return (
    <Container>
      <div className={classes.wrapper}>
        {
          data
          .map(item => (
            <ItemTwitter key={item.id}>
              {item}
            </ItemTwitter>
          ))
        }
        <div ref={lastElement} style={{height:5, background:'#C4CEEF'}}/>
      </div>
    </Container>
  )
}