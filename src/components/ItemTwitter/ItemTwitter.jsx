import React, { useState } from 'react'
import classes from './ItemTwitter.module.scss'
import { useReg } from '../../hooks/useReg';
import { useUserProfileContext } from '../../context/UserContext';
import { useUpdatePostMutation } from '../../redux';

export const ItemTwitter = ({children}) => {
  const lastName = useReg(children.name)
  const UserProfile = useUserProfileContext()
  const [updatePost, { isLoading }] = useUpdatePostMutation()
  const [post, setPost] = useState(children)

  return (
    <div className={classes.item}>
      <div className={classes.header}>
        <div>
          <b>{children.name}</b>&nbsp;
          <span>@{lastName}</span>
        </div>
        {
          UserProfile === children.userId && <span>X</span>
        }
      </div>
      <div>{children.body}</div>
      <div>
        <b>Like {children.likes}</b>
      </div>
    </div>
  )
}