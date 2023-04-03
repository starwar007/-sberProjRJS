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

import SearchInfo from '../SearchInfo/SearchInfo';
import {CardContext} from "../../context/cardContext";

import { NotFound } from '../../pages/NotFound/NotFound';

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState('');

   useEffect(() => {
     const tokenFromLS = localStorage.getItem('token');
      if (tokenFromLS) {
        api.setToken(tokenFromLS)
        api.getUserInfo()
        .then(res => {
          setCurrentUser(res.name)
        })
        setToken(tokenFromLS)
      }
   }, [currentUser])

   console.log(currentUser)


   const handleFormSubmit = (inputText) => {
    setSearchQuery(inputText);
    // handleRequest();
  }

  // const handleRequest = () => {
  //   api.search(searchQuery)
  //     .then((searchResult) => {
  //       setCards(searchResult)
  //     })
  //     .catch(err => console.log(err))
  // }

<<<<<<< HEAD
=======
  const handleInputChangeErase = () => {
    // navigate('/');
    setSearchQuery('');
    // handleRequest();
  }





>>>>>>> 1949f3ebc2fd306a5237604e9c72aaa3d1aa8472
  return (
    <UserContext.Provider value={{
      currentUser, 
      setCurrentUser,
      setToken
    }}>

    <CardContext.Provider value={{ cards, setCards }}>
<<<<<<< HEAD
      <Header onSubmit={handleFormSubmit} 
=======

      <Header SearchErase={handleInputChangeErase} onSubmit={handleFormSubmit} 
>>>>>>> 1949f3ebc2fd306a5237604e9c72aaa3d1aa8472
      // onInput={handleInputChange}
      />
      <main className={styles.main}>
        <SearchInfo searchText={searchQuery} />
        <Routes>
          <Route element={ <Main searchQuery={searchQuery}/>} exact path="/"/>
          <Route exact path='/postlist' element={<PostList/>}></Route>
          <Route exact path='/authorization' element={<Authorization/>}></Route>
          <Route exact path='/registration' element={<Registration/>}></Route>
          <Route exact path ='/Post/:PostId' element={<PostPage/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </ main>
      <Footer />


      </CardContext.Provider>

    </UserContext.Provider>

  )
}

export default App;
