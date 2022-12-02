import React, { useState, useRef } from 'react'
import { Container } from '../../components/Container/Container';
import { ItemTwitter } from '../../components/ItemTwitter/ItemTwitter';
import { useGetPostsQuery } from '../../redux';
import classes from './Search.module.scss'
import { useObserver } from '../../hooks/useObserver';

export const Search = () => {
  const [posts, setPosts] = useState(4); 
  const {data = [], isLoading} = useGetPostsQuery(posts)
  const [found, setFound] = useState({})
  const [searchValue, setSearchValue] = useState('')
  const lastElement = useRef()

  useObserver(lastElement, isLoading, () => setPosts(prev => prev+1))

  if(isLoading) return <h1 className={classes.loading}>Loading...</h1>

  const search = (e) => {
    setSearchValue(e.target.value);
    setPosts(4);
  }

  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.wrapper_input}>
          <input 
            type="text" 
            value={searchValue}
            onChange={(e) => search(e)}
            className={classes.input}
          />
        </div>
        {
          searchValue
          ? 
            data
              .filter(data => {
                const fullUser = (data.name + data.body).toLowerCase();
                return (fullUser.includes(searchValue.toLowerCase()))
              })
              .map(data => <ItemTwitter key={data.id}>{data}</ItemTwitter>)
          : <h1 className={classes.title}>Search something!</h1>
        }
        <div ref={lastElement} style={{height:5, background:'#C4CEEF'}}/>
      </div>
    </Container>
  )
}