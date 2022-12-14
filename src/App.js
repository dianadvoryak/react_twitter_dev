import React, { useState } from 'react';
import './App.css';
import { UserProfile } from './layouts/UserProfile/UserProfile';
import { Search } from './layouts/Search/Search';
import { News } from './layouts/News/News';
import { Sidebar } from './layouts/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from './context/UserContext';

function App() {

  return (
    <UserContext>
      <Sidebar />

      <Routes>
          <Route path="/react_twitter_dev" end element={<UserProfile />} />
          <Route path="search" element={<Search />} />
          <Route path="news" element={<News />} />
      </Routes>
    </UserContext>
  );
}

export default App;
