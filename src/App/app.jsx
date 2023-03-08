import { useState, useEffect } from 'react';
import styles from './app.module.css';
import api from '../utils/api';
import cn from "classnames";
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import PostList from '../components/PostList/post-list'

const App = () => {
  return (
    <>
      <Header></Header>
      <Main>
          <PostList/>
      </Main>
    </>
    
  )

}

export default App;
