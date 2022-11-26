import React from 'react'
import classes from './ItemTwitter.module.scss'
import { useReg } from '../../hooks/useReg';
import { useUserProfileContext } from '../../context/UserContext';
import { useDeletePostsMutation } from '../../redux';

export const ItemTwitter = ({children}) => {
  const lastName = useReg(children.name)
  const UserProfile = useUserProfileContext()
  const [deletePost] = useDeletePostsMutation()

  const handleDeletePost = async (id) => {
    await deletePost(id).unwrap();
  }

  return (
    <div className={classes.item}>
      <div className={classes.header}>
        <div className={classes.wrapper_title}>
          <img 
            src={children.url} 
            className={classes.img}
          />&nbsp;
          <b>{children.name}</b>&nbsp;
          <span>@{lastName}</span>
        </div>
        {
          UserProfile === children.userId && 
          <span
            className={classes.remove}
            onClick={() => handleDeletePost(children.id)}
          >X</span>
        }
      </div>
      <div>{children.body}</div>
    </div>
  )
}