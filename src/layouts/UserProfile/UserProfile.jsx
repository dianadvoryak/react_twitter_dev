import React, { useState } from 'react'
import classes from './UserProfile.module.scss'
import background from '../../assets/background.jpg'
import avatar from '../../assets/avatar.jpg'
import { Container } from '../../components/Container/Container'
import { MyTwittes } from '../../components/MyTwittes/MyTwittes'
import { LikedTwittes } from '../../components/LikedTwittes/LikedTwittes';

export const UserProfile = () => {
  const [tab, setTab] = useState(true);
  const setActiveRigth = (tab === true) ? classes.link  + ' ' + classes.active : classes.link
  const setActiveLeft = (tab === false) ? classes.link  + ' ' + classes.active : classes.link
  
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
          className={setActiveRigth}
        >
          my twittes
        </div>
        <div 
          onClick={() => setTab(false)}
          className={setActiveLeft}
        >
          liked twittes
          </div>
      </div>
      {
        tab ? 
        <MyTwittes /> :
        <LikedTwittes />
      }
      </div>

      
      
    </Container>
  )
}