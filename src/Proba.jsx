import React, { useState } from 'react';
import './App.css';
import { useGetPostsQuery, useAddPostsMutation, useDeletePostsMutation } from './redux';

function App() {
  const [count, setCount] = useState('');
  const [newPosts, setNewPosts] = useState('');
  const {data = [], isLoading} = useGetPostsQuery(count);
  const [addPosts, {isError}] = useAddPostsMutation();
  const [deletePosts] = useDeletePostsMutation();

  const handleAddPosts = async() => {
    if(newPosts) {
      await addPosts({
        "name": "Leanne Graham",
        "userId": 1,
        "body": newPosts,
        "likes": 0,
      }).unwrap();
      setNewPosts('');
    }
  }

  const handleDeletePosts = async (id) => {
    await deletePosts(id).unwrap();
  }

  if(isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <input 
        type="text"
        value={newPosts}
        onChange={(e) => setNewPosts(e.target.value)}
      />
      <button onClick={handleAddPosts}>add product</button>
      <select value={count} onChange={(e) => setCount(e.target.value)}>
        <option value="">all</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <ul>
        {
          data.filter(item => item.userId === 1).map(item => (
            <li key={item.id} onClick={() => handleDeletePosts(item.id)}>
              {item.name} {item.body}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
