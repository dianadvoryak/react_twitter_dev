import React, { useState } from 'react'
import classes from './UserProfile.module.scss'
import background from '../../assets/background.jpg'
import avatar from '../../assets/avatar.jpg'
import { Container } from '../../components/Container/Container'
import { MyTweets } from '../../components/MyTweets/MyTweets'
import { LikedTweets } from '../../components/LikedTweets/LikedTweets';

export const UserProfile = () => {
  const [tab, setTab] = useState(true);
  const setActive = (tab === true) ? classes.link  + ' ' + classes.active : classes.link
  
  return (
    <Container>
      <div className={classes.wrapper}>
        <img src={background} className={classes.background}/>
        <img src={avatar} className={classes.avatar}/>
        <h1 className={classes.name}>Name</h1>
        <h2 className={classes.username}>@username</h2>

        <div className={classes.tabs}>
        <div 
          onClick={() => setTab(true)} 
          className={setActive}
        >
          my tweets
        </div>
        <div 
          onClick={() => setTab(false)}
          className={setActive}
        >
          liked tweets
          </div>
      </div>
      {
        tab ? 
        <MyTweets /> :
        <LikedTweets />
      }
      </div>

      
      
    </Container>
  )
}