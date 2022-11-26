import React, { useState } from 'react'
import { Container } from '../../components/Container/Container'
import classes from './News.module.scss'
import { useUserProfileContext } from '../../context/UserContext';
import { useGetPostsQuery } from '../../redux';
import { ItemTwitter } from '../../components/ItemTwitter/ItemTwitter';

export const News = () => {
  const [posts, setPosts] = useState(''); 
  const {data = [], isLoading} = useGetPostsQuery(posts)
  const UserProfile = useUserProfileContext()

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
      </div>
    </Container>
  )
}