import React from 'react';
import styles from './app.module.css'
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import api from '../../utils/api';
import cn from "classnames";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PostList from '../../pages/PostList/PostList';
import Auth from '../../pages/Authorization/Authorization';
import '@fontsource/source-sans-pro';


function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route
          element={
            <Main />
            }
            exact
            path="/"
          />
          <Route exact path='/postlist' element={<PostList/>}></Route>
          <Route exact path='/authorization' element={<Auth/>}></Route>
          <Route exact path ='/postCard'></Route>
        </Routes>
      </ main>
      <Footer />
      
    </>
  )
}

export default App;
