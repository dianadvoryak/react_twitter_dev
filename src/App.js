import React, { useState } from 'react';
import './App.css';
import { UserProfile } from './layouts/UserProfile/UserProfile';
import { Search } from './layouts/Search';
import { News } from './layouts/News';
import { Sidebar } from './layouts/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { LikedTweets } from './components/LikedTweets/LikedTweets';
import { MyTweets } from './components/MyTweets/MyTweets';

function App() {

  return (
    <div>
      <Sidebar />

      <Routes>
          <Route path="/" end element={<UserProfile />} />
          <Route path="search" element={<Search />} />
          <Route path="news" element={<News />} />
          {/* <Route path="*" element={<Notfoundpage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
