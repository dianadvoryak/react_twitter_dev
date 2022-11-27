import React, { useState } from 'react'
import { useAddPostsMutation } from '../../redux'
import { Container } from '../Container/Container'
import classes from './Input.module.scss'

export const Input = () => {
  const [inputValue, setInputValue] = useState('') 
  const [addPost, {isLoading, isError}] = useAddPostsMutation();

  const validInput = (e) => {
    if(inputValue.length <= 200) {
      setInputValue(e.target.value)
    }
  }

  const sendMassage = async() => {
    await addPost({
      "name": "Leanne Graham",
      "userId": 1,
      "id": Math.floor(Math.random() * 4),
      "body": inputValue,
      "likes": 0,
    }).unwrap();
    setInputValue('');
  }

  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.border}>
          <textarea 
            value={inputValue}
            onChange={validInput}
            className={classes.input} 
            type='text' 
            placeholder='write twitt...'
            maxLength='200'
          />
          {
            inputValue && 
            <>
              <div className={classes.count}>{inputValue.length}/200</div>
              <div className={classes.wrapper_btn}>
              <button 
                onClick={sendMassage}
                type='submit' 
                className={classes.btn}
              >
                twitt
              </button>
              </div>
            </>
          }
          
        </div>
        {
          isLoading && <h1>Sending...</h1>
        }
        {
          isError && <h1>error, try again</h1>
        }
      </div>
    </Container>
  )
}