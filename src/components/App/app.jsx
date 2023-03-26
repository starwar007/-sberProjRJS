import React from 'react';
import styles from './app.module.css'
import { useState, useEffect, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import api from '../../utils/api';
import cn from "classnames";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PostList from '../../pages/PostList/PostList';
import Authorization from '../../pages/Authorization/Authorization';
import '@fontsource/source-sans-pro';
import Registration from '../../pages/Registration/Registration';
import {UserContext} from "../../context/ContextUser";
import { PostPage } from '../../pages/PostPage/PostPage';


function App() {
  const [usercontext, setusercontext] = useState(false);
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

   useEffect(() => {
     const tokenFromLS = localStorage.getItem('token');
      if (tokenFromLS) {
        api.setToken(tokenFromLS)
        api.getUserInfo()
        .then(res => {
          setCurrentUser(res.name)
          UserContext.displayName = res.name
        })
        setToken(tokenFromLS)
      }
   }, [currentUser])
  return (
    <>
      <UserContext.Provider value={[usercontext, setusercontext]}>
      <Header user = { currentUser }  />
      <main className={styles.main}>
        <Routes>
          <Route element={ <Main />} exact path="/"/>
          <Route exact path='/postlist' element={<PostList/>}></Route>
          <Route exact path='/authorization' element={<Authorization/>}></Route>
          <Route exact path='/registration' element={<Registration/>}></Route>
          <Route exact path ='/Post/:PostId' element={<PostPage/>}></Route>
        </Routes>
      </ main>
      <Footer />
      </UserContext.Provider>
    </>
  )
}

export default App;
