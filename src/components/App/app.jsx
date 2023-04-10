import React from 'react';
import styles from './app.module.css'
import { useState, useEffect, useContext, useCallback } from 'react';
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
import { isLiked } from '../../utils/post';

function App() {

  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

   useEffect(() => {
     const tokenFromLS = localStorage.getItem('token');
      if (tokenFromLS) {
        api.setToken(tokenFromLS)
        api.getUserInfo()
        .then(res => {
          setCurrentUser(res)
          .catch( err => navigate('*'))
        })
        setToken(tokenFromLS)
      }
   },[])

   const handleFormSubmit = (inputText) => {
    setSearchQuery(inputText);
  }

  const handleInputChangeErase = () => {
    setSearchQuery('');
  }

  const handlePostLike = useCallback((post) => {
      const liked = isLiked(post.likes, currentUser._id)
        return api.changeLikePost(post._id, liked)
         .then((updatePost) => {
           const newPosts = cards.map(cardState => {
             return cardState._id === updatePost._id ? updatePost : cardState
           })



  return (
    <UserContext.Provider value={{
      currentUser,
      setCurrentUser,
      setToken
    }}>

    <CardContext.Provider value={{ cards, setCards }}>

      <Header 
        SearchErase={handleInputChangeErase} 
        onSubmit={handleFormSubmit}
      />
      <main className={styles.main}>
        <SearchInfo searchText={searchQuery} />
        <Routes>
          <Route element={ <Main searchQuery={searchQuery}/>} exact path="/"/>
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