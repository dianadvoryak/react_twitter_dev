import React, { useState } from 'react'
import classes from './ItemTwitter.module.scss'
import { useReg } from '../../hooks/useReg';
import { useUserProfileContext } from '../../context/UserContext';
import { useDeletePostsMutation, useUpdatePostsMutation } from '../../redux';

export const ItemTwitter = ({children}) => {
  const lastName = useReg(children.name)
  const UserProfile = useUserProfileContext()
  const [deletePost] = useDeletePostsMutation()
  const [updatePost] = useUpdatePostsMutation()
  const [post, setPost] = useState(children)

  const handleDeletePost = async (id) => {
    await deletePost(id).unwrap()
  }

  const handleUpdatePost = async () => {
    if(children.likes === 0)
    await updatePost({...children, likes: 1})
    else await updatePost({...children, likes: 0})
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
      <div 
        className={classes.remove} 
        onClick={handleUpdatePost}
      >
        <b>Like {children.likes}</b>
      </div>
    </div>
  )
}