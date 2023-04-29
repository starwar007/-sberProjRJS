import React from 'react';
import styles from './app.module.css'
import { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import api from '../../utils/api';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Authorization from '../../pages/Authorization/Authorization';
import '@fontsource/source-sans-pro';
import Registration from '../../pages/Registration/Registration';
import {UserContext} from "../../context/ContextUser";
import { PostPage } from '../../pages/PostPage/PostPage';
import SearchInfo from '../SearchInfo/SearchInfo';
import {CardContext} from "../../context/cardContext";
import { NotFound } from '../../pages/NotFound/NotFound';
import { isLiked } from '../../utils/post';
import EditProfile from '../../pages/EditProfile/EditProfile';
import Footer from '../Footer/Footer';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';

function App() {

  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [editModalActive, setEditModalActive] = useState(false)
  const [modalActive, setModalActive] = useState(false);
  const [post, setPost] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  
   useEffect(() => {
     const tokenFromLS = localStorage.getItem('token');
      if (tokenFromLS) {
        api.setToken(tokenFromLS)
        api.getUserInfo()
        .then(res => {
          setCurrentUser(res);
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

  const onSubmitSendPost = useCallback((data, sendPost, fnRes, fnResURL) => {
    const {title, text, image, tags} = data;
    const dataPost = {
        title: title,
        text: text,
        image: image,
        tags:  tags.split(',') 
    } 
        if (!sendPost) {
          api.createNewPost(dataPost)
          .then(data => api.getPosts()
            .then(res => {setCards(res)
          }))
          .catch(() =>  navigate('*'))
          setModalActive(false)
        }
        else {
          api.editPost(dataPost, sendPost._id)
          .then(data => api.getPost(sendPost._id)
            .then(res => {
              setPost(res)
              api.getPosts()
              .then(responce => setCards(responce))
          }))
          .catch(() =>  navigate('*'))
          setEditModalActive(false)
        }
    fnRes();
    fnResURL();
    setPost(null);
}, [setModalActive, setEditModalActive, setCards])

  const handlePostLike = useCallback((post) => {
       const liked = isLiked(post.likes, currentUser._id)
         return api.changeLikePost(post._id, liked)
          .then((updatePost) => {
            const newPosts = cards.map(cardState => {
              return cardState._id === updatePost._id ? updatePost : cardState
            })
    if (!liked) {
      setFavorites(prevState => [...prevState, updatePost])
    } else {
      setFavorites(prevState => prevState.filter(card => card._id !== updatePost._id))
    }
      setCards(newPosts);
      return updatePost;
  })
}, [currentUser, cards])

  return (
    <UserContext.Provider value={{
      currentUser,
      setCurrentUser,
      setToken
    }}>

    <CardContext.Provider 
      value={{ cards, setCards, 
              modalActive, setModalActive, 
              editModalActive, setEditModalActive, 
              post, setPost, 
              handleLike: handlePostLike, 
              handleSendPost:onSubmitSendPost }}>
      <Header 
        SearchErase={handleInputChangeErase} 
        onSubmit={handleFormSubmit}
      />
      <main className={styles.main}>
      {(!location.pathname.includes('post')) && <SearchInfo searchText={searchQuery} />}
        <Routes>
          <Route element={ <Main searchQuery={searchQuery}/>} exact path="/"/>
          <Route element={ <Main searchQuery={searchQuery}/>} exact path="/-sberProjRJS"/>
          <Route exact path='/authorization' element={<Authorization/>}></Route>
          <Route exact path='/registration' element={<Registration/>}></Route>
          <Route exact path='/editProfile' element={<EditProfile/>}></Route>
          <Route exact path ='/post/:PostId' element={<PostPage/>}></Route>
          <Route exact path='/resetPassword' element={<ResetPassword/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </ main>
      <Footer />


      </CardContext.Provider>

    </UserContext.Provider>

  )
}

export default App;
