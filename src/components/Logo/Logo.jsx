import React from 'react'
import logo from '../../assets/logo.png'
import classes from './Logo.module.scss'

export const Logo = () => {

  return (
    <div className={classes.wrapper}>
      <img src={logo} className={classes.img}/>
      <h1 className={classes.title}>Twitter</h1>
    </div>
  )
}